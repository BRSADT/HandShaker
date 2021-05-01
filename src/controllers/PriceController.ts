import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addPriceItem } from '../Models/PricesModel';
import { DeleteItemPrice } from '../Models/PricesModel';
import { GetItemsPrice } from '../Models/PricesModel';

@Controller('api/Prices')
class PricesController{


@Post('Add')
private async addPriceController (req:Request,res:Response){
   console.log("addPrices");
    Logger.Info(req.body,true) 
   const Log = await addPriceItem(req.body.PriceObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeletePricesController (req:Request,res:Response){
    Logger.Info(req.body.PriceObject,true)
   const Log = await DeleteItemPrice(req.body.IdPremiumWorker,req.body.IdPost)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('Get')
private async GetPricesController (req:Request,res:Response){
   Logger.Info(req.body,true)
   const Log = await GetItemsPrice(req.body.IdPremiumWorker)
   res.status(200).send("Ok") //lo que refgresa
}




}
export default PricesController