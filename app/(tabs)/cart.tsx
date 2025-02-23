// app/(tabs)/cart.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useCartStore } from '../../store/cartStore';

export default function CartScreen() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();
  
  if (items.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#151718' }}>
        <View style={{ padding: 16, backgroundColor: '#1A1A1A' }}>
          <Text style={{ fontSize: 24, fontFamily: 'GothamBold', color: '#FFFFFF' }}>Cart</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ color: '#FFFFFF', fontFamily: 'GothamBook' }}>Your cart is empty</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#151718' }}>
      <View style={{ padding: 16, backgroundColor: '#1A1A1A' }}>
        <Text style={{ fontSize: 24, fontFamily: 'GothamBold', color: '#FFFFFF' }}>Cart</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16, gap: 12 }}>
          {items.map((item) => (
            <View key={item.id} style={{
              flexDirection: 'row',
              backgroundColor: '#1A1A1A',
              borderRadius: 12,
              padding: 12,
              alignItems: 'center',
              gap: 12
            }}>
              <Image
                source={item.image}
                style={{ width: 80, height: 80, borderRadius: 8 }}
                contentFit="cover"
              />
              <View style={{ flex: 1, gap: 4 }}>
                <Text style={{ fontFamily: 'GothamBold', fontSize: 16, color: '#FFFFFF' }}>
                  {item.name}
                </Text>
                <Text style={{ fontFamily: 'GothamBook', fontSize: 14, color: '#FFFFFF' }}>
                  £{item.price.toFixed(2)}
                </Text>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 4 }}>
                  <Pressable 
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      backgroundColor: '#2A2A2A',
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Ionicons name="remove" size={20} color="#FFFFFF" />
                  </Pressable>
                  
                  <Text style={{ fontFamily: 'GothamBold', fontSize: 16, color: '#FFFFFF' }}>
                    {item.quantity}
                  </Text>

                  <Pressable 
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      backgroundColor: '#2A2A2A',
                      width: 28,
                      height: 28,
                      borderRadius: 14,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Ionicons name="add" size={20} color="#FFFFFF" />
                  </Pressable>
                </View>
              </View>

              <Pressable 
                onPress={() => removeItem(item.id)}
                style={{ padding: 4 }}
              >
                <Ionicons name="trash-outline" size={24} color="#E40421" />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ 
        backgroundColor: '#1A1A1A',
        padding: 16,
        gap: 12,
        borderTopWidth: 1,
        borderTopColor: '#2A2A2A'
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'GothamBold', fontSize: 18, color: '#FFFFFF' }}>
            Total
          </Text>
          <Text style={{ fontFamily: 'GothamBold', fontSize: 18, color: '#FFFFFF' }}>
            £{getTotalPrice().toFixed(2)}
          </Text>
        </View>

        <Pressable style={{
          backgroundColor: '#E40421',
          borderRadius: 25,
          padding: 16,
          alignItems: 'center'
        }}>
          <Text style={{ fontFamily: 'GothamBold', fontSize: 16, color: '#FFFFFF' }}>
            Checkout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
