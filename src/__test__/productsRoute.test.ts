import request from 'supertest';
import { app } from '../infrastructure/server/server';
import database from '../infrastructure/database/database';
import { testProduct } from './project.mock';

describe('Routes', () => {
  beforeAll(() => {
    database.connect();
  });
  afterAll(() => {
    database.disconnect();
  });

  let response: request.Response;

  describe('Create a product', () => {
    beforeEach(async () => {
      response = await request(app).post('/products').send(testProduct);
    });

    it('works', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });
  });

  describe('Get all products', () => {
    beforeEach(async () => {
      response = await request(app).get('/products').send();
    });
    it('works', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });

    it('response with an array of products', async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
