import { Schema } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import {IWorker} from '../Interfaces/IWorker';
import UserSchema from './UserModel'
import AddressSchema from './AddressModel'
import UserModel from './UserModel';
import {addUserPremium} from './PremiumWorkerModel';
import { IPremiumWorker } from '../Interfaces/IPremiumWorker';


const WorkerModel=UserSchema.discriminator('Worker',new Schema({

    IdWorker:{type:String},
    Category:{type:String},
    Profession:{type:String},
    JobDescription:{type:String},
    EmailContact:{type:[String]},
    isPremium:{type:Boolean},
    UserType:{type:String},
    Addresses:{type:[AddressSchema]},
    WorkerType:{type:Boolean}    
   })
 )
 


 export async function addUserWorker(input: IWorker) {
    Logger.Info(input,true)
    console.log(input.Profession);

    const rec = await WorkerModel.create(input);
    return rec;
  }


export async function UpdateWorkerInformation(input: IWorker) {
  console.log("input")
  Logger.Info(input,true)
  console.log("JSON")
let arr=JSON.stringify(input)
  Logger.Info(arr,true)
const User = await UserModel.findOneAndUpdate({ Email: input.Email },input);
    Logger.Info(User,true)
  }

  export async function WorkerToPremium(input: IPremiumWorker) {
    console.log("input TO Woker")
    Logger.Info(input,true)
 
  console.log("JSON")
  let arr=JSON.stringify(input)
  console.log("UNSET")
  console.log("UNSET"+input.Email)
 
  const User = await UserModel.findOneAndDelete({ Email: input.Email });
  
  
  const PremUser= User as IPremiumWorker;
  Logger.Info(PremUser,true);
 
  console.log("AdressesPrem" +PremUser.Addresses)

  const WorkerPremUser = <IPremiumWorker>{};
  WorkerPremUser.Email=input.Email
  WorkerPremUser.Password=input.Password
  WorkerPremUser.Name=PremUser.Name
  WorkerPremUser.LastName=PremUser.LastName
  WorkerPremUser.Id=PremUser.Id
  WorkerPremUser.Category=PremUser.Category
  WorkerPremUser.Profession=PremUser.Profession
  WorkerPremUser.JobDescription=PremUser.JobDescription
  WorkerPremUser.EmailContact=PremUser.EmailContact
  WorkerPremUser.isPremium=true
  WorkerPremUser.Addresses=PremUser.Addresses
  WorkerPremUser.SuscriptionDate=input.SuscriptionDate
  WorkerPremUser.PremiumType=true
  WorkerPremUser.IdUser=PremUser.IdUser
  WorkerPremUser.ProfilePicture=PremUser.ProfilePicture
  WorkerPremUser.Phones=PremUser.Phones
  WorkerPremUser.Birthday=PremUser.Birthday
  WorkerPremUser.Id=PremUser.Id
  WorkerPremUser.UserType="PremiumWorker"

  console.log("WorkerUser")
  Logger.Info(WorkerPremUser,true);
  addUserPremium(WorkerPremUser);
}
  


  export async function GetWorkerInformation(input: IWorker) {
    const User = await UserModel.findOne({ Email: input.Email } );
    if (!User) {      
      return "2";//Not found
    }else{    
      const WorkerUser= User as IWorker;
      WorkerUser.Password="";
      return WorkerUser;
    }
  }


  export async function GetAllWorkers() {
    const arrUser = await UserModel.find({})
        
      const WorkerUser= arrUser as IWorker[];
      var WorkerUsers= new Array();  

      WorkerUser.forEach(element => {
if  (element.UserType.toString().includes("Worker")){
      element.Password=""
      element.Email=""
      WorkerUsers.push(element)    }
      });


      return WorkerUsers;
    
  }

  export async function GetOnlyWorkers() {
      const arrUser = await UserModel.find({})
      var WorkerUsers= new Array();  
      const WorkerUser= arrUser as IWorker[];
      WorkerUser.forEach(element => {
if  (element.UserType.toString().localeCompare("Worker")==0){
        element.Password=""
        element.Email=""
  WorkerUsers.push(element)    
      }
      });

      WorkerUsers.forEach(element => {
              });
      return WorkerUsers;
    
  }



 

  export default WorkerModel