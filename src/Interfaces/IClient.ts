import { Document} from 'mongoose';
import { IAddress } from './IAddress';
import {Iuser} from '../Interfaces/Iuser';
export interface IClient extends Iuser{
    UserType:String
    Addresses:IAddress[]
    ClientType:Boolean
}