import { UpdateProductDTO } from '../../../domain/entities/product';
import { Product } from '../models/Product';

export async function updateProduct(
  id: string,
  newInfo: UpdateProductDTO
): Promise<void> {
  try {
    await Product.findByIdAndUpdate(id, newInfo);
  } catch (error) {
    throw new Error('There was a problem updating the new product');
  }
}
