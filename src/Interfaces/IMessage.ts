import { Document} from 'mongoose';

export interface IMessage extends Document{ 
    EmailUserFrom:String
    EmailUserTo:String
    MessageText:String
    MessageDate:Date 

}
  