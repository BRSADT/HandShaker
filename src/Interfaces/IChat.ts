import { Document, ObjectId} from 'mongoose';
import { IMessage } from './IMessage';

export interface IChat extends Document{
    _id:ObjectId
    IdUser:String
    ListOfMessages:IMessage[]
    Id:String

}