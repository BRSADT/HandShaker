import { Document} from 'mongoose';
import { IReview } from './IReview';

export interface IReviews extends Document{
    IdPremiumWorker:string
    ListOfReview: IReview
    Id:String

}