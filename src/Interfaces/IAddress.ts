import { Document} from 'mongoose';
export interface IAddress extends Document{
    Address:string
    Number:string
    BAddress1:string
    BAddress2:string
    neighborhood:string
    Reference:string
    LinkMaps:string
    Id:String

}