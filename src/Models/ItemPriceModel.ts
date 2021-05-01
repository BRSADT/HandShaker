
import { model, Schema } from 'mongoose';
import {IPost} from '../Interfaces/IPost';
import ImageSchema from './ImageModel';

const ItemPriceSchema=new Schema({
 
    Name:{type:String},
    Description:{type:String},
    Price:{type:Number},
    PictureImage:{type:ImageSchema}  

    })


   
const ItemPriceModel=model<IPost>('ItemPrice', ItemPriceSchema);
export { ItemPriceModel}
export default  ItemPriceSchema
