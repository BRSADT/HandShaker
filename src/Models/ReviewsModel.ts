import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IReviews} from '../Interfaces/IReviews';
import ReviewSchema from './ReviewModel';

const ReviewsSchema=new Schema({
 IdPremiumWorker:{type:String},
 ListOfReviews: {type:[ReviewSchema]}
  })


  const ReviewsModel=model<IReviews>('Reviews',ReviewsSchema);
  export default ReviewsModel

  export async function addReview(input: IReviews) {     
  
    const Multimedia = await ReviewsModel.findOne({ IdPremiumWorker:input.IdPremiumWorker } );   

    if (Multimedia==null) {
     const rec = await ReviewsModel.create(input);
    }else{
        const MultimediaFinished = await ReviewsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfReview}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteReview(IdPremiumWorker: string, IdMultimedia: ObjectId) { 
   
    const Multimedia = await ReviewsModel.findOne({ IdPremiumWorker: IdPremiumWorker } );   
 
    if (Multimedia==null) {
     
    }else{       
        const MultimediaFinished = await ReviewsModel.findOneAndUpdate({IdPremiumWorker:IdPremiumWorker}, {$pull: {ListOfMultimediaItems: {_id:IdMultimedia}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }