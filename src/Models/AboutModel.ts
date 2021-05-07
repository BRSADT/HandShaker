import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IAbout} from '../Interfaces/IAbout';


const AboutSchema=new Schema({
  EmailPremiumWorker:{type:String},
  Description:{type:String}
  })


  const AboutModel=model<IAbout>('About',AboutSchema);
  export default AboutModel

  export async function addAbout(input: IAbout) {     
    const About = await AboutModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (About==null) {
     const rec = await AboutModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await AboutModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$set: {Description:input.Description}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteAbout(EmailPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    
    Logger.Info(IdPost,true)
    console.log("id   "+IdPost)
    const POST = await AboutModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await AboutModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetAbout(EmailPremiumWorker: string) { 
      const arrPost = await AboutModel.findOne({"EmailPremiumWorker":EmailPremiumWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    
  }