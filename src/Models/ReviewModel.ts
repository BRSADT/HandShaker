
import { model, Schema } from 'mongoose';
import {IReview} from '../Interfaces/IReview';


const ReviewSchema=new Schema({
 
    RatingStart:{type:Number},
    TextReview:{type:String},
    DateReview:{type:Date},
    IdClient:{type:String}


    })


   
const ReviewModel=model<IReview>('Review', ReviewSchema);
export {ReviewModel}
export default  ReviewSchema
