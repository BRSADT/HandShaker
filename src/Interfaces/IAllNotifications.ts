import { Document, ObjectId} from 'mongoose';
import { INotifications } from './INotifications';
import { Iuser } from './Iuser';

export interface IAllNotifications extends Document{   
    Email:string
    ListOfNotifications:INotifications[]    
    userWorker:Iuser
}