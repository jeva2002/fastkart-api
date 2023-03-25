import * as dotenv from 'dotenv';
dotenv.config();
import request from 'supertest';
import database from '../infrastructure/database/database';
import { app } from '../infrastructure/server/server';
import { testProduct } from './product.mock';

describe('Products Routes', () => {
  let response: request.Response;
  let testProductId: string;

  beforeAll(async () => {
    database.connect(process.env.URI);
    response = await request(app).post('/products').send(testProduct);
    testProductId = response.body;
  });
  afterAll(() => {
    database.disconnect();
  });

  describe('Create product', () => {
    it('response with the expected data', async () => {
      expect(response.statusCode).toBe(201);
      expect(response.headers['content-type']).toContain('json');
      expect(typeof response.body).toBe('string');
    });
  });

  describe('Get one product', () => {
    beforeEach(async () => {
      response = await request(app)
        .get('/products/' + testProductId)
        .send();
    });

    it('response with the expected data', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe('Update product', () => {
    beforeEach(async () => {
      response = await request(app)
        .patch('/products/' + testProductId)
        .send({ category: 'category updated' });
    });

    it('response with the expected data', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(typeof response.body).toBe('string');
    });
  });

  describe('Delete product', () => {
    beforeEach(async () => {
      response = await request(app)
        .delete('/products/' + testProductId)
        .send();
    });

    it('response with the expected data', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(typeof response.body).toBe('string');
    });
  });

  describe('Get all products', () => {
    beforeEach(async () => {
      response = await request(app).get('/products').send();
    });

    it('response with the expected data', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
