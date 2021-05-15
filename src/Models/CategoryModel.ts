import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {ICategory} from '../Interfaces/ICategory';
import ProfessionSchema from '../Models/ProfessionModel';


const CategorySchema=new Schema({
  Name:{type:String},
  Categories:{type:[ProfessionSchema]}
  })


  const CategoryModel=model<ICategory>('Category',CategorySchema);
  export default CategoryModel

  export async function addCategory(input: ICategory) {     
    const POST = await CategoryModel.findOne({ Name: input.Name } );   
    if (POST==null) {
     const rec = await CategoryModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await CategoryModel.findOneAndUpdate({Name: input.Name }, {$push: {Categories: {$each: input.Categories}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeleteCategory(Category: string, IdCategory: ObjectId) { 
 
    const POST = await CategoryModel.findOne({ Category: Category } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await CategoryModel.findOneAndUpdate({Category:Category}, {$pull: {Categories: {_id:IdCategory}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetProfessions(NameProfession: string) { 
      const arrPost = await CategoryModel.find({ Name: NameProfession })
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    
  }

  
  export async function GetCategories() { 
    const arrPost = await CategoryModel.find({ })
    
    //.find({ _id : IdPremiumWorker })
      
    Logger.Info(arrPost,true)
    
    return arrPost;
  
}