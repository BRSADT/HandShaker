import { Document} from 'mongoose';
import { IAddress } from './IAddress';
import {Iuser} from '../Interfaces/Iuser';
export interface IWorker extends Document,Iuser{
    IdWorker?:string
    Category?:string
    Profession?:string
    JobDescription?:string
    EmailContact?:String[]
    isPremium?:Boolean
    Addresses?:IAddress[]
    WorkerType?:Boolean
   
    SetPremium(premium: boolean): void;

}