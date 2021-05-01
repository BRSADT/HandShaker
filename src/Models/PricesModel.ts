import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IPosts} from '../Interfaces/IPosts';
import ItemPriceSchema from '../Models/ItemPriceModel';
import { IPrices } from '../Interfaces/IPrices';

const PricesSchema=new Schema({
 IdPremiumWorker:{type:String},
 ListOfPrices: {type:[ItemPriceSchema]}
  })


  const PricesModel=model<IPrices>('Prices',PricesSchema);
  export default PricesModel

  export async function addPriceItem(input: IPrices) {     
    Logger.Info(input,true)
    const Prices = await PricesModel.findOne({ IdPremiumWorker: input.IdPremiumWorker } );   
    if (Prices==null) {
     const rec = await PricesModel.create(input);
    }else{
        const POSTFinished = await PricesModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker}, {$push: {ListOfPrices: {$each: input.ListOfPrices}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

  export async function DeleteItemPrice(IdPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    
    Logger.Info(IdPost,true)
    console.log("id   "+IdPost)
    const POST = await PricesModel.findOne({ IdPremiumWorker: IdPremiumWorker } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await PricesModel.findOneAndUpdate({IdPremiumWorker:IdPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }


  export async function GetItemsPrice(IdPremiumWorker: string) { 
    const arrPost = await PricesModel.findOne({"IdPremiumWorker":IdPremiumWorker})
    Logger.Info(arrPost,true)
    return arrPost;
  }