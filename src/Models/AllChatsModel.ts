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
    
    let EmailACT=input.Email;
    let ChatsIndv= input.ListOfChats as IChat[];
    let AddToOtherChat= input;


    
    const   chatModel = await AllChatModel.findOne({ Email: input.Email} );   
    if (chatModel==null) {
      console.log("no encontrado");
     const rec = await AllChatModel.create(input);
    }else{
     
      const chatModelCast= chatModel as IAllChats;
      var NewListChats= new Array(); 
      NewListChats as IChat[];

      //DEL INPUT CON EL EMAIL,  RECORRE TODOS LOS CHATS
      ChatsIndv.forEach(element2 => {                
        console.log("/nuevo chat input "+ element2.EmailChatWith);
        var flag=false;
        // RECORRE TODOS LOS CHATS DEL MODELO    
        chatModelCast.ListOfChats.forEach(element => {
          console.log("  *chat modelo "+element.EmailChatWith);
          var MessageAdd= new Array(); 
          MessageAdd=MessageAdd  as IMessage[];      
      
              
            // SI EL CHAT DEL INPUT COINCIDE CON EL CHAT DEL OUTPUT
            if(element.EmailChatWith.toString().includes(element2.EmailChatWith.toString())){
              console.log("*coincideee*");
              const Chat= element as IChat;
              //encontro un chat ya creado en el modelo
              flag=true;
              //RECORRE Los mensajes viejos
              element.ListOfMessages.forEach(element4 => {
                console.log("meeensajes Viejos");
                Logger.Info(element4,true)    
                MessageAdd.push(element4);    
              });

              console.log("meeensajes Guardado ");
              Logger.Info(element.ListOfMessages,true)                     
              //Nuevos
              element2.ListOfMessages.forEach(element3 => {
                console.log("meeensajes Nuevos");
                Logger.Info(element3,true)    
                MessageAdd.push(element3);    
              });


              console.log("Mensajes lista");
              Logger.Info(MessageAdd,true)
              Chat.EmailChatWith=  element2.EmailChatWith;
              Chat.ListOfMessages=MessageAdd;  
              console.log("Nuevo Chat ");
              Logger.Info(Chat,true)
              NewListChats.push(Chat);
            }else
            {
            
              const Chat= element as IChat; 
              console.log("chat ya de "+Chat.EmailChatWith);
              Chat.EmailChatWith=  element.EmailChatWith;
              console.log('anteriores conversaciones'+element.EmailChatWith );
              element.ListOfMessages.forEach(element4 => {
                console.log("meeensajes Viejos");
                Logger.Info(element4,true)    
                MessageAdd.push(element4);    
              });
              Chat.ListOfMessages=MessageAdd;  
              console.log("Nuevo Chat ");
              Logger.Info(Chat,true)
              NewListChats.push(Chat);
            }



        });
        //no encontro un chat antiguo
        if (flag==false){
          var MessageAdd= new Array(); 
          MessageAdd=MessageAdd  as IMessage[];    
          console.log(element2.EmailChatWith+" no existia conversacion");
          const Chat= element2 as IChat;
          //RECORRE Los mensajes viejos
          element2.ListOfMessages.forEach(element4 => {
            console.log("meeensajes Nuevos");
            Logger.Info(element4,true)    
            MessageAdd.push(element4);    
          });
          Chat.ListOfMessages=MessageAdd;  
          console.log("Nuevo Chat ");
          Logger.Info(Chat,true);
          NewListChats.push(Chat);  
        }
                     
           // element.ListOfMessages.push(MessageAdd);
            //add(input.Email,MessageAdd);
      });
      console.log("this are de added");
      Logger.Info(NewListChats,true)
        
 const MessageFinished = await AllChatModel.findOneAndUpdate({Email: input.Email}, {$set: {ListOfChats: NewListChats}})
  
          //https://www.geeksforgeeks.org/mongodb-push-operator/ 
    }
    

    //
    console.log("********************************************************");
    // Recorre la lista de chats enviados
   ChatsIndv.forEach(element => {
   console.log("new chat "+element.EmailChatWith);
   AddToOtherChat.Email=element.EmailChatWith;
   console.log("send "+EmailACT);
   add2Message( AddToOtherChat,EmailACT);        });
   
   
  }

  export async function add(Email: String, arr :IMessage[] ) {

    const MessageFinished = await AllChatModel.findOneAndUpdate({Email: Email}, {$push: {ListOfMessages: {$each: arr}}})
  
  }

  export async function add2Message(input: IAllChats,ChatWith: String) {
   
    let ChatsIndv= input.ListOfChats as IChat[];
    let AddToOtherChat= input;
    console.log("new chat  "+input.Email);
    console.log("recibe  "+ChatWith);
    
    input.ListOfChats[0].EmailChatWith=ChatWith;
   
    Logger.Info(input,true)



    const   chatModel = await AllChatModel.findOne({ Email: input.Email} );   
    if (chatModel==null) {
      console.log("no encontrado");
     const rec = await AllChatModel.create(input);
    }else{
     
      const chatModelCast= chatModel as IAllChats;
      var NewListChats= new Array(); 
      NewListChats as IChat[];

      //DEL INPUT CON EL EMAIL,  RECORRE TODOS LOS CHATS
      ChatsIndv.forEach(element2 => {                
        console.log("/nuevo chat input "+ element2.EmailChatWith);
        var flag=false;
        // RECORRE TODOS LOS CHATS DEL MODELO    
        chatModelCast.ListOfChats.forEach(element => {
          console.log("  *chat modelo "+element.EmailChatWith);
          var MessageAdd= new Array(); 
          MessageAdd=MessageAdd  as IMessage[];      
      
              
            // SI EL CHAT DEL INPUT COINCIDE CON EL CHAT DEL OUTPUT
            if(element.EmailChatWith.toString().includes(element2.EmailChatWith.toString())){
              console.log("*coincideee*");
              const Chat= element as IChat;
              //encontro un chat ya creado en el modelo
              flag=true;
              //RECORRE Los mensajes viejos
              element.ListOfMessages.forEach(element4 => {
                console.log("meeensajes Viejos");
                Logger.Info(element4,true)    
                MessageAdd.push(element4);    
              });

              console.log("meeensajes Guardado ");
              Logger.Info(element.ListOfMessages,true)                     
              //Nuevos
              element2.ListOfMessages.forEach(element3 => {
                console.log("meeensajes Nuevos");
                Logger.Info(element3,true)    
                MessageAdd.push(element3);    
              });


              console.log("Mensajes lista");
              Logger.Info(MessageAdd,true)
              Chat.EmailChatWith=  element2.EmailChatWith;
              Chat.ListOfMessages=MessageAdd;  
              console.log("Nuevo Chat ");
              Logger.Info(Chat,true)
              NewListChats.push(Chat);
            }else
            {
            
              const Chat= element as IChat; 
              console.log("chat ya de "+Chat.EmailChatWith);
              Chat.EmailChatWith=  element.EmailChatWith;
              console.log('anteriores conversaciones'+element.EmailChatWith );
              element.ListOfMessages.forEach(element4 => {
                console.log("meeensajes Viejos");
                Logger.Info(element4,true)    
                MessageAdd.push(element4);    
              });
              Chat.ListOfMessages=MessageAdd;  
              console.log("Nuevo Chat ");
              Logger.Info(Chat,true)
              NewListChats.push(Chat);
            }



        });
        //no encontro un chat antiguo
        if (flag==false){
          var MessageAdd= new Array(); 
          MessageAdd=MessageAdd  as IMessage[];    
          console.log(element2.EmailChatWith+" no existia conversacion");
          const Chat= element2 as IChat;
          //RECORRE Los mensajes viejos
          element2.ListOfMessages.forEach(element4 => {
            console.log("meeensajes Nuevos");
            Logger.Info(element4,true)    
            MessageAdd.push(element4);    
          });
          Chat.ListOfMessages=MessageAdd;  
          console.log("Nuevo Chat ");
          Logger.Info(Chat,true);
          NewListChats.push(Chat);  
        }
                     
           // element.ListOfMessages.push(MessageAdd);
            //add(input.Email,MessageAdd);
      });
      console.log("this are de added");
      Logger.Info(NewListChats,true)
        
 const MessageFinished = await AllChatModel.findOneAndUpdate({Email: input.Email}, {$set: {ListOfChats: NewListChats}})
  
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


  export async function GetNumberMessages(Email: string,EmailWith: string) {     
    
    const   All = await AllChatModel.findOne({ Email: Email } );   

    if(All!=null){
        console.log("all");
        Logger.Info(All,true)
    let ChatsIndv= All.ListOfChats as IChat[];
    let correspondingChat= new Array();
    let numberMessages=0;
    ChatsIndv.forEach(element => {
        console.log("chat with "+element.EmailChatWith);
        if  (element.EmailChatWith.toString().includes(EmailWith)){
           
            correspondingChat.push(element)    }
            numberMessages=element.ListOfMessages.length;

            });

    Logger.Info(numberMessages,true)

    return numberMessages.toString();   
    
    }else   {

      return  "ERROR";   

    }
        
  }