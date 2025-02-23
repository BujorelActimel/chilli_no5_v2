// store/cartStore.ts
import { create } from 'zustand';
import { TransformedProduct } from '../utils/transformers';

interface CartItem extends TransformedProduct {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: TransformedProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    
    return {
      items: [...state.items, { ...product, quantity: 1 }],
    };
  }),
  
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId),
  })),
  
  updateQuantity: (productId, quantity) => set((state) => {
    if (quantity <= 0) {
      return {
        items: state.items.filter(item => item.id !== productId),
      };
    }
    
    return {
      items: state.items.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ),
    };
  }),
  
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
}));