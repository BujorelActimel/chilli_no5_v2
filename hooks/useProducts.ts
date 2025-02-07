// hooks/useProducts.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { WooProduct } from '../types/woocommerce';
import { transformWooProduct } from '../utils/transformers';
import { getProducts } from '../utils/woocommerce';

interface UseProductsOptions {
  category?: string;
  search?: string;
}

export function useProducts({ category, search }: UseProductsOptions = {}) {
  return useInfiniteQuery({
    queryKey: ['products', category, search],
    queryFn: async ({ pageParam = 1 }) => {
      const { data, headers } = await getProducts({
        per_page: 20,
        page: pageParam,
        ...(category && category !== 'All' ? { category } : {}),
        ...(search ? { search } : {})
      });
      
      return {
        products: data.map(transformWooProduct),
        totalPages: parseInt(headers.get('x-wp-totalpages') || '1'),
        totalProducts: parseInt(headers.get('x-wp-total') || '0')
      };
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    initialPageParam: 1
  });
}