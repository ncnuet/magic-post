import { InputError } from "@/types/controller";
import { findLevel1ById } from 'dvhcvn'
import { EOfficeType } from "@/types/post_office";
import BaseValidator, { IAddress, IContact } from "./base.validator";

export interface IOfficeCreate {
    name: string,
    address: IAddress,
    manager?: string,
    contact: IContact,
    post_office_type: EOfficeType,
    gather_office?: string,
}

export interface IOfficeDelete {
    id: string
}

export interface IOfficeUpdate {
    id: string,
    name?: string,
    address?: IAddress,
    manager?: string,
    contact?: IContact,
    post_office_type?: EOfficeType,
    gather_office?: string,
}

export default class OfficeValidator extends BaseValidator {
    private static checkName(name: string, und?: boolean) {
        if (name) {

        } else if (!und) throw new InputError("Must included office's name", "name");
    }

    private static checkType(type: string, und?: boolean) {
        if (type) {
            if (!Object.values(EOfficeType).includes(type as EOfficeType))
                throw new InputError("Invalid office's type", "post_office_type");
        } else if (!und) throw new InputError("Must included office's type", "post_office_type");
    }

    public static validateCreate(data: IOfficeCreate) {
        this.checkName(data.name);
        this.checkAddress(data.address);
        this.checkContact(data.contact);
        this.checkType(data.post_office_type);
        this.checkId(data.gather_office, true);
        this.checkId(data.manager, true);
    }

    public static validateDelete(data: IOfficeDelete) {
        this.checkId(data.id);
    }

    public static validateUpdate(data: IOfficeUpdate) {
        this.checkId(data.id, true);
        this.checkName(data.name, true);
        this.checkId(data.gather_office, true);
        this.checkId(data.manager, true);
        this.checkAddress(data.address, true);
        this.checkContact(data.contact, true);
        this.checkType(data.post_office_type, true);
    }
}