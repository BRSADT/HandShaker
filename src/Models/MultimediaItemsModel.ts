import { model, Schema } from 'mongoose';
import {IMultimediaItems} from '../Interfaces/IMultimediaItems';
import ImageSchema from './ImageModel';

const MultimediaItemsSchema=new Schema({
 
    MultimediaImage:{type:ImageSchema},
    MultimediaText:{type:String},

    })


   
const MultimediaItemsModel=model<IMultimediaItems>('MultimediaItems', MultimediaItemsSchema);
export {MultimediaItemsModel}
export default  MultimediaItemsSchema
