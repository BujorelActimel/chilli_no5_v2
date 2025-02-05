// app/(tabs)/cart.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#151718' }}>
      {/* Header */}
      <View style={{ 
        padding: 16, 
        backgroundColor: '#1A1A1A',
        borderBottomWidth: 1,
        borderBottomColor: '#2A2A2A'
      }}>
        <Text style={{ 
          fontSize: 24, 
          fontFamily: 'GothamBold', 
          color: '#FFFFFF' 
        }}>
          Cart
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Cart Items */}
        <View style={{ padding: 16, gap: 12 }}>
          {/* Cart Item */}
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#1A1A1A',
            borderRadius: 12,
            padding: 12,
            alignItems: 'center',
            gap: 12
          }}>
            <Image
              source="https://placehold.co/400x400/png"
              style={{ width: 80, height: 80, borderRadius: 8 }}
              contentFit="cover"
            />
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontFamily: 'GothamBold', fontSize: 16, color: '#FFFFFF' }}>
                Ghost Pepper Hot Sauce
              </Text>
              <Text style={{ fontFamily: 'GothamBook', fontSize: 14, color: '#FFFFFF' }}>
                £12.99
              </Text>
              
              {/* Quantity Controls */}
              <View style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                gap: 12,
                marginTop: 4
              }}>
                <Pressable style={{
                  backgroundColor: '#2A2A2A',
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Ionicons name="remove" size={20} color="#FFFFFF" />
                </Pressable>
                
                <Text style={{ 
                  fontFamily: 'GothamBold', 
                  fontSize: 16, 
                  color: '#FFFFFF' 
                }}>
                  1
                </Text>

                <Pressable style={{
                  backgroundColor: '#2A2A2A',
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Ionicons name="add" size={20} color="#FFFFFF" />
                </Pressable>
              </View>
            </View>

            <Pressable style={{ padding: 4 }}>
              <Ionicons name="trash-outline" size={24} color="#E40421" />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Cart Summary */}
      <View style={{ 
        backgroundColor: '#1A1A1A',
        padding: 16,
        gap: 12,
        borderTopWidth: 1,
        borderTopColor: '#2A2A2A'
      }}>
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginBottom: 4
        }}>
          <Text style={{ fontFamily: 'GothamBook', fontSize: 16, color: '#FFFFFF' }}>
            Subtotal
          </Text>
          <Text style={{ fontFamily: 'GothamBook', fontSize: 16, color: '#FFFFFF' }}>
            £12.99
          </Text>
        </View>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginBottom: 4
        }}>
          <Text style={{ fontFamily: 'GothamBook', fontSize: 16, color: '#FFFFFF' }}>
            Shipping
          </Text>
          <Text style={{ fontFamily: 'GothamBook', fontSize: 16, color: '#FFFFFF' }}>
            £5.00
          </Text>
        </View>

        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginTop: 8
        }}>
          <Text style={{ fontFamily: 'GothamBold', fontSize: 18, color: '#FFFFFF' }}>
            Total
          </Text>
          <Text style={{ fontFamily: 'GothamBold', fontSize: 18, color: '#FFFFFF' }}>
            £17.99
          </Text>
        </View>

        <Pressable style={{
          backgroundColor: '#E40421',
          borderRadius: 25,
          padding: 16,
          alignItems: 'center',
          marginTop: 8
        }}>
          <Text style={{ 
            fontFamily: 'GothamBold', 
            fontSize: 16, 
            color: '#FFFFFF' 
          }}>
            Checkout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
