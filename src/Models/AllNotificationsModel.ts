import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IAllNotifications} from '../Interfaces/IAllNotifications';
import NotificationsSchema from './NotificationsModel';
import {UserSchema} from './UserModel'
import { GetUserInformation } from '../Models/UserModel';

const AllNotificationsSchema=new Schema({
  Email:{type:String},
  ListOfNotifications: {type:[NotificationsSchema]},
  userWorker:{type:[UserSchema]},
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
      const arrNotifications = await NotificationsModel.findOne({Email:Email})
      let NotificationArr= new Array()
   if  (arrNotifications!=null){
     
    
          

      NotificationArr= arrNotifications.ListOfNotifications          
       
      await Promise.all(NotificationArr.map(async (elem) => {
        try {
          // here candidate data is inserted into  
          elem.userFrom=await GetUserInformation(elem.EmailFrom);
          console.log("email de ",elem.EmailFrom.Name )
        } catch (error) { 
          console.log('error'+ error);
        }}
   
           
        
        ))
      //.find({ _id : IdPremiumWorker })
      arrNotifications.ListOfNotifications =NotificationArr

   
      
      return arrNotifications;}
      else 
      return "NO"
    
  }