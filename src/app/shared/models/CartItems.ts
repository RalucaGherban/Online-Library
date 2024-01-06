import { Book } from "./book";

export class CartItems{
    constructor(public book:Book ){}
    quantity:number=1;
    price:number=this.book.price;
    
}