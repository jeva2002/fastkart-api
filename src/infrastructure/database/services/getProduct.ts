import { IProduct } from '../../../domain/entities/product';
import { Product } from '../models/Product';

export async function getAllProducts(): Promise<IProduct[]> {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error('There was an error getting the products');
  }
}

export async function getOneProduct(id: string): Promise<IProduct> {
  try {
    const product = await Product.findOne({ _id: id });
    if (!product) throw 'There was an error getting the product';
    return product;
  } catch (error) {
    throw new Error(
      typeof error === 'string' ? error : 'There was an internal server error'
    );
  }
}
