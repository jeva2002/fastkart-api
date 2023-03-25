import { IProduct } from '../../../domain/entities/product';
import { Product } from '../models/Product';

export async function getAllProducts(): Promise<IProduct[]> {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error('There was an error getting the products');
  }
}
