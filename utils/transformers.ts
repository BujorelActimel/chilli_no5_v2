// utils/transformers.ts
import { WooProduct } from '../types/woocommerce';

export function transformWooProduct(product: WooProduct) {
    return {
        id: product.id.toString(),
        name: product.name,
        price: parseFloat(product.price || '0'),
        description: product.short_description.replace(/<[^>]*>/g, ''),
        image: product.images[0]?.src || 'placeholder-url',
        category: product.categories[0]?.name || 'Uncategorized',
        inStock: product.stock_status === 'instock',
        spicyLevel: 3 // You can add this as a custom field in WooCommerce meta_data
    };
}
  
export type TransformedProduct = ReturnType<typeof transformWooProduct>;