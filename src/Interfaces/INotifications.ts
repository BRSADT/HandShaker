import { Document, ObjectId} from 'mongoose';

export interface INotifications extends Document{
    EmailFrom:String
    Description: String
    Date:Date
    Subject:String
}