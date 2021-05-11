import { Document, ObjectId} from 'mongoose';
import { IAddress } from './IAddress';
export interface IHiring extends Document{
    Email:String
    Subject: String
    Date:Date
    Especifications:String
    Addresses:IAddress[]
    Indicator:String 
}