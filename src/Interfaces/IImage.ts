import { Document} from 'mongoose';

export interface IImage extends Document{
    Path:String
    Name:String
    Id:String

}