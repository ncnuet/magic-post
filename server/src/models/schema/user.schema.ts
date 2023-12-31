
import { IUserRole } from '@/types/auth';
import { Document, ObjectId, Schema } from 'mongoose';
import { OfficeBaseModel } from '@/models/base/office.base';
import { IAddress, addressSchema } from './address.schema';


export enum EGenderType {
    MALE = "male",
    FEMALE = "female",
}

export interface IUserDB {
    username: string;
    password: string;
    role: IUserRole;
    version: number;
    email: string;
    phone: string;
    name: string;
    office: string;
    active: boolean;
    creator: string;
    avatar: string;
    address: IAddress;
    gender: EGenderType;
}

export interface IUserSchema
    extends Omit<IUserDB, "office" | "creator">, Document {
    office: ObjectId;
    creator: ObjectId
}

export const userSchema = new Schema<IUserSchema>(
    {
        username: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        version: { type: Number, required: true },
        email: { type: String, unique: true, index: true },
        phone: { type: String, unique: true, index: true },
        name: { type: String },
        office: { type: Schema.Types.ObjectId, ref: OfficeBaseModel },
        active: { type: Boolean, require: true },
        creator: { type: Schema.Types.ObjectId },
        avatar: {type: String},
        address: {type: addressSchema},
        gender: {type: String}
    },
    { timestamps: true });