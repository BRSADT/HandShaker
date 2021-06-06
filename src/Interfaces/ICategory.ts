import { Document} from 'mongoose';
import {IProfession} from './IProfession'
import { IImage } from './IImage';
export interface ICategory extends Document{
    Name:String
    Categories:IProfession[]
    ImageCategory:IImage
}