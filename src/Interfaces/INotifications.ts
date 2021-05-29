import { Document, ObjectId} from 'mongoose';
import { Iuser } from './Iuser';

export interface INotifications extends Document{
    EmailFrom:String
    Description: String
    Date:Date
    Subject:String
    userFrom:Iuser  
}