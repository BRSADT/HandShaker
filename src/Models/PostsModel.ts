import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IPosts} from '../Interfaces/IPosts';
import PostSchema from '../Models/PostModel';

const PostsSchema=new Schema({
  EmailPremiumWorker:{type:String},
 ListOfPosts: {type:[PostSchema]}
  })


  const PostsModel=model<IPosts>('Posts',PostsSchema);
  export default PostsModel

  export async function addPost(input: IPosts) {     
    const POST = await PostsModel.findOne({ EmailPremiumWorker: input.EmailPremiumWorker } );   
    if (POST==null) {
     const rec = await PostsModel.create(input);
     //console.log("Model ID... "+rec._id.toString())
    // const POSTFinished = await PostsModel.findOneAndUpdate({IdPremiumWorker: input.IdPremiumWorker},{$push: { IdString: string.rec._id}})

    }else{
        const POSTFinished = await PostsModel.findOneAndUpdate({EmailPremiumWorker: input.EmailPremiumWorker}, {$push: {ListOfPosts: {$each: input.ListOfPosts}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 



    }    
  }

  export async function DeletePost(EmailPremiumWorker: string, IdPost: ObjectId) { 
    console.log("1")    
    Logger.Info(IdPost,true)
    console.log("id   "+IdPost)
    const POST = await PostsModel.findOne({ EmailPremiumWorker: EmailPremiumWorker } );   
    Logger.Info(POST,true)
    if (POST==null) {
     
    }else{       
        const POSTFinished = await PostsModel.findOneAndUpdate({EmailPremiumWorker:EmailPremiumWorker}, {$pull: {ListOfPosts: {_id:IdPost}}})
        //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }



  export async function GetPosts(EmailPremiumWorker: string) { 
      const arrPost = await PostsModel.findOne({"EmailPremiumWorker":EmailPremiumWorker})
      
      //.find({ _id : IdPremiumWorker })
        
      Logger.Info(arrPost,true)
      
      return arrPost;
    
  }