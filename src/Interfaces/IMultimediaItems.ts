import { Document} from 'mongoose';
import { IImage } from './IImage';

export interface IMultimediaItems extends Document{
    MultimediaImage:IImage[]
    MultimediaText:String
    MultimediaDate:Date
    Id:String

}