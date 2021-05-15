import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addProfession } from '../Models/ProfessionModel';
import { DeleteProfession } from '../Models/ProfessionModel';
import { GetProfessions } from '../Models/ProfessionModel';

@Controller('api/Profession')
class ProfessionController{


@Post('Add')
private async addProfessionController (req:Request,res:Response){
  
   const Log = await addProfession(req.body.Category4)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteProfessionController (req:Request,res:Response){
    
   const Log = await DeleteProfession(req.body.Category)
   res.status(200).send("Ok") //lo que refgresa
}


@Post('Get')
private async GetProfessionAboutController (req:Request,res:Response){
    
   const Log = await GetProfessions(req.body.Category)
   res.status(200).send("Ok") //lo que refgresa
}

}
export default ProfessionController