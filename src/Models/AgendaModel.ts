import { model, Schema } from 'mongoose';
import {IAgenda} from '../Interfaces/IAgenda';
import AddressSchema from './AddressModel'
const AgendaSchema=new Schema({
  
    EmailUserTo:{type:String},
    EventType:{type:String},
    Title:{type:String},
    Date:{type:Date},
    Description:{type:String},
 
    })


   
const AgendaModel=model<IAgenda>('AgendaModel', AgendaSchema);
export {AgendaModel}
export default  AgendaSchema
