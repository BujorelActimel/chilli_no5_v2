require('dotenv').config();
const fs = require('fs').promises;
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

if (!process.env.WOOCOMMERCE_URL || !process.env.WOOCOMMERCE_CONSUMER_KEY || !process.env.WOOCOMMERCE_CONSUMER_SECRET) {
  console.error('Missing required environment variables. Please check your .env file');
  process.exit(1);
}

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3"
});

function transformWooProduct(product) {
  return {
    id: product.id.toString(),
    name: product.name,
    price: parseFloat(product.price || '0'),
    description: product.short_description.replace(/<[^>]*>/g, ''),
    image: product.images[0]?.src || 'placeholder-url',
    category: product.categories[0]?.name || 'Uncategorized',
    inStock: product.stock_status === 'instock',
    spicyLevel: 3
  };
}

async function getAndTransformProduct() {
  try {
    const response = await api.get("products", {
      per_page: 1,
      page: 1
    });
    
    const transformedProduct = transformWooProduct(response.data[0]);
    await fs.writeFile(
      'transformed-product.json', 
      JSON.stringify(transformedProduct, null, 2)
    );
    
    console.log('Transformed product data:');
    console.log(transformedProduct);
  } catch (error) {
    if (error.response?.data) {
      console.log("WooCommerce Error:", error.response.data);
    } else {
      console.log("Network Error:", error.message);
    }
  }
}

getAndTransformProduct();