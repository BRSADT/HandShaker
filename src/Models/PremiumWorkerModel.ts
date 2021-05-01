import { Schema } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import {IPremiumWorker} from '../Interfaces/IPremiumWorker';
import UserSchema from './UserModel'
import AddressSchema from './AddressModel'
import UserModel from './UserModel';


 const PremiumWorkerModel=UserSchema.discriminator('PremiumWorker',new Schema({
    
    IdPremiumWorker:{type:String},
    Category:{type:String},
    Profession:{type:String},
    JobDescription:{type:String},
    EmailContact:{type:[String]},
    isPremium:{type:Boolean},
    UserType:{type:String},
    Addresses:{type:[AddressSchema]},
    SuscriptionDate:Date,
    PremiumType:{type:Boolean}    
   })
 )
 
 export async function GetPremiumWorkerInformation(input: IPremiumWorker) {
  const User = await UserModel.findOne({ Email: input.Email } );
  if (!User) {      
    return "2";//Not found
  }else{    
    const WorkerPremiumUser= User as IPremiumWorker;
    WorkerPremiumUser.Password=""
    return WorkerPremiumUser;
  }
}

 export async function addUserPremium(input: IPremiumWorker) {
  console.log(input.UserType); 
  Logger.Info(input,true)
   

    const rec = await PremiumWorkerModel.create(input);
    return rec;
  }


  
  export async function GetPremiumWorkers() {
    const arrUser = await UserModel.find({})
    var WorkerUsers= new Array();  
    const WorkerUser= arrUser as IPremiumWorker[];
    WorkerUser.forEach(element => {
if  (element.UserType.toString().localeCompare("Premium")){
      element.Password=""
      element.Email=""
WorkerUsers.push(element)    
    }
    });

    WorkerUsers.forEach(element => {
            });
    return WorkerUsers;
  
}

 