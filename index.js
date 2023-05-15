import axios from 'axios';

const myDB = async() => Array.from({ length: 1000 }, (v, index) => `${index+1}-cellphone`);

const PRODUCTS_URL = 'http://localhost:3000/products';
const CART_URL = 'http://localhost:4000/cart';

async function processDbData() {
  const products = await myDB();
  const responses = []
  for (const product of products) {
    const {data: productInfo} = await axios.get(`${PRODUCTS_URL}?productName=${product}`);
    const {data: cartData} = await axios.post(`${CART_URL}`, productInfo);

    responses.push(cartData);
  }

  return responses;
}

await processDbData();