import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
const BCRYPT_SALT_WORK_FACTOR = 10;
import {Iuser} from '../Interfaces/Iuser';
import 'mongoose-schema-extend'
import TelephoneSchema from './PhoneModel';
import ImageSchema from './ImageModel';

const UserSchema=new Schema({
 
//   Email:{type:String,index:{unique:true}},
 
Email:{type:String},
Password:{type:String},
   Name:{type:String},
   LastName:{type:String},
   IdUser:{type:String},
   ProfilePicture:{type:ImageSchema},
   HeaderPicture:{type:ImageSchema},
   Phones: {type:[TelephoneSchema]},
   Birthday:Date,
   UserType:{type:String}
  })

  

//HashPassword
UserSchema.pre('save', function preSaveAddPasswordHash(next) {
    console.log("here ")
    const user = this as Iuser;// takes Iuser Interface
    // only hash the password if it has been modified (or is new)
   /* if (!user.isModified('password')) {
      return next();
    } NOT NEEDED FOR NOW*/ 
    bcrypt.genSalt(BCRYPT_SALT_WORK_FACTOR, (errorSalt, salt) => {
      if (errorSalt) {
        return next(errorSalt);
      }
      // hash the password along with our new salt
      bcrypt.hash(user.Password, salt, (errorHash, hash) => {
        if (errorHash) {
          return next(errorHash);
        }
        // override the cleartext password with the hashed one
        console.log("hash generado"+hash)
        user.Password = hash;
        next();
      });
    });
  });

  //Methods that belong to UserModel
  UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
    const user = this as Iuser;
   // console.log("entrada "+candidatePassword)
   // console.log("contra usuario  "+user.Password)
    const isMatch = await bcrypt.compare(candidatePassword, user.Password);
   // console.log("RES"+isMatch)
    return isMatch;
  };

/*UserSchema.methods.AddPhone = async function AddPhone(IPhoneNumber) {
  
  const rec = {PhoneModel}.create(IPhoneNumber);
  return rec;
  };
*/
  const UserModel=model<Iuser>('User',UserSchema);
  export default UserModel
  export {UserSchema}


//Functions that use the userModel, Login , Register,Etc

  export async function Login(input: Iuser){
    console.log("Email  "+input.Email)
    console.log("Password  "+input.Password)
    const candidateUser = await UserModel.findOne({ Email: input.Email } );
    if (!candidateUser) {
      
      return "2";//Not found
    }
    const match = await candidateUser.comparePassword(input.Password)
   // console.log("resultado  "+match)
    if(match){
        return candidateUser;
    }else{
        return "3";// No match Password
    }
  }

  export async function GetUserInformation(EmailUser: string) {
    //console.log("Email .. "+EmailUser)
 
   const User = await UserModel.findOne({ Email: EmailUser } );
   
   if (User==null) {      
  // console.log("no entro")
     return "2";//Not found
   }else{    
     const WorkerPremiumUser= User as Iuser;
     WorkerPremiumUser.Password=""
     console.log("lo encontro")
     
     return WorkerPremiumUser;
   }
 }
 
 

 export async function UpdateUser(input: Iuser) {
  
  const rec = await UserModel.findOneAndUpdate({ Email: input.Email },input);
  return rec;
}


  export async function addUser(input: Iuser) {
  
    const rec = await UserModel.create(input);
    return rec;
  }