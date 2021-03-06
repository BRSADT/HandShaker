import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { Login } from '../Models/UserModel';
import { addUser } from '../Models/UserModel';

@Controller('api/user')
class userController{
@Post('Login')
private async LoginAs (req:Request,res:Response){
   try{
    const Log = await Login(req.body.Correo,req.body.Contrasena)
    if (Log==null){
        res.status(404).send("Usuario no encontrado")
    }else{
        res.status(200).json(Log)   
    }}
    catch  (e : any){
        Logger.Err(e)
    }
}

@Post('Register')
private async RegisterAs (req:Request,res:Response){
   const Log = await addUser(req.body)
   res.status(200).send("Ok")
}
}
export default userController