import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IWorkersHiring} from '../Interfaces/IWorkersHiring';
import HiringSchema from './HiringModel';

const WorkersHiringSchema=new Schema({
  Email:{type:String},
  ListOfHirings: {type:[HiringSchema]}
  })


  const WorkersHiringModel=model<IWorkersHiring>('WorkersHiring',WorkersHiringSchema);
  export default WorkersHiringModel

  export async function addHiring(input: IWorkersHiring) {     
    const Hiring = await WorkersHiringModel.findOne({ Email: input.Email } );   
    if (Hiring==null) {
     const rec = await WorkersHiringModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const HiringFinished = await WorkersHiringModel.findOneAndUpdate({Email: input.Email}, {$push: {ListOfHirings: {$each: input.ListOfHirings}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteHiring(Email: string, IdHiring: string) { 
    console.log("1")    
    console.log("ID  "+IdHiring)
    console.log("EMAIL  "+Email)
    
    const POST = await WorkersHiringModel.findOne({ Email: Email } );   
 
    if (POST==null) {
     
    }else{       
      console.log("encontrado  "+IdHiring)
      const POSTFinished = await WorkersHiringModel.findOneAndUpdate({Email:Email}, {$pull: {ListOfHirings: {_id:IdHiring}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetJobs(Email: string) { 
    const arrHirings = await WorkersHiringModel.findOne({Email:Email})
    let HiringArr= new Array()
   if  (arrHirings!=null){
  
   HiringArr= arrHirings.ListOfHirings 
   Logger.Info(HiringArr,true)
   
   return HiringArr;
   }
   //.find({ _id : IdPremiumWorker })
     
  else{
return "0"

  }
    
  }

  export async function GetHiring(Email: string) { 
    const arrHiringsAll = await WorkersHiringModel.find({})
     let HiringArr= new Array()
  
     arrHiringsAll.forEach(element => {
        element.ListOfHirings.forEach(element2 => {
           if(element2.Email.includes(Email)){
             HiringArr.push(element2);
           }
        });

     });
  
     if  (HiringArr!=null){  
      Logger.Info(HiringArr,true)
      return HiringArr;
    }

    else{
      return "0"      
        }          
}


export async function GetOneHiring(EmailWorker: string,Email: string,ID: string) { 
  const arrHirings = await WorkersHiringModel.findOne({Email:EmailWorker})
  let HiringArr= new Array()
 let UniqueHiring;
  if  (arrHirings!=null){

 HiringArr= arrHirings.ListOfHirings 

 HiringArr.forEach(element => {
  if(element.Email.includes(Email)&&element.IDcreated.includes(ID)){

    UniqueHiring=element
  }
});

 Logger.Info(UniqueHiring,true)
 
 return UniqueHiring;
 }
 //.find({ _id : IdPremiumWorker })
   
else{
return "0"

}
  
}


export async function UpdateHiring(EmailWorker: string,Email: string,ID: string, StatusH: string) { 
const arrHirings = await WorkersHiringModel.findOneAndUpdate({Email:EmailWorker,"ListOfHirings.Email":Email,"ListOfHirings.IDcreated":ID}, { $set: { "ListOfHirings.$.Status" : StatusH } })
 
if  (arrHirings!=null){

 return "1";
 }
 //.find({ _id : IdPremiumWorker })
   
else{
return "0"

}
  
}