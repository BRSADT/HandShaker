
import { model, Schema } from 'mongoose';
import {IHiring} from '../Interfaces/IHiring';
import AddressSchema from './AddressModel'
const HiringSchema=new Schema({
  
    EmailWorker:{type:String},
    Email:{type:String},
    Subject:{type:String},
    Date:{type:Date},
    HiringDate:{type:Date},    
    indications:{type:String},
    Status:{type:String},
    Addresses:{type:[AddressSchema]},
    IDcreated:{type:String}
    })


   
const HiringModel=model<IHiring>('Hiring', HiringSchema);
export {HiringModel}
export default  HiringSchema
