// components/ui/product-card.tsx
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  spicyLevel: number;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <View style={styles.productItem}>
      <Image
        source={product.image}
        style={styles.productImage}
        contentFit="cover"
      />
      
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {product.name}
        </Text>
        
        <Text style={styles.productPrice}>
          £{product.price.toFixed(2)}
        </Text>

        {/* Spiciness level */}
        <View style={styles.spicyLevel}>
          {[...Array(5)].map((_, index) => (
            <Ionicons
              key={index}
              name="flame"
              size={12}
              color={index < product.spicyLevel ? '#E40421' : '#2A2A2A'}
            />
          ))}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.wishlistButton}>
          <Ionicons name="heart-outline" size={20} color="#E40421" />
        </Pressable>
        
        <Pressable style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    minHeight: 250,
  },
  productInfo: {
    flex: 1,
  },
  productImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontFamily: 'GothamBold',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  productPrice: {
    fontFamily: 'GothamBook',
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  spicyLevel: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  wishlistButton: {
    backgroundColor: '#2A2A2A',
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#E40421',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
  addToCartText: {
    fontFamily: 'GothamBold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
