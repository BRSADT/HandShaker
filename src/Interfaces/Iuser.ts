import { Document} from 'mongoose';
import {IPhoneNumber} from '../Interfaces/IPhoneNumber';
import {IImage} from '../Interfaces/IImage';
export interface Iuser extends Document{
    Email:string
    Password:string
    Name:string
    LastName:string
    IdUser:String
    RatingStar:number
    NReviews:number
    ProfilePicture:IImage
    HeaderPicture:IImage
    Phones:IPhoneNumber[]
    Birthday:Date
    Id:String

    UserType:String
    comparePassword(password: string): boolean;
    AddPhone(PhoneDescription:String,Phone:String):void
    GetPhones():IPhoneNumber[]
}