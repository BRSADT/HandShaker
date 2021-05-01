import { model, Schema } from 'mongoose';
import {IPhoneNumber} from '../Interfaces/IPhoneNumber';


const TelephoneSchema=new Schema({
 
    Description:{type:String},
    Phone:{type:String}
    })


   
const PhoneModel=model<IPhoneNumber>('Phone',TelephoneSchema);
export {PhoneModel}
export default TelephoneSchema
