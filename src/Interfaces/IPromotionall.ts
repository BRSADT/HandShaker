import { Document} from 'mongoose';
import { IPromotion } from './IPromotion';
import { Iuser } from './Iuser';

export interface IPromotionall extends Document{
    EmailPremiumWorker:string
    ListOfPromotions: IPromotion[]
    userWorker?: Iuser
    Id?:String

}