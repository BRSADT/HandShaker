import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IAbout} from '../Interfaces/IAbout';


const AboutSchema=new Schema({
  EmailWorker:{type:String},
  Description:{type:String}
  })


  const AboutModel=model<IAbout>('About',AboutSchema);
  export default AboutModel

  export async function addAbout(input: IAbout) {     
    const About = await AboutModel.findOne({ EmailWorker: input.EmailWorker } );   
    let Res;
    if (About==null) {
      Res = await AboutModel.create(input);
   
    }else{
      Res = await AboutModel.findOneAndUpdate({EmailWorker: input.EmailWorker}, {$set: {Description:input.Description}}) 
    } 
    return Res   
  }

  export async function DeleteAbout(EmailWorker: string) { 
    
    const About = await AboutModel.findOne({ EmailWorker: EmailWorker } );   
    Logger.Info(About,true)
    if (About==null) {
       return (0)
    }else{       
        const AboutFinished = await AboutModel.findOneAndDelete({EmailWorker:EmailWorker})
        return (1)
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetAbout(EmailWorker: string) { 
      const arrAbout = await AboutModel.findOne({EmailWorker:EmailWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrAbout,true)
      
      return arrAbout;
    
  }