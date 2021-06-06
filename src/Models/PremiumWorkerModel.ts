import { Schema } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import {IPremiumWorker} from '../Interfaces/IPremiumWorker';
import UserSchema from './UserModel'
import AddressSchema from './AddressModel'
import UserModel from './UserModel';
import { IWorker } from '../Interfaces/IWorker';
import {addUserWorker} from './WorkerModel';


 const PremiumWorkerModel=UserSchema.discriminator('PremiumWorker',new Schema({
    
    IdPremiumWorker:{type:String},
    Category:{type:String},
    Profession:{type:String},
    JobDescription:{type:String},
    EmailContact:{type:[String]},
    isPremium:{type:Boolean},
    UserType:{type:String},
    Addresses:{type:[AddressSchema]},
    SuscriptionDate:{type:Date},
    PremiumType:{type:Boolean}    
   })
 )
 
 export async function GetPremiumWorkerInformation(input: IPremiumWorker) {
   //console.log("Email .. "+input.Email)

  const User = await UserModel.findOne({ Email: input.Email } );
  //Logger.Info(User,true)
  if (User==null) {      
 // console.log("no entro")
    return "2";//Not found
  }else{    
    const WorkerPremiumUser= User as IPremiumWorker;
    WorkerPremiumUser.Password=""
   // console.log("lo encontro")
   // Logger.Info(WorkerPremiumUser,true)
    return WorkerPremiumUser;
  }
}



export async function UpdatePremiumWorkerInformation(input: IPremiumWorker) {
 // console.log("input")
  //Logger.Info(input,true)
 // console.log("JSON")
let arr=JSON.stringify(input)
//  Logger.Info(arr,true)
const User = await PremiumWorkerModel.findOneAndUpdate({ Email: input.Email },input);
   // Logger.Info(User,true)
  }


 export async function addUserPremium(input: IPremiumWorker) {
   console.log("crear Premium")
 // console.log(input.UserType); 
 // Logger.Info(input,true)
   input.PremiumType=true;
   input.isPremium=true;
   input.UserType="PremiumWorker"

    const rec = await PremiumWorkerModel.create(input);
    return 1;
  }

  export async function PremiumToWorker(input: IWorker) {
  //console.log("input TO PREMIUM")
  //Logger.Info(input,true)
 
 // console.log("JSON")
  let arr=JSON.stringify(input)
 // console.log("UNSET")
 // console.log("UNSET"+input.Email)
 
  const User = await UserModel.findOneAndDelete({ Email: input.Email });
  const PremUser= User as IPremiumWorker;
  const WorkerUser = <IWorker>{};
  WorkerUser.Email=input.Email
  WorkerUser.Password=input.Password
  WorkerUser.Name=PremUser.Name
  WorkerUser.LastName=PremUser.LastName
  WorkerUser.Id=PremUser.Id
  WorkerUser.Category=PremUser.Category
  WorkerUser.Profession=PremUser.Profession
  WorkerUser.JobDescription=PremUser.JobDescription
  WorkerUser.EmailContact=PremUser.EmailContact
  WorkerUser.isPremium=false
  WorkerUser.Addresses=PremUser.Addresses
  WorkerUser.WorkerType=true
  WorkerUser.IdUser=PremUser.IdUser
  WorkerUser.ProfilePicture=PremUser.ProfilePicture
  WorkerUser.Phones=PremUser.Phones
  WorkerUser.Birthday=PremUser.Birthday
  WorkerUser.Id=PremUser.Id
  WorkerUser.UserType="Worker"

  //console.log("WorkerUser")
  //Logger.Info(WorkerUser,true);
  addUserWorker(WorkerUser).then(res=>{
   //console.log("respondio")
    return "cambiado"
  });
}
  


  
  export async function GetPremiumWorkers() {
    const arrUser = await UserModel.find({})
    var WorkerUsers= new Array();  
    const WorkerUser= arrUser as IPremiumWorker[];
    WorkerUser.forEach(element => {
   //   console.log("tipo "+element.UserType.toString())
if  (element.UserType.includes("Premium")){
  //console.log("si ")
      element.Password=""     
      WorkerUsers.push(element)    
    }
    });

    WorkerUsers.forEach(element => {
            });
    return WorkerUsers;
  
}

export async function PremiumWorkersCategory(Category: string) {
  const arrWorker = await PremiumWorkerModel.find({Category:Category})
 /// Logger.Info(arrWorker,true);    
  return arrWorker;

}
export async function PremiumWorkersProfession(Profession: string) {
const arrWorker = await PremiumWorkerModel.find({Profession:Profession})
//Logger.Info(arrWorker,true);    
return arrWorker;

}


export default PremiumWorkerModel