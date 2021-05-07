import { Document} from 'mongoose';
import { IMultimediaItems } from './IMultimediaItems';

export interface IMultimedia extends Document{
    EmailPremiumWorker:string
    ListOfMultimediaItems: IMultimediaItems[]
    Id:String

}