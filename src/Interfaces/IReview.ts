import { Document} from 'mongoose';

export interface IReview extends Document{
   RatingStar:number
   TextReview:String
   DateReview:Date
   IdClient:String
   Id:String

}