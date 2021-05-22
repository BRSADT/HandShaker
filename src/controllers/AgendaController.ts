import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addAgenda } from '../Models/WorkersAgendaModel';
import { DeleteAgenda } from '../Models/WorkersAgendaModel';
import { GetAgenda } from '../Models/WorkersAgendaModel';
@Controller('api/Agenda')
class AgendaController{


@Post('Add')
private async addAgendaController (req:Request,res:Response){
   const Log = await addAgenda(req.body.AgendaObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteAgendaController (req:Request,res:Response){
    Logger.Info(req.body,true)
  
   const Log = await DeleteAgenda(req.body.EmailPremiumWorker,req.body.IdAgenda)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetAgenda')
private async GetAgendaController (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await GetAgenda(req.body.EmailPremiumWorker)
   res.status(200).send(Log)   //lo que refgresa
}



}
export default AgendaController