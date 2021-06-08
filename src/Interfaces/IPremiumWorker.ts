import {Iuser} from '../Interfaces/Iuser';
import { IAddress } from './IAddress';
export interface IPremiumWorker extends Iuser{
    IdPremiumWorker:string
    Category:string
    Profession:string
    JobDescription:string
    EmailContact:String
    isPremium:Boolean
    Addresses:IAddress[]
    SuscriptionDate:Date
    PremiumType:boolean
    Id:String

}