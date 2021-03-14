import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
const BCRYPT_SALT_WORK_FACTOR = 10;
import { Document} from 'mongoose';
export interface Iuser extends Document{
    Nombre:string
    Correo:string
    Contrasena:string

    comparePassword(password: string): boolean;

}
const UserSchema=new Schema({
    Nombre:{type:String},
    Correo:{type:String,required:true,index:{unique:true}},
    Contrasena:{type:String,required:true,}
})

UserSchema.pre('save', function preSaveAddPasswordHash(next) {
    const user = this as Iuser;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) {
      return next();
    }

    // generate a salt
    bcrypt.genSalt(BCRYPT_SALT_WORK_FACTOR, (errorSalt, salt) => {
      if (errorSalt) {
        return next(errorSalt);
      }

      // hash the password along with our new salt
      bcrypt.hash(user.Contrasena, salt, (errorHash, hash) => {
        if (errorHash) {
          return next(errorHash);
        }
        // override the cleartext password with the hashed one
        user.Contrasena = hash;
        next();
      });
    });
  });

  UserSchema.methods.comparePassword = async function comparePassword(candidatePassword) {
    const user = this as Iuser;
    const isMatch = await bcrypt.compare(candidatePassword, user.Contrasena);
    return isMatch;
  };
  const UserModel=model<Iuser>('Usuario',UserSchema);
  export default UserModel
  export async function Login(Correo:string,Contrasena:string){
    const candidateUser = await UserModel.findOne({ Correo });
    if (!candidateUser) {
      throw new Error('User not found')
    }
    const match = candidateUser.comparePassword(Contrasena)
    if(match){
        return candidateUser;
    }else{
        return null;
    }
  }

  export function addUser(input: Iuser) {
    const rec = UserModel.create(input);
    return rec;
  }