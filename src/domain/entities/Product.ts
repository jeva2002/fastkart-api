export interface IProduct {
  _id: string;
  price: number;
  name: string;
  weight: number;
  category: string;
  img: string;
}

export type CreateProductDTO = Omit<IProduct, '_id'>;
export type UpdateProductDTO = Partial<IProduct>;
