import { Document} from 'mongoose';
export interface IAddress extends Document{
    Address:string
    Number:string
    Reference:string
    LinkMaps:string
    Id:String

}