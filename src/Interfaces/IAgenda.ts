import { Document, ObjectId} from 'mongoose';
export interface IAgenda extends Document{
    EventType:String
    Title: String
    Date:Date
    EmailUserTo:String
    Description:String
}