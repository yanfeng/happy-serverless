import request from 'supertest';
import server from '../src/app.js';

beforeAll(async () => {
  process.env.database = 'postgres://postgres:123456@localhost:5432/happy_serverless';
  console.log('Jest starting!');
});

afterAll(() => {
  server.close();
  console.log('Server closed!');
});

describe('roots tests', () => {
  test('get roots GET /', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('Welcome to happy-serverless world!');
  });
});

describe('dogs tests', () => {
  test('get all dogs GET /dogs', async () => {
    const response = await request(server).get('/dogs');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('akita');
  });
});

describe('customers tests', () => {
  test('get all customers GET /customers', async () => {
    const response = await request(server).get('/customers');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('Hello Customers!');
  });
});
