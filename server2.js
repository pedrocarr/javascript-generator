// curl -X POST "localhost:4000/cart" --data '{"id": "123"}'

import { createServer } from 'http';


const PORT = 4000;


async function handler(req, res) {

  if (
    req.method === 'POST' && req.url.includes('cart')
  ) {
    for await(const data of req) {
      const item = JSON.parse(data);
      console.log('received', item);

      return res.end(`process succeeded for item ${item.id}`)
    }

  }
  return res.end('HEY!!!');
}

createServer(handler).listen(PORT, () => {
  console.log(`Cart API is running on port ${PORT}`)
});
