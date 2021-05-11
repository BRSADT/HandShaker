import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addHiring } from '../Models/WorkersHiringModel';
import { DeleteHiring } from '../Models/WorkersHiringModel';
import { GetHiring } from '../Models/WorkersHiringModel';
@Controller('api/Hiring')
class HiringController{


@Post('Add')
private async addHiringController (req:Request,res:Response){
   const Log = await addHiring(req.body.HiringObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteHiringController (req:Request,res:Response){
    Logger.Info(req.body,true)
    Logger.Info(req.body.IdHiring,true)
   const Log = await DeleteHiring(req.body.EmailPremiumWorker,req.body.IdHiring)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetHiring')
private async GetHiringController (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await GetHiring(req.body.EmailPremiumWorker)
   res.status(200).send(Log)   //lo que refgresa
}

}
export default HiringController