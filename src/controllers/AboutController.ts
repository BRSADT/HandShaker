import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addAbout } from '../Models/AboutModel';
import { DeleteAbout } from '../Models/AboutModel';
import { GetAbout } from '../Models/AboutModel';

@Controller('api/About')
class AboutController{


@Post('Add')
private async addAboutController (req:Request,res:Response){
   console.log("Add about controller  "+req.body.AboutObject);
   const Log = await addAbout(req.body.AboutObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteAboutController (req:Request,res:Response){
   console.log("Add about controller"+req.body.EmailWorker);
   const Log = await DeleteAbout(req.body.EmailWorker)
   if(Log==1){
      res.status(200).send("Ok") //

   }
   else {
      res.status(404).send("Not Found") //

   }  
}


@Post('Get')
private async GetAboutController (req:Request,res:Response){
   console.log("Add about controller"+req.body.EmailWorker);
   const Log = await GetAbout(req.body.EmailWorker)
   res.status(200).send(Log) //lo que refgresa
}

}
export default AboutController