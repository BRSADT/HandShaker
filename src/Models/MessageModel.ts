
import { model, Schema } from 'mongoose';
import { IMessage } from '../Interfaces/IMessage';
import {IPost} from '../Interfaces/IPost';
import ImageSchema from './ImageModel';

const MessageSchema=new Schema({

    IdUserFrom:{type:String},
    MessageText:{type:String},
    MessageDate:{type:Date}
    
    })


   
const MessageModel=model<IMessage>('Message', MessageSchema);
export {MessageModel}
export default  MessageSchema
