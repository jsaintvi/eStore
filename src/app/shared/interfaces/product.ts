export interface IProduct {
  uid: string;
  sku: string;
  category: string;
  title: string;
  summary: string;
  description: string;
  images: Array<IImage>;
  price: number;
  active: boolean;
}

export interface IImage {
  caption: string;
  photoUrl: string;
}
