// utils/woocommerce.ts
import { WooProduct } from '../types/woocommerce';
import base64 from 'base-64';

const BASE_URL = process.env.EXPO_PUBLIC_WOOCOMMERCE_URL;
const CONSUMER_KEY = process.env.EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET;

if (!BASE_URL || !CONSUMER_KEY || !CONSUMER_SECRET) {
  throw new Error('Missing WooCommerce configuration. Please check your .env file');
}

function getAuthHeader() {
  return 'Basic ' + base64.encode(`${CONSUMER_KEY}:${CONSUMER_SECRET}`);
}

interface RequestParams {
  [key: string]: string | number | boolean | undefined;
}

async function request<T>(endpoint: string, params: RequestParams = {}): Promise<{
  data: T;
  headers: Headers;
}> {
  const queryString = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  ).toString();

  const url = `${BASE_URL}/wp-json/wc/v3/${endpoint}${queryString ? `?${queryString}` : ''}`;

  try {
    console.log('Attempting to fetch:', url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': getAuthHeader(),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'omit',
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data, headers: response.headers };
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export async function getProducts(params: RequestParams = {}) {
  return request<WooProduct[]>('products', params);
}

export async function getProduct(id: number) {
  return request<WooProduct>(`products/${id}`);
}