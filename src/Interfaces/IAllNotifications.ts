import { Document, ObjectId} from 'mongoose';
import { INotifications } from './INotifications';

export interface IAllNotifications extends Document{   
    Email:String
    ListOfNotifications:INotifications[]    

}