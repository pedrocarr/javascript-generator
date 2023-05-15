// curl "localhost:3000/products?productName=soup"
import { createServer } from 'http';
import { parse } from 'url';
import { randomUUID } from 'crypto';

const PORT = 3000;

async function handler(req, res) {

  if (
    req.method === 'GET' && req.url.includes('products')
  ) {
    const { query: { productName }} = parse(req.url, true)
    const result = {
      id: randomUUID(),
      product: productName,
    }

    return res.end(JSON.stringify(result));
  }
  return res.end('HEY!!!');
}

createServer(handler).listen(PORT, () => {
  console.log(`products API is running on port ${PORT}`)
});
