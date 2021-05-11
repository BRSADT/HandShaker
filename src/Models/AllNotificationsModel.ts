import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IAllNotifications} from '../Interfaces/IAllNotifications';
import NotificationsSchema from './NotificationsModel';

const AllNotificationsSchema=new Schema({
  Email:{type:String},
  ListOfNotifications: {type:[NotificationsSchema]}
  })


  const NotificationsModel=model<IAllNotifications>('AllNotifications',AllNotificationsSchema);
  export default NotificationsModel

  export async function addNotification(input: IAllNotifications) {     
    const Hiring = await NotificationsModel.findOne({ Email: input.Email } );   
    if (Hiring==null) {
     const rec = await NotificationsModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const HiringFinished = await NotificationsModel.findOneAndUpdate({Email: input.Email}, {$push: {ListOfNotifications: {$each: input.ListOfNotifications}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteNotification(Email: string, IdHiring: string) { 
    console.log("1")    
    console.log("ID  "+IdHiring)
    console.log("EMAIL  "+Email)
    
    const POST = await NotificationsModel.findOne({ Email: Email } );   
 
    if (POST==null) {
     
    }else{       
      console.log("encontrado  "+IdHiring)
      const POSTFinished = await NotificationsModel.findOneAndUpdate({Email:Email}, {$pull: {ListOfNotifications: {_id:IdHiring}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetNotifications(Email: string) { 
      const arrHirings = await NotificationsModel.findOne({Email:Email})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrHirings,true)
      
      return arrHirings;
    
  }