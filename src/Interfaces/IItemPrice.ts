import { Document} from 'mongoose';
import { IImage } from './IImage';

export interface IItemPrice extends Document{
    Name:String
    Description:String
    Price:Number
    PictureImage:IImage
    Id:String

}