export class Product {
    id:number;
    name:String;
    description:String;
    price:number;
    imgurl:string;

    constructor(id,name,description,price ,imgurl)  {
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imgurl=imgurl
    }

}
