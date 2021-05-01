import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IChat} from '../Interfaces/IChat';
import MessageSchema from '../Models/MessageModel';
import { IMessage } from '../Interfaces/IMessage';

const ChatSchema=new Schema({
 IdPremiumWorker:{type:String},
 ListOfMessages: {type:[MessageSchema]}
  })


  const ChatModel=model<IChat>('Chats',MessageSchema);
  export default MessageSchema

  export async function addMessage(input: IChat) {     
    const   Message = await ChatModel.findOne({ IdUser: input.IdUser} );   
    if (Message==null) {
     const rec = await ChatModel.create(input);
    }else{
        const MessageFinished = await ChatModel.findOneAndUpdate({IdUser: input.IdUser}, {$push: {ListOfMessages: {$each: input.ListOfMessages}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }    
  }

