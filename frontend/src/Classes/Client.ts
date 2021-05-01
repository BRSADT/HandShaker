import {AddressClass } from './AddressClass'
import User  from './User'
import axios from 'axios'

export  class Client extends User {
    IdClient?:string
    ClientType?:boolean
    Addresses?:AddressClass[]
   
    constructor(UserEmail:string,UserPassword:string,IdClient?:string,Addressess?:AddressClass[],ClientType?:boolean){
        super(UserEmail,UserPassword)
        this.IdClient=IdClient
        this.Addresses=Addressess
        this.ClientType=ClientType      
    }

    async GetClientInformation(ClientObject: Client) {// fill ClientObject with all information of the client
        var num = 0;
    
        try {
          const response = await axios.post("http://localhost:3001/api/Client/GetClientInformation",{ ClientObject });//the object to send must be *ClientObject*
          ClientObject=response.data;      
          this.Response = "1";
          return this;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }


   
}

export default Client