// app/(tabs)/wishlist.tsx
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { FlashList } from '@shopify/flash-list';

interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
  }

const mockWishlistItems = [
  {
    id: '1',
    name: 'Ghost Pepper Hot Sauce',
    price: 12.99,
    image: 'https://placehold.co/400x400/png',
  },
  {
    id: '2',
    name: 'Chipotle BBQ Sauce',
    price: 9.99,
    image: 'https://placehold.co/400x400/png',
  }
];

export default function WishlistScreen() {
  const renderWishlistItem = ({ item }: { item: WishlistItem }) => (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#1A1A1A',
      borderRadius: 12,
      padding: 12,
      marginHorizontal: 16,
      marginVertical: 6,
      alignItems: 'center',
      gap: 12
    }}>
      <Image
        source={item.image}
        style={{ width: 80, height: 80, borderRadius: 8 }}
        contentFit="cover"
      />
      
      <View style={{ flex: 1, gap: 4 }}>
        <Text style={{ 
          fontFamily: 'GothamBold', 
          fontSize: 16, 
          color: '#FFFFFF' 
        }}>
          {item.name}
        </Text>
        <Text style={{ 
          fontFamily: 'GothamBook', 
          fontSize: 14, 
          color: '#FFFFFF' 
        }}>
          £{item.price.toFixed(2)}
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        <Pressable style={{
          backgroundColor: '#2A2A2A',
          width: 36,
          height: 36,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
        </Pressable>

        <Pressable style={{
          backgroundColor: '#2A2A2A',
          width: 36,
          height: 36,
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Ionicons name="trash-outline" size={20} color="#E40421" />
        </Pressable>
      </View>
    </View>
  );

  const EmptyWishlist = () => (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: 20,
      gap: 12
    }}>
      <Ionicons name="heart-outline" size={64} color="#999999" />
      <Text style={{ 
        fontFamily: 'GothamBold', 
        fontSize: 18, 
        color: '#FFFFFF',
        textAlign: 'center'
      }}>
        Your wishlist is empty
      </Text>
      <Text style={{ 
        fontFamily: 'GothamBook', 
        fontSize: 14, 
        color: '#999999',
        textAlign: 'center'
      }}>
        Save your favorite items to buy them later
      </Text>
      <Pressable style={{
        backgroundColor: '#E40421',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 25,
        marginTop: 8
      }}>
        <Text style={{ 
          fontFamily: 'GothamBold', 
          fontSize: 14, 
          color: '#FFFFFF' 
        }}>
          Browse Products
        </Text>
      </Pressable>
    </View>
  );

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
          Wishlist
        </Text>
      </View>

      <FlashList
        data={mockWishlistItems}
        renderItem={renderWishlistItem}
        estimatedItemSize={104}
        ListEmptyComponent={EmptyWishlist}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </SafeAreaView>
  );
}
