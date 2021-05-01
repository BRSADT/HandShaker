import { Document} from 'mongoose';
import { IItemPrice } from './IItemPrice';

export interface IPrices extends Document{
    IdPremiumWorker:string
    ListOfPrices: IItemPrice[]
    Id:String

}