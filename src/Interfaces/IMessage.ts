import { Document, ObjectId} from 'mongoose';

export interface IMessage extends Document{
    _id:ObjectId
    IdUserFrom:String
    MessageText:String
    MessageDate:Date
    Id:String

}
  