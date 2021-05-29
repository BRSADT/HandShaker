
import { model, Schema } from 'mongoose';
import {UserSchema} from './UserModel'
import {INotifications} from '../Interfaces/INotifications';

const NotificationsSchema=new Schema({
  
    EmailFrom:{type:String},
    Description:{type:String},
    Date:{type:Date},
    Subject:{type:String},
    userFrom:{type:[UserSchema]},
    })


   
const NotificationsModel=model<INotifications>('Notifications', NotificationsSchema);
export {NotificationsModel}
export default  NotificationsSchema
