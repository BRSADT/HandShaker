import { model, Schema } from 'mongoose';
import {IImage} from '../Interfaces/IImage';


const ImageSchema=new Schema({
 
    Path:{type:String},
    Name:{type:String}
    })


   
const ImageModel=model<IImage>('Image',ImageSchema);
export {ImageModel}
export default ImageSchema
