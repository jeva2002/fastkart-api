import { CreateProductDTO } from '../../../domain/entities/product';
import { Product } from '../models/Product';

export async function createProduct(
  product: CreateProductDTO
): Promise<string> {
  try {
    const newProduct = await Product.create(product);
    return newProduct._id;
  } catch (error) {
    throw new Error('There was a problem creating the new product');
  }
}
