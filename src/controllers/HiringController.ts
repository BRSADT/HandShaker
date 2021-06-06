import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addHiring } from '../Models/WorkersHiringModel';
import { DeleteHiring } from '../Models/WorkersHiringModel';
import { GetHiring } from '../Models/WorkersHiringModel';
import { GetJobs } from '../Models/WorkersHiringModel';
import { GetOneHiring } from '../Models/WorkersHiringModel';
import { UpdateHiring } from '../Models/WorkersHiringModel';
@Controller('api/Hiring')
class HiringController{


@Post('Add')
private async addHiringController (req:Request,res:Response){
 
   const Log = await addHiring(req.body.HiringObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteHiringController (req:Request,res:Response){
 
   const Log = await DeleteHiring(req.body.Email,req.body.IdHiring)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetHiring')//las contrataciones que el usuario hizo
private async GetHiringController (req:Request,res:Response){

   const Log = await GetHiring(req.body.Email)
   res.status(200).send(Log)   //lo que refgresa
}

@Post('GetJobs')//los trabajos
private async GetJobsController (req:Request,res:Response){
  
   const Log = await GetJobs(req.body.Email)
   res.status(200).send(Log)   //lo que refgresa
}

@Post('ReturnOneHiring')
private async ReturnOneHiringController (req:Request,res:Response){
 
   const Log = await GetOneHiring(req.body.EmailWorker,req.body.Email,req.body.ID)
   res.status(200).send(Log)   //lo que refgresa
}

@Post('UpdateHiring')
private async UpdateHiringController (req:Request,res:Response){
  
   const Log = await UpdateHiring(req.body.EmailWorker,req.body.Email,req.body.ID,req.body.StatusH)
  console.log("res"+ Log)
   res.status(200).send(Log)   //lo que refgresa
}


}
export default HiringController