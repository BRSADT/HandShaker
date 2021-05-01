import { Document} from 'mongoose';
import { IAddress } from './IAddress';
import {Iuser} from '../Interfaces/Iuser';
export interface IClient extends Document,Iuser{
    IdClient:string
    UserType:String
    Addresses:IAddress[]
    Id:String

}