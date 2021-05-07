import { Document} from 'mongoose';
export interface IAbout extends Document{
    EmailPremiumWorker:string
    Description:string
}