import request from 'supertest';
import { app } from '../infrastructure/server/server';

describe('Routes', () => {
  let response: request.Response;
  beforeEach(async () => {
    response = await request(app).get('/products').send();
  });

  describe('Get all products', () => {
    it('works', async () => {
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    });

    it('response with an array of products', async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
