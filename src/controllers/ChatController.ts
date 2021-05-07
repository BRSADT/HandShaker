import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addMessage } from '../Models/AllChatsModel';
import { GetAllMessages } from '../Models/AllChatsModel';

@Controller('api/Chat')
class ChatController{


@Post('Add')
private async addChatController (req:Request,res:Response){
  
   const Log = await addMessage(req.body.ChatObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Get')
private async GetChatController (req:Request,res:Response){
  
   const Log = await GetAllMessages(req.body.Email)
   res.status(200).send("Ok")//lo que regresa
}


}
export default ChatController