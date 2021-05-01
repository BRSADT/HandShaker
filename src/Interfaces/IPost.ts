import { Document, ObjectId} from 'mongoose';
import { IImage } from './IImage';

export interface IPost extends Document{
    _id:ObjectId
    DateOfPost:Date
    TextOfPost:String
    PicturesOfPost:IImage[]
    IdString:String

}