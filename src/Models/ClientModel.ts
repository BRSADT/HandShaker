import { model,Schema } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import {IClient} from '../Interfaces/IClient';
import UserModel from './UserModel';
import UserSchema from './UserModel'
import AddressSchema from './AddressModel'


const ClientModel=UserSchema.discriminator('Client',new Schema({

    IdClient:{type:String},
    UserType:{type:Boolean},
    Addresses:{type:[AddressSchema]},
   })
 )


 export async function GetClientInformation(input: IClient) {
  const User = await UserModel.findOne({ Email: input.Email } );
  if (!User) {      
    return "2";//Not found
  }else{    
    const ClientUser= User as IClient;
    ClientUser.Password="";
    return ClientUser;
  }
}


 export async function addUser(input: IClient) {
    Logger.Info(input,true);
    const rec = await ClientModel.create(input);
    return rec;
  }

 