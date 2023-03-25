import { DataServices } from '../../application/DataServices';
import { IProduct } from '../../domain/entities/product';
import { connect, disconnect } from './services/connection';
import { createProduct } from './services/createProduct';
import { getAllProducts } from './services/getProduct';

const database: DataServices = {
  connect,
  create: createProduct,
  getAll: getAllProducts,
  getOneById: function (id: string): Promise<IProduct> {
    throw new Error('Function not implemented.');
  },
  getOneByFilter: function (filter: string): Promise<IProduct> {
    throw new Error('Function not implemented.');
  },
  update: function (id: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
  delete: function (id: string): Promise<void> {
    throw new Error('Function not implemented.');
  },
  disconnect,
};

export default database;
