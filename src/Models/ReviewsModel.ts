import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IReviews} from '../Interfaces/IReviews';
import ReviewSchema from './ReviewModel';

const ReviewsSchema=new Schema({
 EmailPremiumWorker:{type:String},
 ListOfReviews: {type:[ReviewSchema]}
  })


  const ReviewsModel=model<IReviews>('Reviews',ReviewsSchema);
  export default ReviewsModel

  export async function addReview(input: IReviews) {     
  
    const Multimedia = await ReviewsModel.findOne({ EmailPremiumWorker:input.EmailPremiumWorker } );   

    if (Multimedia==null) {
     const rec = await ReviewsModel.create(input);
    }else{
        const MultimediaFinished = await ReviewsModel.findOneAndUpdate({EmailPremiumWorker:input.EmailPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfReview}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteReview(EmailPremiumWorker: string, IdMultimedia: ObjectId) { 
   
    const Multimedia = await ReviewsModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
 
    if (Multimedia==null) {
     
    }else{       
        const MultimediaFinished = await ReviewsModel.findOneAndUpdate({EmailPremiumWorker: EmailPremiumWorker }, {$pull: {ListOfMultimediaItems: {_id:IdMultimedia}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }