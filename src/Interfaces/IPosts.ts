import { Document, ObjectId} from 'mongoose';
import { IPost } from './IPost';

export interface IPosts extends Document{
    _id:ObjectId
    EmailPremiumWorker:string
    ListOfPosts: IPost[]
    IdString:String

}