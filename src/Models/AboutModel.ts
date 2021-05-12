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
    if (About==null) {
     const rec = await AboutModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await AboutModel.findOneAndUpdate({EmailWorker: input.EmailWorker}, {$set: {Description:input.Description}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteAbout(EmailWorker: string) { 
   
    const About = await AboutModel.findOne({ EmailWorker: EmailWorker } );   
    Logger.Info(About,true)
    if (About==null) {
     
    }else{       
        const AboutFinished = await AboutModel.findOneAndDelete({EmailWorker:EmailWorker})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetAbout(EmailWorker: string) { 
      const arrAbout = await AboutModel.findOne({EmailWorker:EmailWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrAbout,true)
      
      return arrAbout;
    
  }