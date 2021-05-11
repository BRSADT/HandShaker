import { Document, ObjectId} from 'mongoose';
import { IAgenda } from './IAgenda';

export interface IWorkersAgenda extends Document{   
    EmailPremiumWorker:String
    ListOfAgendas:IAgenda[]    
}