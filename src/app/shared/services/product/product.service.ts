import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IImage, IProduct} from '../../interfaces/product';
import {DatabaseWrapper} from '../../../auth-connector/database-wrapper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dal: DatabaseWrapper) { }

  // private readAndtransformToIProduct(): Observable<any> {
  //   return Observable.create(observer => {
  //     this.dal.getDatabase().collection('products').valueChanges().subscribe((products) => {
  //       const productCollections = Array<IProduct>();
  //       products.forEach((p: any) => {
  //         productCollections.push(
  //           {
  //             uid: p.uid,
  //             sku: p.sku,
  //             category: p.category || '',
  //             title: p.name,
  //             summary: p.summary,
  //             description: p.description,
  //             images: this.readImages(p),
  //             price: p.price,
  //             active: p.active
  //           } as IProduct
  //         );
  //       });
  //
  //       observer.next(productCollections);
  //     });
  //   });
  // }
  // private readImages(p: any) {
  //   const images = Array<IImage>();
  //   p.images.forEach(image => {
  //     images.push(<IImage>image);
  //   });
  //   return images;
  // }
  getProductById(id: number) {
     return this.dal.getProductById(id);
  }
  getProducts() {
    return this.dal.getProducts();
  }

}
