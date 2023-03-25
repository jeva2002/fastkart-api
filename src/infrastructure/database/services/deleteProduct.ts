import { Product } from '../models/Product';

export async function deleteProduct(id: string): Promise<void> {
  try {
    await Product.deleteOne({ _id: id });
  } catch (error) {
    throw new Error('Function not implemented.');
  }
}
