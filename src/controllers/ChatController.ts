import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addMessage } from '../Models/ChatModel';

@Controller('api/Chat')
class ChatController{


@Post('Add')
private async addChatController (req:Request,res:Response){
  
   const Log = await addMessage(req.body.ReviewObject)
   res.status(200).send("Ok")//lo que regresa
}

}
export default ChatController