import { Document, ObjectId} from 'mongoose';
import { IAddress } from './IAddress';
import { Iuser } from './Iuser';
export interface IHiring extends Document{
    EmailWorker?:String
    Email?:String
    Subject?: String
    Date?:Date
    HiringDate?:Date
    indications?:String
    Status?:String
    Addresses?:IAddress[]
    IDcreated?:String
    userWorker?: Iuser
    userClient?: Iuser

}