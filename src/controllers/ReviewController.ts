import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addReview } from '../Models/ReviewsModel';
import { DeleteReview } from '../Models/ReviewsModel';

@Controller('api/Review')
class ReviewController{


@Post('Add')
private async addReviewController (req:Request,res:Response){
  
   const Log = await addReview(req.body.ReviewObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteReviewController (req:Request,res:Response){
    
   const Log = await DeleteReview(req.body.IdPremiumWorker,req.body.IdMultimedia)
   res.status(200).send("Ok") //lo que refgresa
}

}
export default ReviewController