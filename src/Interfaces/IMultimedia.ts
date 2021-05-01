import { Document} from 'mongoose';
import { IMultimediaItems } from './IMultimediaItems';

export interface IMultimedia extends Document{
    IdPremiumWorker:string
    ListOfMultimediaItems: IMultimediaItems[]
    Id:String

}