import { model, ObjectId, Schema } from 'mongoose';
import 'mongoose-schema-extend'
import { Logger } from '@overnightjs/logger';
import {IAllChats} from '../Interfaces/IAllChats';
import {IChat} from '../Interfaces/IChat';
import ChatSchema from '../Models/ChatModel';
import { IMessage } from '../Interfaces/IMessage';

const AllChatsSchema=new Schema({
 Email:{type:String},
 ListOfChats: {type:[ChatSchema]}
  })


  const AllChatModel=model<IAllChats>('AllChats',AllChatsSchema);
  export default AllChatsSchema

  

export async function addMessage(input: IAllChats) {
    
    let ChatsIndv= input.ListOfChats as IChat[];
    let AddToOtherChat= input;


    
    const   Message = await AllChatModel.findOne({ Email: input.Email} );   
    if (Message==null) {
      console.log("no encontrado");
     const rec = await AllChatModel.create(input);
    }else{
      console.log("update");
        const MessageFinished = await AllChatModel.findOneAndUpdate({Email: input.Email}, {$push: {ListOfChats: {$each: input.ListOfChats}}})
       //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }
    
    
    ChatsIndv.forEach(element => {
        console.log("chat with "+element.EmailChatWith);
     AddToOtherChat.Email=element.EmailChatWith;
     add2Message( AddToOtherChat);        
    });

  }


  export async function add2Message(AddToOtherChat: IAllChats) {

    Logger.Info(AddToOtherChat,true)
    const   Message2 = await AllChatModel.findOne({ Email: AddToOtherChat.Email} );   
   if (Message2==null) {
     console.log("no encontrado");
    const rec = await AllChatModel.create(AddToOtherChat);
   }else{
     console.log("update");
       const MessageFinished = await AllChatModel.findOneAndUpdate({Email: AddToOtherChat.Email}, {$push: {ListOfChats: {$each: AddToOtherChat.ListOfChats}}})
      //https://www.geeksforgeeks.org/mongodb-push-operator/ 
   }

  }




  export async function GetAllMessages(Email: string) {     
    const   AllChats = await AllChatModel.findOne({ Email: Email} );   
    Logger.Info(AllChats,true)
    return AllChats;   
        
  }

  export async function GetMessages(Email: string,EmailWith: string) {     
    
    const   All = await AllChatModel.findOne({ Email: Email } );   

    if(All!=null){
        console.log("all");
        Logger.Info(All,true)
    let ChatsIndv= All.ListOfChats as IChat[];
    let correspondingChat= new Array();

    ChatsIndv.forEach(element => {
        console.log("chat with "+element.EmailChatWith);
        if  (element.EmailChatWith.toString().includes(EmailWith)){
           
            correspondingChat.push(element)    }
            });

    Logger.Info(correspondingChat,true)

    return correspondingChat;   
    
    }
        
  }