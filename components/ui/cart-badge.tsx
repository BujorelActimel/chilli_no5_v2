// components/ui/cart-badge.tsx
import { View, Text } from 'react-native';
import { useCartStore } from '../../store/cartStore';

export function CartBadge() {
  const totalItems = useCartStore(state => state.getTotalItems());
  
  if (totalItems === 0) return null;
  
  return (
    <View style={{
      position: 'absolute',
      right: -6,
      top: -6,
      backgroundColor: '#E40421',
      borderRadius: 12,
      minWidth: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    }}>
      <Text style={{
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'GothamBold',
      }}>
        {totalItems}
      </Text>
    </View>
  );
}