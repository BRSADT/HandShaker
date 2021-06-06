import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addUserWorker } from '../Models/WorkerModel';
import { GetWorkerInformation } from '../Models/WorkerModel';
import { GetAllWorkers } from '../Models/WorkerModel';
import { GetOnlyWorkers } from '../Models/WorkerModel';
import { UpdateWorkerInformation } from '../Models/WorkerModel';
import { WorkersProfession } from '../Models/WorkerModel';
import { WorkerToPremium } from '../Models/WorkerModel';
import {WorkersCategory} from '../Models/WorkerModel';
import {IWorker} from '../Interfaces/IWorker';


@Controller('api/Worker')
class WorkerController{


@Post('Register')
private async RegisterAs (req:Request,res:Response){
   const Log = await addUserWorker(req.body.WorkerObject)
   if(Log==="0"){
      res.status(409).send("Existe")
   }else
   {

      res.status(200).send("Ok")

   }
}

@Post('ChangeToPremium')
private async WorkerToPremiumCont(req:Request,res:Response){
   const Log = await WorkerToPremium(req.body.PremiumWorkerObject);
   console.log(" ** "  )
   // Logger.Info(Log,true)
    res.status(200).send(Log)  
}

@Post('GetWorkerInformation')
private async WorkerInformation(req:Request,res:Response){
    const Log = await GetWorkerInformation(req.body.WorkerObject)
    
    //console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}

@Post('GetAllWorkers')
private async AllWorkersInformation(req:Request,res:Response){
   console.log("all workers")
    const Log = await GetAllWorkers()
  //  console.log("All Workers")
    //Logger.Info(Log,true)
   // console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}

@Post('GetOnlyWorkers')
private async OnlyWorkersInformation(req:Request,res:Response){
   console.log("only workers")
    const Log = await GetOnlyWorkers()
   // console.log("Only Workers")
   // Logger.Info(Log,true)
   // console.log("tipo de log "+typeof Log)
    res.status(200).send(Log)  
}

@Post('UpdateWorker')
private async UpdateWorkerController(req:Request,res:Response){
   console.log("Update Workers")
    const Log = await UpdateWorkerInformation(req.body.WorkerObject)
    res.status(200).send(Log)  
}

@Post('GetWorkersCategory')
private async WorkersCategoryController(req:Request,res:Response){
   //console.log("Update Workers")
   //Logger.Info(req.body,true);
    const Log = await WorkersCategory(req.body.Category)
    res.status(200).send(Log)  
}

@Post('GetWorkersProfession')
private async WorkersProfessionController(req:Request,res:Response){
   //console.log("Update Workers")
    const Log = await WorkersProfession(req.body.Profession)
    res.status(200).send(Log)  
}



}
export default WorkerController