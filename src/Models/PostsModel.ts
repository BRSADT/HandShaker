import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IPosts} from '../Interfaces/IPosts';
import PostSchema from '../Models/PostModel';

const PostsSchema=new Schema({
 IdPremiumWorker:{type:String},
 ListOfPosts: {type:[PostSchema]}
  })


  const PostsModel=model<IPosts>('Posts',PostsSchema);
  export default PostsModel

  export async function addPost(input: IPosts) {     
    const POST = await PostsModel.findOne({ IdPremiumWorker: input.IdPremiumWorker } );   
    if (POST==null) {
     const rec = await PostsModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfPosts}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeletePost(IdPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    
    Logger.Info(IdPost,true)
    console.log("id   "+IdPost)
    const POST = await PostsModel.findOne({ IdPremiumWorker: IdPremiumWorker } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker:IdPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetPosts(IdPremiumWorker: string) { 
      const arrPost = await PostsModel.findOne({"IdPremiumWorker":IdPremiumWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    
  }