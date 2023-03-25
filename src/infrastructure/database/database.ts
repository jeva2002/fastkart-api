import { DataServices } from '../../application/DataServices';
import { IProduct } from '../../domain/entities/product';
import { connect, disconnect } from './services/connection';
import { createProduct } from './services/createProduct';
import { deleteProduct } from './services/deleteProduct';
import { getAllProducts, getOneProduct } from './services/getProduct';
import { updateProduct } from './services/updateProduct';

const database: DataServices = {
  connect,
  create: createProduct,
  getAll: getAllProducts,
  getOneById: getOneProduct,
  getOneByFilter: function (filter: string): Promise<IProduct> {
    throw new Error('Function not implemented.');
  },
  update: updateProduct,
  delete: deleteProduct,
  disconnect,
};

export default database;
