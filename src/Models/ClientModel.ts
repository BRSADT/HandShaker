import { model,Schema } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import {IClient} from '../Interfaces/IClient';
import UserModel from './UserModel';
import UserSchema from './UserModel'
import AddressSchema from './AddressModel'


const ClientModel=UserSchema.discriminator('Client',new Schema({

    UserType:{type:String},
    ClientType:{type:Boolean},
    Addresses:{type:[AddressSchema]},
   })
 )


 export async function GetClientInformation(input: IClient) {
  Logger.Info(input.Email,true)
  const User = await ClientModel.findOne({ Email: input.Email } );
  if (!User) {      
    return "2";//Not found
  }else{    
    const ClientUser= User as IClient;
    ClientUser.Password="";
    return ClientUser;
  }
}

export async function UpdateClientInformation(input: IClient ) {
  console.log("Clientess")
  Logger.Info(input,true)
const User = await ClientModel.findOneAndUpdate({ Email: input.Email },input);
    Logger.Info(User,true)
  }

 export async function addUser(input: IClient) {
   console.log("add Client");
   const User = await UserModel.findOne({ Email: input.Email });
  
  if (User==null){
   Logger.Info(input,true);
    input.ClientType=true;
    input.UserType="Client"
    const rec = await ClientModel.create(input);
    return "1";
  }else
  {
    return "0";

  }
  }

 