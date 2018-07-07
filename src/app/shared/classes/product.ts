import {IProduct} from '../interfaces/product';

export class Product implements IProduct {

  constructor(public id: string, public name: string, public description: string, public price: number, public rating: number) {
    // this.id = id;
    // this.name = name;
    // this.price = price;
    // this.rating = rating;
  }

}
