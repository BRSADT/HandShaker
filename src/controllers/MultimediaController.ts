import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addMultimedia } from '../Models/MultimediaModel';
import { DeleteMultimedia } from '../Models/MultimediaModel';

@Controller('api/Multimedia')
class MultimediaController{


@Post('Add')
private async addPMultimediaController (req:Request,res:Response){
  
   const Log = await addMultimedia(req.body.MultimediaObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteMultimediaController (req:Request,res:Response){
    
   const Log = await DeleteMultimedia(req.body.IdPremiumWorker,req.body.IdMultimedia)
   res.status(200).send("Ok") //lo que refgresa
}

}
export default MultimediaController