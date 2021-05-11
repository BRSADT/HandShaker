import { Document, ObjectId} from 'mongoose';
import { IHiring } from './IHiring';

export interface IWorkersHiring extends Document{   
    EmailPremiumWorker:String
    ListOfHirings:IHiring[]    

}