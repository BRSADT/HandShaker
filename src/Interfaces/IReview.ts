import { Document} from 'mongoose';

export interface IReview extends Document{
   RatingStar:number
   TextReview:String
   DateReview:Date
   EmailClient:String
   Id:String

}