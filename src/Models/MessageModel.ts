
import { model, Schema } from 'mongoose';
import { IMessage } from '../Interfaces/IMessage';


const MessageSchema=new Schema({

    EmailUserFrom:{type:String},
    EmailUserTo:{type:String},
    MessageText:{type:String},
    MessageDate:{type:Date}
    
    })


   
const MessageModel=model<IMessage>('Message', MessageSchema);
export {MessageModel}
export default  MessageSchema
