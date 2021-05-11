
import { model, Schema } from 'mongoose';
import {INotifications} from '../Interfaces/INotifications';

const NotificationsSchema=new Schema({
  
    EmailFrom:{type:String},
    Description:{type:String},
    Date:{type:Date},
    Subject:{type:String},
    
    })


   
const NotificationsModel=model<INotifications>('Notifications', NotificationsSchema);
export {NotificationsModel}
export default  NotificationsSchema
