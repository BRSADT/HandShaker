
import { model, Schema } from 'mongoose';
import {IHiring} from '../Interfaces/IHiring';
import AddressSchema from './AddressModel'
const HiringSchema=new Schema({
  
    Email:{type:String},
    Subject:{type:String},
    Date:{type:Date},
    Indicator:{type:String},
    Addresses:{type:[AddressSchema]},

    })


   
const HiringModel=model<IHiring>('Hiring', HiringSchema);
export {HiringModel}
export default  HiringSchema
