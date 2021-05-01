import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addUser } from '../Models/ClientModel';
import { GetClientInformation } from '../Models/ClientModel';

@Controller('api/Client')
class ClientController{


@Post('Register')
private async RegisterAs (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await addUser(req.body)
   res.status(200).send("Ok")
}
@Post('GetClientInformation')
private async ClientInformation(req:Request,res:Response){
    const Log = await GetClientInformation(req.body.ClientObject)
    res.status(200).send(Log)  
}

}
export default ClientController