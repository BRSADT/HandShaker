import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IWorkersAgenda} from '../Interfaces/IWorkersAgenda';
import AgendaSchema from './AgendaModel';

const WorkersAgendaSchema=new Schema({
  EmailPremiumWorker:{type:String},
  ListOfAgendas: {type:[AgendaSchema]}
  })


  const WorkersAgendaModel=model<IWorkersAgenda>('WorkersAgenda',WorkersAgendaSchema);
  export default WorkersAgendaModel

  export async function addAgenda(input: IWorkersAgenda) {     
    const Agenda = await WorkersAgendaModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (Agenda==null) {
     const rec = await WorkersAgendaModel.create(input);
    
    }else{
        const HiringFinished = await WorkersAgendaModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfAgendas: {$each: input.ListOfAgendas}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteAgenda(EmailPremiumWorker: string, IdAgenda: string) { 
    console.log("1")    
    console.log("ID  "+IdAgenda)
    console.log("EMAIL  "+EmailPremiumWorker)
    
    const POST = await WorkersAgendaModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );    
    if (POST==null) {
     
    }else{       
      console.log("encontrado  "+IdAgenda)
      const POSTFinished = await WorkersAgendaModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfAgendas: {_id:IdAgenda}}})
      
    }    
  }



  export async function GetAgenda(EmailPremiumWorker: string) { 
      const arrAgenda = await WorkersAgendaModel.findOne({"EmailPremiumWorker":EmailPremiumWorker})      
    
      return arrAgenda;
    
  }