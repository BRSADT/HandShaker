import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IMultimedia} from '../Interfaces/IMultimedia';
import MultimediaItemsSchema from '../Models/MultimediaItemsModel';

const MultimediaSchema=new Schema({
 EmailPremiumWorker:{type:String},
 ListOfMultimediaItems: {type:[MultimediaItemsSchema]}
  })


  const MultimediaModel=model<IMultimedia>('Multimedia',MultimediaSchema);
  export default MultimediaModel

  export async function addMultimedia(input: IMultimedia) {     
    const Multimedia = await MultimediaModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (Multimedia==null) {
     const rec = await MultimediaModel.create(input);
    }else{
        const MultimediaFinished = await MultimediaModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfMultimediaItems}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteMultimedia(EmailPremiumWorker: string, IdMultimedia: ObjectId) { 
   
    const Multimedia = await MultimediaModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
 
    if (Multimedia==null) {
     
    }else{       
        const MultimediaFinished = await MultimediaModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfMultimediaItems: {_id:IdMultimedia}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    

    }
    export async function GetMultimedia(EmailPremiumWorker: string) { 
      const arrPost = await MultimediaModel.findOne({EmailPremiumWorker:EmailPremiumWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    


  }