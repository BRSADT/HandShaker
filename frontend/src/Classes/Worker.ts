import {AddressClass } from './AddressClass'
import User  from './User'
import axios from 'axios'

export  class Worker extends User {
    IdWorker?:string
    Category?:string
    Profession?:string
    JobDescription?:string
    EmailContact?:string
    isPremium?:boolean
    Addresses?:AddressClass[]
    WorkerType?:boolean

    constructor(UserEmail:string,UserPassword:string,IdWorker?:string,Category?:string,Profession?:string,JobDescription?:string,EmailContact?:string,isPremium?:boolean,Addressess?:AddressClass[],WorkerType?:boolean){
        super(UserEmail,UserPassword)
        this.IdWorker=IdWorker
        this.Category=Category
        this.Profession=Profession
        this.JobDescription=JobDescription
        this.EmailContact=EmailContact
        this.isPremium=isPremium 
        this.Addresses=Addressess
        this.WorkerType=WorkerType      
    }


    async GetWorkerInformation(WorkerObject: Worker) {// fill workerObject with all information of the worker
        var num = 0;
    
        try {
          const response = await axios.post("http://localhost:3001/api/Worker/GetWorkerInformation",{ WorkerObject });//the object to send must be *WorkerObject*  
          WorkerObject=response.data;
          console.log("aqui...")
          console.log(JSON.stringify(WorkerObject));
          console.log("profesion   "+WorkerObject.Profession);
          return WorkerObject;
        } catch (error) {
          console.log("error del tipo" + error);
          console.log("error del tipo" + error.response.status);
          this.Response = error.response.status;
          return this;
        }
      }
   
}
export default Worker