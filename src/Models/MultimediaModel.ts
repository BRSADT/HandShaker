import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IMultimedia} from '../Interfaces/IMultimedia';
import MultimediaItemsSchema from '../Models/MultimediaItemsModel';

const MultimediaSchema=new Schema({
 IdPremiumWorker:{type:String},
 ListOfMultimediaItems: {type:[MultimediaItemsSchema]}
  })


  const MultimediaModel=model<IMultimedia>('Multimedia',MultimediaSchema);
  export default MultimediaModel

  export async function addMultimedia(input: IMultimedia) {     
    const Multimedia = await MultimediaModel.findOne({ IdPremiumWorker: input.IdPremiumWorker } );   
    if (Multimedia==null) {
     const rec = await MultimediaModel.create(input);
    }else{
        const MultimediaFinished = await MultimediaModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfMultimediaItems}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteMultimedia(IdPremiumWorker: string, IdMultimedia: ObjectId) { 
   
    const Multimedia = await MultimediaModel.findOne({ IdPremiumWorker: IdPremiumWorker } );   
 
    if (Multimedia==null) {
     
    }else{       
        const MultimediaFinished = await MultimediaModel.findOneAndUpdate({IdPremiumWorker:IdPremiumWorker}, {$pull: {ListOfMultimediaItems: {_id:IdMultimedia}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }