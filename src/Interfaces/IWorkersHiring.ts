import { Document, ObjectId} from 'mongoose';
import { IHiring } from './IHiring';

export interface IWorkersHiring extends Document{   
    Email:String
    ListOfHirings:IHiring[]    

}