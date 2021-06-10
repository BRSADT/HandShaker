import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addReview } from '../Models/ReviewsModel';
import { DeleteReview } from '../Models/ReviewsModel';
import { GetReviews } from '../Models/ReviewsModel';


@Controller('api/Review')
class ReviewController{


@Post('Add')
private async addReviewController (req:Request,res:Response){
  
   const Log = await addReview(req.body.EmailPremiumWorker,req.body.RatingStar,req.body.TextReview,req.body.DateReview,req.body.EmailClient)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeleteReviewController (req:Request,res:Response){
    
   const Log = await DeleteReview(req.body.EmailPremiumWorker,req.body.IdReview)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('Get')
private async GetReviewController (req:Request,res:Response){
    
   const Log = await GetReviews(req.body.Email)
if (Log==="No"){

   res.status(202).send(Log) //lo que refgresa

}else{
   res.status(200).send(Log) //lo que refgresa

}

 
}

}
export default ReviewController