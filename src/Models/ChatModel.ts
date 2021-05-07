import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IChat} from '../Interfaces/IChat';
import MessageSchema from '../Models/MessageModel';
import { IMessage } from '../Interfaces/IMessage';

const ChatSchema=new Schema({
 EmailChatWith:{type:String},
 ListOfMessages: {type:[MessageSchema]}
  })


  const ChatModel=model<IChat>('Chats',ChatSchema);
  export default ChatSchema

  