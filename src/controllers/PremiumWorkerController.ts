import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addUserPremium } from '../Models/PremiumWorkerModel';
import { GetPremiumWorkerInformation } from '../Models/PremiumWorkerModel';
import { GetPremiumWorkers } from '../Models/PremiumWorkerModel';
import { PremiumToWorker } from '../Models/PremiumWorkerModel';
import { PremiumWorkersCategory } from '../Models/PremiumWorkerModel';
import {PremiumWorkersProfession} from '../Models/PremiumWorkerModel';
import { UpdatePremiumWorkerInformation } from '../Models/PremiumWorkerModel';

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
    console.log("ha pedido obtener info del worker"+req.body.PremiumWorkerObject);
    const Log = await GetPremiumWorkerInformation(req.body.PremiumWorkerObject)
    
    console.log(" ** "  )
    Logger.Info(Log,true)
    res.status(200).send(Log)  
}

@Post('ChangeToWorker')
private async WorkerToPremiumCont(req:Request,res:Response){
   const Log = await PremiumToWorker(req.body.PremiumWorkerObject);
   console.log(" ** "  )
    Logger.Info(Log,true)
}


@Post('GetAllPremiumWorkers')
private async PremiumWorkers(req:Request,res:Response){
    const Log = await GetPremiumWorkers()
    
    console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}

@Post('UpdatePremiumWorker')
private async UpdateWorkerController(req:Request,res:Response){
   console.log("Update Workers")
    const Log = await UpdatePremiumWorkerInformation(req.body.PremiumWorkerObject)
    res.status(200).send(Log)  
}

@Post('GetPremiumWorkersCategory')
private async WorkersCategoryController(req:Request,res:Response){
   console.log("Update Workers")
    const Log = await PremiumWorkersCategory(req.body.Category)
    res.status(200).send(Log)  
}

@Post('GetPremiumWorkersProfession')
private async WorkersProfessionController(req:Request,res:Response){
   console.log("Update Workers")
    const Log = await PremiumWorkersProfession(req.body.Profession)
    res.status(200).send(Log)  
}

}
export default PremiumWorkerController