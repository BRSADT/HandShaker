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
 console.log("agrega Worker")
  const User = await UserModel.findOne({ Email: input.Email });
  
  if (User==null){
    console.log("add Workerrrrrrr");
    input.UserType="Worker"
    input.WorkerType=true;
    input.isPremium=false;
    Logger.Info(input,true)
    const rec = await WorkerModel.create(input);
  return "1";
  }else
  {
    return "0";

  }
    
  }


export async function UpdateWorkerInformation(input: IWorker) {
  console.log("input")
  //Logger.Info(input,true)
  console.log("JSON")
let arr=JSON.stringify(input)
  //Logger.Info(arr,true)
const User = await WorkerModel.findOneAndUpdate({ Email: input.Email },input);
  //  Logger.Info(User,true)
  }

  export async function WorkerToPremium(input: IPremiumWorker) {
   
  let arr=JSON.stringify(input)   
  const User = await UserModel.findOneAndDelete({ Email: input.Email });   
  const PremUser= User as IPremiumWorker;
  //Logger.Info(PremUser,true);
 
  //console.log("AdressesPrem" +PremUser.Addresses)
  //console.log("INPUT "+ input.SuscriptionDate);
  let dateN
  dateN=input.SuscriptionDate.toString()
  dateN+="-01"
  
  //console.log("INPUT "+ dateN);

  let newDate = new Date(dateN);
  
  //console.log("FECHA "+ newDate);

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
  WorkerPremUser.SuscriptionDate=newDate
  WorkerPremUser.PremiumType=true
  WorkerPremUser.IdUser=PremUser.IdUser
  WorkerPremUser.ProfilePicture=PremUser.ProfilePicture
  WorkerPremUser.Phones=PremUser.Phones
  WorkerPremUser.Birthday=PremUser.Birthday
  WorkerPremUser.Id=PremUser.Id
  WorkerPremUser.UserType="PremiumWorker"

  //console.log("WorkerUser")
  const res = await addUserPremium(WorkerPremUser)
  // console.log("res user P " + res)
   return WorkerPremUser
}
  


  export async function GetWorkerInformation(input: IWorker) {
    const User = await WorkerModel.findOne({ Email: input.Email } );
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


  export async function WorkersCategory(Category: string) {
    //console.log("look for category "+Category)
    const arrWorker = await WorkerModel.find({Category:Category})
    //Logger.Info(arrWorker,true);    
    return arrWorker;
  
}
export async function WorkersProfession(Profession: string) {
  const arrWorker = await WorkerModel.find({Profession:Profession})
  //Logger.Info(arrWorker,true);    
  return arrWorker;

}
 

  export default WorkerModel