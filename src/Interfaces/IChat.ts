import { Document, ObjectId} from 'mongoose';
import { IMessage } from './IMessage';

export interface IChat extends Document{   
    EmailChatWith:String
    ListOfMessages:IMessage[]    
}