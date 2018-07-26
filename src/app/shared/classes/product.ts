import {IProduct, IImage} from '../interfaces/product';
import {ɵEMPTY_ARRAY} from '@angular/core';

export class Product implements IProduct {
  constructor(public uid: string, public sku: string,
              public title: string, public description: string,
              public summary: string, public category: string, public price: number,
              public active: boolean, public images: Array<IImage>) {

    this.active = active;
    this.sku = sku;
    this.summary = summary;
    this.category = category;
    this.images = Array<IImage>();
    this.description = description;
    this.title = title;
    this.price = price;
    this.uid = uid;

  }



}
