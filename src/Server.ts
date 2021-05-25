import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import mongoose from 'mongoose';
import * as express from 'express';
import * as path from 'path';
import cors from "cors";
import http from 'http';
import userController from './controllers/userController';
import WorkerController from './controllers/WorkerController';
import ClientController from './controllers/ClientController';
import PostsController from './controllers/PostsController';
import PricesController from './controllers/PriceController';
import MultimediaController from './controllers/MultimediaController';
import AboutController from './controllers/AboutController';
import ChatController from './controllers/ChatController';
import HiringController from './controllers/HiringController';
import AgendaController from './controllers/AgendaController';
import NotificationsController from './controllers/NotificationsController';
import PremiumWorkerController from './controllers/PremiumWorkerController';
import ProfessionController from './controllers/ProfessionController';
import CategoryController from './controllers/CategoryController';
import * as socketio from "socket.io";

//let io = require("socket.io")(http);

var STATIC_CHANNELS = [{
  name: 'Global chat',
  participants: 0,
  id: 1,
  sockets: []
}, {
  name: 'Funny',
  participants: 0,
  id: 2,
  sockets: []
}];

import * as bodyParser from 'body-parser';
class MainServer extends Server{
    private port: number | string;
    private static readonly PORT: number = 3001;
    private static readonly SERVER_START_MSG: string = 'Server started on port: ';
    private static readonly DEV_MSG: string = 'Express Server is running in development mode. ' +
    'No front-end content is being served.';
    private static readonly PATH: string = path.join(__dirname, 'public', 'front');    
  //  private  io = require("socket.io")(http);
  
    constructor(){
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(express.static(MainServer.PATH));
        this.app.use(cors());
        //this.app.use((req, res, next) => { next(); }, cors({maxAge: 84600}));
        this.port = process.env.PORT || MainServer.PORT;
         this.setupControllers();       
        if (process.env.NODE_ENV !== 'production') { // Reading environment variable
        this.app.get('/', (req, res) => res.send(MainServer.DEV_MSG));
        }
        else {
        this.app.get('/', (req, res) => res.sendFile(path.join(MainServer.PATH, 'index.html')));
        }

    }
    private  setupControllers():void{
        const controllers=[new userController(),new WorkerController(),new ClientController()
          ,new PremiumWorkerController(),new PostsController(),new PricesController()
          ,new MultimediaController(),new AboutController(),new ChatController()
          ,new HiringController(),new AgendaController(),new NotificationsController()
          ,new ProfessionController(),new CategoryController()
        ];
        super.addControllers(controllers);
        

    }
    private configureDB(callback: any): void {
        const connection =
          `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}`
        mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
          .then(() => {
            Logger.Info("Connected succesfully to Mongo")

            callback();
          }).catch(err => {
            Logger.Err(err)
          });
      
      
      
      
        }
      public start(): void {
        this.configureDB(() => {

        
        console.log("llego aqui")
  
          const server = new http.Server(this.app);
          server.listen(this.port, () => {
            Logger.Imp(MainServer.SERVER_START_MSG + this.port);
          });

          console.log("llego aqui***************************")
   
          var io = require('socket.io')(server);
          io.on("connection", function(socket: any) {
            console.log("a user connected********************************************");
          
          });
         

          const collection =   mongoose.connection.collection("allchats")
          const changeStream = collection.watch({ fullDocument: 'updateLookup' });
          changeStream.on('change', next => {
         
            let variable=JSON.stringify(next)
            var obj = JSON.parse(variable)
            console.log( "Email del notificado" + obj.fullDocument.Email);  

         /*     io.on("connection", function(socket: any) {
                console.log("cliente se ha conectado");
                socket.emit('connection', null);
        
              });*/


          io.sockets.emit("ChatChange", "Chats"+obj.fullDocument.Email);

        });


        })
       
      }
      
}
export default MainServer; 