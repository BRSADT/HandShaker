import { Controller, Get, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { addPost } from '../Models/PostsModel';
import { DeletePost } from '../Models/PostsModel';
import { GetPosts } from '../Models/PostsModel';
@Controller('api/Posts')
class PostController{


@Post('Add')
private async addPostController (req:Request,res:Response){
   console.log("..............")
   const Log = await addPost(req.body.PostObject)
   res.status(200).send("Ok")//lo que regresa
}

@Post('Delete')
private async DeletePostController (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await DeletePost(req.body.EmailPremiumWorker,req.body.IdPost)
   res.status(200).send("Ok") //lo que refgresa
}

@Post('GetPosts')
private async GetPostsController (req:Request,res:Response){
    Logger.Info(req.body,true)
   const Log = await GetPosts(req.body.EmailPremiumWorker)
   res.status(200).send(Log)   //lo que refgresa
}

}
export default PostController