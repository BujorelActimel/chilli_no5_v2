// components/ui/tab-cart-icon.tsx
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartBadge } from './cart-badge';

interface TabCartIconProps {
  color: string;
  size: number;
}

export function TabCartIcon({ color, size }: TabCartIconProps) {
  return (
    <View>
      <CartBadge />
      <Ionicons name="cart-outline" size={size} color={color} />
    </View>
  );
}