export class Customer {
    id?: number;
    ruc: string;
    businessName: string;
    phone: string;
    email: string;
    status: boolean;
  
  
    constructor( ruc: string,businessName: string, phone: string,email: string, state:boolean){
      this.businessName=businessName;
      this.ruc=ruc;
      this.businessName = businessName;
      this.phone = phone;
      this.email = email;
      this.status = state;
  
    }
  }