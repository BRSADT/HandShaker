import { Document} from 'mongoose';
import { IImage } from './IImage';

export interface IProfession extends Document{
    Name:String
    Description:string  
    ImageProfession: IImage
}