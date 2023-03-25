import express from 'express';
import database from '../../database/database';

const productsRouter = express.Router();

productsRouter
  .get('/', async (req, res) => {
    const products = await database.getAll();
    res.json(products);
  })
  .post('/', async (req, res) => {
    const newProduct = req.body;
    const response = await database.create(newProduct);
    res.json(response);
  });

export default productsRouter;
