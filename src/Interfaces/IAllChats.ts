import { Document, ObjectId} from 'mongoose';
import { IChat } from './IChat';

export interface IAllChats extends Document{   
    Email:String
    ListOfChats:IChat[]    
}