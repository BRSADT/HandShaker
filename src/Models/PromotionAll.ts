import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IPromotionall} from '../Interfaces/IPromotionall';
import PromotionSchema from '../Models/PromotionModel';
import {UserSchema} from './UserModel'
import { GetUserInformation } from '../Models/UserModel';


const PromotionAllSchema=new Schema({
  EmailPremiumWorker:{type:String},
  userWorker:{type:[UserSchema]},    
 ListOfPromotions: {type:[PromotionSchema]}
  })


  const PromotionAllModel=model<IPromotionall>('PromotionAll',PromotionAllSchema);
  export default PromotionAllModel


  export async function addPromotion(input: IPromotionall) {     
    const Promotion = await PromotionAllModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (Promotion==null) {
     const rec = await PromotionAllModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const Promotion = await PromotionAllModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfPromotions: {$each: input.ListOfPromotions}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeletePromotion(EmailPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    

    console.log("id   "+IdPost)
    const POST = await PromotionAllModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
  
    if (POST==null) {
     
    }else{       
        const POSTFinished = await PromotionAllModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetPromotions() { 
      const arrPromotion = await PromotionAllModel.find({})
     let newArra = new Array()
      await Promise.all(arrPromotion.map(async (elem) => {
        try {
            console.log("promooos",elem.EmailPremiumWorker)
             if(typeof(elem.EmailPremiumWorker)!="undefined"){
             const resp=await GetUserInformation(elem.EmailPremiumWorker);
            if(resp!="2"){
                console.log("name  ",resp.Name)
             elem.userWorker = resp
             newArra.push(elem)
            }
        }
        } catch (error) {
        console.log('error'+ error);
      }
      }));
      //.find({ _id : IdPremiumWorker })
        
   console.log("r");
      
      return newArra;
    
  }