import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {ICategory} from '../Interfaces/ICategory';
import ProfessionSchema from '../Models/ProfessionModel';

import ImageSchema from './ImageModel';
const CategorySchema=new Schema({
  Name:{type:String},
  Categories:{type:[ProfessionSchema]},
  ImageCategory: ImageSchema
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
  
    if (POST==null) {
     
    }else{       
        const POSTFinished = await CategoryModel.findOneAndUpdate({Category:Category}, {$pull: {Categories: {_id:IdCategory}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetProfessions(NameProfession: string) { 
    console.log("...")
      const arrPost = await CategoryModel.find({ Name: NameProfession })
      
      //.find({ _id : IdPremiumWorker })
        
  
      
      return arrPost;
    
  }

  export async function GetAllProfessions() { 
    console.log("...")
      const arrProf = await CategoryModel.find({ })
      let profs = new Array();
      arrProf.forEach(element => {
        element.Categories.forEach(element2 => {
            profs.push(element2.Name)
        });
      
      });
      //.find({ _id : IdPremiumWorker })
        
  
      
      return profs;
    
  }

  
  export async function GetCategories() { 
    const arrPost = await CategoryModel.find({ })
    
    //.find({ _id : IdPremiumWorker })
      
   
    
    return arrPost;
  
}