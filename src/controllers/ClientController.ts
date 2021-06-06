import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addUser } from '../Models/ClientModel';
import { GetClientInformation } from '../Models/ClientModel';
import { UpdateClientInformation } from '../Models/ClientModel';


@Controller('api/Client')
class ClientController{


@Post('Register')
private async RegisterAs (req:Request,res:Response){
  
   const Log = await addUser(req.body.ClientObject)
   if(Log==="0"){
    res.status(409).send("Existe")
    }else
    {
        res.status(200).send("Ok")
    }
}
@Post('GetClientInformation')
private async ClientInformation(req:Request,res:Response){
    const Log = await GetClientInformation(req.body.ClientObject)
    res.status(200).send(Log)  
}


@Post('UpdateClient')
private async UpdateWorkerController(req:Request,res:Response){
   console.log("Update Clients")
    const Log = await UpdateClientInformation(req.body)
    res.status(200).send(Log)  
}


}
export default ClientController