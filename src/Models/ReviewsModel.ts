import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IReviews} from '../Interfaces/IReviews';
import {IReview} from '../Interfaces/IReview';
import UserModel, { GetUserInformation } from '../Models/UserModel';
import ReviewSchema from './ReviewModel';
import { UpdateRating } from '../Models/UserModel';

const ReviewsSchema=new Schema({
 EmailPremiumWorker:{type:String},
 NumberReviews:{type:Number},
 Stars:{type:Number},
 SumStars:{type:Number},
 ListOfReviews: {type:[ReviewSchema]}
  })


  const ReviewsModel=model<IReviews>('Reviews',ReviewsSchema);
  export default ReviewsModel

  export async function addReview(EmailPremiumWorker: string, RatingStar: number,TextReview:string,DateReview:Date,EmailClient:string) {     
  
    console.log("add review")
    const Rback = await ReviewsModel.findOne({ EmailPremiumWorker:EmailPremiumWorker } );   

    if (Rback==null) {
      console.log("null")
      let newReviewsO = new Object() 
      const newReviews= newReviewsO as IReviews

      let arrayRev=new Array()
      let newReviewO = new Object() 
      const newReview= newReviewO as IReview
      newReview.RatingStar=RatingStar
      newReview.TextReview=TextReview
      newReview.DateReview=DateReview
      newReview.EmailClient=EmailClient
      arrayRev.push(newReview)
      arrayRev as  IReview[] 
      newReviews.ListOfReviews=arrayRev
      newReviews.EmailPremiumWorker=EmailPremiumWorker
  
      newReviews.Stars=RatingStar
      newReviews.SumStars=RatingStar
      newReviews.NumberReviews=1

     const rec = await ReviewsModel.create(newReviews);
     const UpdateUser= await UpdateRating(EmailPremiumWorker,RatingStar,1);
    }else{
      console.log("ya hay review")

      let newReviewsO = new Object() 
      const newReviews= newReviewsO as IReviews

      let arrayRev=new Array()
      let newReviewO = new Object() 
      const newReview= newReviewO as IReview
      newReview.RatingStar=RatingStar
      newReview.TextReview=TextReview
      newReview.DateReview=DateReview
      newReview.EmailClient=EmailClient
      arrayRev.push(newReview)
      arrayRev as  IReview[] 
    
    let Sum=Rback.SumStars+RatingStar//suma
    let NumberRev= Rback.NumberReviews+1//personas que calificaron
    let numberStars= Sum/NumberRev//promedio



    newReviews.SumStars=Sum
    newReviews.Stars=numberStars
    newReviews.NumberReviews=NumberRev


        const Review = await ReviewsModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker }, {$push: {ListOfReviews: {$each: arrayRev}}, $set: {"SumStars":newReviews.SumStars , "Stars":newReviews.Stars  , "NumberReviews":newReviews.NumberReviews}})
       let user= new UserModel  
        const UpdateUser= await UpdateRating(EmailPremiumWorker,numberStars,NumberRev);
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


  export async function GetReviews(EmailWorker: string) { 
   
    const Reviews = await ReviewsModel.findOne({ EmailPremiumWorker: EmailWorker } );   
 
    if (Reviews==null) {
     return "No"
    }else{     
     
      await Promise.all(Reviews.ListOfReviews.map(async (elem) => {
        try {
          // here candidate data is inserted into  
          const Response=await GetUserInformation(elem.EmailClient);
      if  (Response!=="2"){

        elem.User=Response

      }
        } catch (error) {
          console.log('error'+ error);
        }
      }))
        return  Reviews
      
      
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }