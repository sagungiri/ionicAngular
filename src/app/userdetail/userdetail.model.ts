export class UserDetailModel {
    name: string;
    address: string;
    text: string;
    number: string;
  
    constructor(params: {name?: string, address?: string, number?: string, text?: string} = {}){
      this.name = params.name;
      this.address=params.address;
      this.number = params.number;
      this.text = params.text
    }
  
  }