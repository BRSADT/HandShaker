
import { model, Schema } from 'mongoose';
import {IPromotion} from '../Interfaces/IPromotion';

const PromotiontSchema=new Schema({
    
    Title:{type:String},
    Description:{type:String},
    IdString:{type:String}
    
})


   
const PromotionModel=model<IPromotion>('Promotion', PromotiontSchema);
export {PromotionModel}
export default  PromotiontSchema
