import { Document} from 'mongoose';
export interface IAbout extends Document{
    EmailWorker:string
    Description:string
}