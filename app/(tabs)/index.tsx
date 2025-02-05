// app/(tabs)/index.tsx
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { mockProducts, categories } from '../../constants/mock-data';
import { ProductCard } from '../../components/ui/product-card';
import { SearchBar } from '../../components/ui/search-bar';

export default function ShopScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#151718' }}>
      {/* Header */}
      <View style={{ padding: 16, backgroundColor: '#1A1A1A' }}>
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: 16 
        }}>
          <Text style={{ 
            fontSize: 24, 
            fontFamily: 'GothamBold', 
            color: '#FFFFFF' 
          }}>
            Chilli No. 5
          </Text>
          <Pressable>
            <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
          </Pressable>
        </View>
        
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search sauces..."
        />
      </View>

      {/* Categories - Now with fixed height */}
      <View style={{ 
        height: 48,  // Fixed container height
        backgroundColor: '#1A1A1A',
        justifyContent: 'center' // Center the ScrollView vertically
      }}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {categories.map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={{
                backgroundColor: selectedCategory === category ? '#E40421' : '#2A2A2A',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
                marginRight: 8,
                height: 32,
                justifyContent: 'center',
                minWidth: 60,
              }}
            >
              <Text style={{
                color: '#FFFFFF',
                fontFamily: 'GothamBook',
                fontSize: 13,
                textAlign: 'center'
              }}>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Product Grid */}
      <FlashList
        data={mockProducts}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => {}}
          />
        )}
        estimatedItemSize={300}
        contentContainerStyle={{ padding: 8 }}
      />
    </SafeAreaView>
  );
}