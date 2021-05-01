
import { model, Schema } from 'mongoose';
import {IAddress} from '../Interfaces/IAddress';


const AddressSchema=new Schema({
 
    Address:{type:String},
    Number:{type:String},
    Reference:{type:String},
    LinkMaps:{type:String},
    Id:{type:String}

    })


   
const PhoneModel=model<IAddress>('Address', AddressSchema);
export {PhoneModel}
export default  AddressSchema
