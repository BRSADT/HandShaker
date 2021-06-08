import { Document, ObjectId} from 'mongoose';
import { IImage } from './IImage';

export interface IPromotion extends Document{
  
    Title:String
    Description:String
    IdString:String

}