import { Document} from 'mongoose';
import { Iuser } from './Iuser';

export interface IReview extends Document{
   RatingStar:number
   TextReview:string
   DateReview:Date
   EmailClient:string
   User:Iuser
   Id:string

}