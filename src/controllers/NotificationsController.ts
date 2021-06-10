import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addNotification } from '../Models/AllNotificationsModel';
import { DeleteNotification } from '../Models/AllNotificationsModel';
import { GetNotifications } from '../Models/AllNotificationsModel';
@Controller('api/Notification')
class NotificationsController{


@Post('Add')
private async addHiringController (req:Request,res:Response){
   console.log("add not")
   const Log = await addNotification(req.body.NotificationObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteHiringController (req:Request,res:Response){
  
   const Log = await DeleteNotification(req.body.Email,req.body.IdNotification)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetNotifications')
private async GetHiringController (req:Request,res:Response){
  console.log("get")
   const Log = await GetNotifications(req.body.Email)
   if (Log==="NO"){

      res.status(202).send(Log) //lo que refgresa
   
   }else{
      res.status(200).send(Log) //lo que refgresa
   
   }
   
}

}
export default NotificationsController