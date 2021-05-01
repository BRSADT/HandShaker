import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addUserPremium } from '../Models/PremiumWorkerModel';
import { GetPremiumWorkerInformation } from '../Models/PremiumWorkerModel';
import { GetPremiumWorkers } from '../Models/PremiumWorkerModel';


@Controller('api/PremiumWorker')
class PremiumWorkerController{


@Post('Register')
private async RegisterAs (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await addUserPremium(req.body)
   res.status(200).send("Ok")
}

@Post('GetPremiumWorkerInformation')
private async WorkerInformation(req:Request,res:Response){
    const Log = await GetPremiumWorkerInformation(req.body.PremiumWorkerObject)
    
    console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}

@Post('GetAllPremiumWorkers')
private async PremiumWorkers(req:Request,res:Response){
    const Log = await GetPremiumWorkers()
    
    console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}




}
export default PremiumWorkerController