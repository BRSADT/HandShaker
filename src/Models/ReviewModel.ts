
import { model, Schema } from 'mongoose';
import {IReview} from '../Interfaces/IReview';
import { UserSchema } from './UserModel';


const ReviewSchema=new Schema({
 
    RatingStar:{type:Number},
    TextReview:{type:String},
    DateReview:{type:Date},
    EmailClient:{type:String},
    IdClient:{type:String},
    User:{type:UserSchema}

    })


   
const ReviewModel=model<IReview>('Review', ReviewSchema);
export {ReviewModel}
export default  ReviewSchema
