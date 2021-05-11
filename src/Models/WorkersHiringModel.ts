import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IWorkersHiring} from '../Interfaces/IWorkersHiring';
import HiringSchema from './HiringModel';

const WorkersHiringSchema=new Schema({
  EmailPremiumWorker:{type:String},
  ListOfHirings: {type:[HiringSchema]}
  })


  const WorkersHiringModel=model<IWorkersHiring>('WorkersHiring',WorkersHiringSchema);
  export default WorkersHiringModel

  export async function addHiring(input: IWorkersHiring) {     
    const Hiring = await WorkersHiringModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (Hiring==null) {
     const rec = await WorkersHiringModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const HiringFinished = await WorkersHiringModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfHirings: {$each: input.ListOfHirings}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteHiring(EmailPremiumWorker: string, IdHiring: string) { 
    console.log("1")    
    console.log("ID  "+IdHiring)
    console.log("EMAIL  "+EmailPremiumWorker)
    
    const POST = await WorkersHiringModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
 
    if (POST==null) {
     
    }else{       
      console.log("encontrado  "+IdHiring)
      const POSTFinished = await WorkersHiringModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfHirings: {_id:IdHiring}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetHiring(EmailPremiumWorker: string) { 
      const arrHirings = await WorkersHiringModel.findOne({EmailPremiumWorker:EmailPremiumWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrHirings,true)
      
      return arrHirings;
    
  }