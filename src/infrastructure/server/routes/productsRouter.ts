import express from 'express';
import database from '../../database/database';

const productsRouter = express.Router();

productsRouter
  .post('/', async (req, res) => {
    const newProduct = req.body;
    const response = await database.create(newProduct);
    res.status(201).json(response);
  })
  .get('/:id', async (req, res) => {
    const response = await database.getOneById(req.params.id);
    res.json(response);
  })
  .get('/', async (req, res) => {
    const products = await database.getAll();
    res.json(products);
  })
  .patch('/:id', async (req, res) => {
    await database.update(req.params.id, req.body);
    res.json(
      `El producto con el id ${req.params.id} ha sido correctamente actualizado`
    );
  })
  .delete('/:id', async (req, res) => {
    await database.delete(req.params.id);
    res.json(
      `El producto con el id ${req.params.id} ha sido correctamente actualizado`
    );
  });

export default productsRouter;
