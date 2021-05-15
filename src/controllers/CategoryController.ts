import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addCategory } from '../Models/CategoryModel';
import { DeleteCategory } from '../Models/CategoryModel';
import { GetCategories } from '../Models/CategoryModel';
import { GetProfessions } from '../Models/CategoryModel';

@Controller('api/Category')
class CategoryController{


@Post('Add')
private async addAboutController (req:Request,res:Response){
  console.log("add category")
   const Log = await addCategory(req.body.Category)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteAboutController (req:Request,res:Response){
    
   const Log = await DeleteCategory(req.body.Category,req.body.IdCategory)
   res.status(200).send("Ok") //lo que refgresa
}


@Post('Get')
private async GetAboutController (req:Request,res:Response){
    
   const Log = await GetCategories()
   res.status(200).send(Log) //lo que refgresa
}


@Post('GetProfession')
private async GetProfessionController (req:Request,res:Response){
    
   const Log = await GetProfessions(req.body.Category.NameProfession)
   res.status(200).send(Log) //lo que refgresa
}

}
export default CategoryController