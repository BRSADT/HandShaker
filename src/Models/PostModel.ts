
import { model, Schema } from 'mongoose';
import {IPost} from '../Interfaces/IPost';
import ImageSchema from './ImageModel';

const PostSchema=new Schema({
 
    DateOfPost:{type:Date},
    TextOfPost:{type:String},
    PicturesOfPost:{type:[ImageSchema]}  

    })


   
const PostModel=model<IPost>('Post', PostSchema);
export {PostModel}
export default  PostSchema
