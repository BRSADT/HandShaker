import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addPromotion } from '../Models/PromotionAll';
import { DeletePromotion } from '../Models/PromotionAll';
import { GetPromotions } from '../Models/PromotionAll';
@Controller('api/Promotions')
class PostController{


@Post('Add')
private async addPostController (req:Request,res:Response){
   console.log("Add promotion..............")
   const Log = await addPromotion(req.body.PromotionObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeletePromotion (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await DeletePromotion(req.body.EmailPremiumWorker,req.body.IdPost)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetPromotions')
private async GetPostsController (req:Request,res:Response){
   console.log("getPromos")
   const Log = await GetPromotions()
   res.status(200).send(Log)   //lo que refgresa
}

}
export default PostController