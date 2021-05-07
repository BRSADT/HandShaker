import { Document} from 'mongoose';
import { IItemPrice } from './IItemPrice';

export interface IPrices extends Document{
    EmailPremiumWorker:string
    ListOfPrices: IItemPrice[]
    Id:String

}