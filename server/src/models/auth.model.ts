import { RowDataPacket } from "mysql2";
import * as bcrypt from "bcryptjs";
import { UserModel } from "./schema/user.schema";
import { IQueryableUser, IUserWithoutVersion } from "@/types/auth";
interface IAccountReponseData extends IUserWithoutVersion {
    hashPassword: string
}
class AuthModel {
    /**
     * Checks if the user is existed in the database. 
     * Search by the username/uid and verified by the password
     * @param _username username
     * @param _password 
     * @returns IUser if the user exists or undefined otherwise
     */
    async findUserByPassword(_username: string, _password: string): Promise<IUserWithoutVersion> {
        const user = await UserModel.findOne(
            { username: _username },
            { uid: 1, role: 1, username: 1, password: 1 })
            .exec();

        if (!user) return undefined;

        const { uid, username, password, role } = user;
        return _password
            ? await bcrypt.compare(_password, password) && { uid, username, role }
            : undefined
    }

    /**
     * Check if the user linking with given email is existed in the database.
     * @param email 
     * @returns UID if the user exists or undefined otherwise
     */
    async findUserByInfo(info: IQueryableUser): Promise<IQueryableUser> {
        const user = await UserModel.findOne(
            {
                $or: [
                    { username: info.username },
                    { email: info.email },
                    { phone: info.phone },
                    { uid: info.uid }
                ]
            },
            { email: true, username: true, phone: true, uid: true })
            .exec()

        if (!user) return undefined;
        const { username, phone, uid, email } = user;

        return { username, phone, uid, email };
    }

    /**
     * Reset password 
     * @param uid 
     * @param password 
     * @returns 
     */
    async updatePassword(uid: string, password: string): Promise<any> {
        const user = UserModel.updateOne({ uid }, { password: await bcrypt.hash(password, 10) }).exec();

        if (!user) return undefined;
    }

    
}

export default new AuthModel()