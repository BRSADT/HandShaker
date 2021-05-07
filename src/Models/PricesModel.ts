import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IPosts} from '../Interfaces/IPosts';
import ItemPriceSchema from '../Models/ItemPriceModel';
import { IPrices } from '../Interfaces/IPrices';

const PricesSchema=new Schema({
  EmailPremiumWorker:{type:String},
 ListOfPrices: {type:[ItemPriceSchema]}
  })


  const PricesModel=model<IPrices>('Prices',PricesSchema);
  export default PricesModel

  export async function addPriceItem(input: IPrices) {     
    Logger.Info(input,true)
    const Prices = await PricesModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (Prices==null) {
     const rec = await PricesModel.create(input);
    }else{
        const POSTFinished = await PricesModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfPrices: {$each: input.ListOfPrices}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteItemPrice(EmailPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    
    Logger.Info(IdPost,true)
    console.log("id   "+IdPost)
    const POST = await PricesModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await PricesModel.findOneAndUpdate({EmailPremiumWorker: EmailPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }


  export async function GetItemsPrice(EmailPremiumWorker: string) { 
    const arrPost = await PricesModel.findOne({EmailPremiumWorker: EmailPremiumWorker})
    Logger.Info(arrPost,true)
    return arrPost;
  }