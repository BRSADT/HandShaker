
export  class AddressClass {
    Address:string
    Number:string
    Reference:string
    LinkMaps:string
    _id:String

    constructor(Address:string,Number:string,_id:string="",Reference:string="",LinkMaps:string=""){
     
        this.Address=Address
        this.Number=Number
        this.Reference=Reference
        this._id=_id
        this.LinkMaps=LinkMaps 
    }

   
}
 