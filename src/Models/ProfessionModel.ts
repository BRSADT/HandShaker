import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IProfession} from '../Interfaces/IProfession';
import ImageSchema from './ImageModel';

const ProfessionSchema=new Schema({
  Name:{type:String},
 Description:{type:String},
 ImageProfession: ImageSchema
  })


  const ProfessionModel=model<IProfession>('Profession',ProfessionSchema);
  export {ProfessionModel}
  export default ProfessionSchema

  export async function addProfession(input: IProfession) {     
    const POST = await ProfessionModel.findOne({ Name: input.Name } );   
    if (POST==null) {
     const rec = await ProfessionModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await ProfessionModel.findOneAndUpdate({Name: input.Name }, {Description: input.Description})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteProfession(input: IProfession) { 
    
    const POST = await ProfessionModel.deleteOne({ Name: input.Name } );   
   
  }



  export async function GetProfessions(NameProfession: string) { 
      const arrPost = await ProfessionModel.find({ Name: NameProfession })
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    
  }