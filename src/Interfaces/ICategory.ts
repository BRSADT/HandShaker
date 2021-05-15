import { Document} from 'mongoose';
import {IProfession} from './IProfession'

export interface ICategory extends Document{
    Name:String
    Categories:IProfession[]

}