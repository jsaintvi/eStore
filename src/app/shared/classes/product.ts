import {IProduct, IImage} from '../interfaces/product';
import {ɵEMPTY_ARRAY} from '@angular/core';

export class Product implements IProduct {
  // active: boolean;
  // category: string;
  // images: Array<IImage>;
  // sku: string;
  // summary: string;
  // title: string;
  // description: string;
  // price: number;
  constructor(public sku: string, public title: string, public description: string,
              public summary: string, public category: string, public price: number, public active: boolean, public images: Array<IImage>) {

    this.active = active;
    this.sku = sku;
    this.summary = summary;
    this.category = category;
    this.images = Array<IImage>();
    this.description = description;
    this.title = title;
    this.price = price;

  }



}
