import {PhoneNumber} from './PhoneNumber';
import {Image} from './Image';
import axios from 'axios'
export  class User {
  Email: string;
  Password?: string;
  IdUser?: string;
  Name?: string;
  LastName?: string;
  ProfilePicture?: Image;
  Phones?: PhoneNumber[];
  UserType?: String;
  Birthday?: Date;
  Response?: String;
  _id?:String

  constructor(
    Email: string,
    Password?: string,
    IdUser?: string,
    Name?: string,
    LastName?: string,
    ProfilePicture?: Image,
    Phones?: PhoneNumber[],
    UserType?: String,
    Birthday?: Date,
    Response?: String
  ) {
    this.Email = Email;
    this.Password = Password;
    this.IdUser = IdUser;
    this.Name = Name;
    this.LastName = LastName;
    this.ProfilePicture = ProfilePicture;
    this.Phones = Phones;
    this.Email = Email;
    this.UserType = UserType;
    this.Birthday = Birthday;
    this.Response = Response;
  }

  async Login(userObject: User) {
    var num = 0;

    try {
      const response = await axios.post("http://localhost:3001/api/user/Login",{ userObject });
      
      this.Email = response.data.Email;
      this.UserType = response.data.UserType;
      this.Response = "1";
      return this;
    } catch (error) {
      console.log("error del tipo" + error);
      console.log("error del tipo" + error.response.status);
      this.Response = error.response.status;
      return this;
    }
  }

  AddPhone(PhoneDescription: String = "", Phone: String = ""): void {
    this.Phones?.push(new PhoneNumber(PhoneDescription, Phone));
  }
  
}
export default User