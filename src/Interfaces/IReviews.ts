import { Document} from 'mongoose';
import { IReview } from './IReview';

export interface IReviews extends Document{
    EmailPremiumWorker:string
    ListOfReviews: IReview[]
    NumberReviews:number,
    Stars: number,
    SumStars: number,
    Id:String

}