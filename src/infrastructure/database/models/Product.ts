import { Schema, model } from 'mongoose';
import { IProduct } from '../../../domain/entities/product';

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: 'String', required: true },
    category: { type: 'String', required: true },
    img: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    weight: { type: 'Number', required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = model('Product', ProductSchema);
