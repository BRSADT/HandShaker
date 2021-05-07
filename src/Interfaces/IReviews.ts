import { Document} from 'mongoose';
import { IReview } from './IReview';

export interface IReviews extends Document{
    EmailPremiumWorker:string
    ListOfReview: IReview
    Id:String

}