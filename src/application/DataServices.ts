import { IProduct, UpdateProductDTO } from '../domain/entities/product';

export interface DataServices {
  connect: () => Promise<any>;
  create: (product: IProduct) => Promise<string>;
  getAll: () => Promise<IProduct[]>;
  getOneById: (id: string) => Promise<IProduct>;
  getOneByFilter: (filter: string) => Promise<IProduct>;
  update: (id: string, newInfo: UpdateProductDTO) => Promise<void>;
  delete: (id: string) => Promise<void>;
  disconnect: () => Promise<any>;
}
