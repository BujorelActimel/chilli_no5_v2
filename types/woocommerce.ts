// types/woocommerce.ts
export interface WooProduct {
    id: number;
    name: string;
    price: string;
    description: string;
    short_description: string;
    images: {
        id: number;
        src: string;
        alt: string;
    }[];
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
    stock_status: 'instock' | 'outofstock' | 'onbackorder';
}
