// app/(tabs)/index.tsx
import { View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../../constants/mock-data';
import { ProductCard } from '../../components/ui/product-card';
import { SearchBar } from '../../components/ui/search-bar';
import { useProducts } from '../../hooks/useProducts';
import debounce from 'lodash/debounce';

export default function ShopScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Debounced search to prevent too many API calls
  const debouncedSearch = useCallback(
    debounce((text: string) => setSearchQuery(text), 500),
    []
  );

  const { 
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useProducts({
    category: selectedCategory,
    search: searchQuery
  });

  const products = data?.pages.flatMap(page => page.products) ?? [];

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isError) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#151718' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ color: '#FFFFFF', fontFamily: 'GothamBold', textAlign: 'center' }}>
            {error instanceof Error ? error.message : 'Failed to load products'}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

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
          onChangeText={debouncedSearch}
          placeholder="Search sauces..."
        />
      </View>

      {/* Categories */}
      <View style={{ 
        height: 48,
        backgroundColor: '#1A1A1A',
        justifyContent: 'center'
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
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => {}}
          />
        )}
        estimatedItemSize={300}
        contentContainerStyle={{ padding: 8 }}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          isFetchingNextPage ? (
            <View style={{ padding: 20 }}>
              <ActivityIndicator color="#E40421" />
            </View>
          ) : null
        )}
        ListEmptyComponent={() => (
          isLoading ? (
            <View style={{ padding: 20 }}>
              <ActivityIndicator color="#E40421" />
            </View>
          ) : (
            <View style={{ padding: 20, alignItems: 'center' }}>
              <Text style={{ color: '#FFFFFF', fontFamily: 'GothamBook' }}>
                No products found
              </Text>
            </View>
          )
        )}
      />
    </SafeAreaView>
  );
}