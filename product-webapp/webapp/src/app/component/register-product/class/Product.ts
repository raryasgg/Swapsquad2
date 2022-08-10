
export class Product {
    
    pcategory:"";
    pname?:String;
    desc?:String;
    pdatepost?:String;
    pexchange:String;
    pcoin?:Number;
    exchangeList:[String];
    pemail?:String;
    plocation?:String;
    
    // image:[byte];
    

constructor(){
    this.pcategory="";
    this.pname="";
    this.desc="";
    this.pdatepost= "";
    this.pexchange="";
    this.pcoin=0;
    this.exchangeList=[""];
    this.pemail="";
    this.plocation="";
}
}
