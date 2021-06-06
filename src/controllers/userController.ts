import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { Login } from '../Models/UserModel';
import { addUser } from '../Models/UserModel';
import { GetUserInformation } from '../Models/UserModel';
import { UpdateUser } from '../Models/UserModel';
@Controller('api/user')
class userController{
@Post('Login')
private async LoginAs (req:Request,res:Response){
   try{
    console.log("here") 
 
    const Log = await Login(req.body.userObject)
    
    switch (Log) {
      case "2": //didn't find user
      //  Logger.Info("no encontrado");
       // Logger.Info(res);
        res.status(404).send("2");
        break;
      case "3": // No match Password
       // Logger.Info("no match");
      //  Logger.Info(res);
        res.status(401).send("3");
        break;
      default:
        // everything okay
    
       // Logger.Info(Log);
        res.status(200).json(Log);
    }
    }
    catch  (e : any){
        res.status(404).json("false") 
        Logger.Err(e)
    }
}

@Post('Register')
private async RegisterAs (req:Request,res:Response){
  //  Logger.Info(req.body,true)
   const Log = await addUser(req.body.userObject)
   res.status(200).send("Ok")
}


@Post('GetInfo')
private async informationcontroller (req:Request,res:Response){
  
   const Log = await GetUserInformation(req.body.Email)
   res.status(200).send(Log)
}


@Post('UpdateUser')
private async Updatecontroller (req:Request,res:Response){
  
   const Log = await UpdateUser(req.body.UserObject)
   res.status(200).send(Log)
}

}
export default userController