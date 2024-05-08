import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

const WomenProductList = ({ goToCart }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'فستان أسود', price: 1039.20, quantity: 0, image: require('../assets/images/product1.webp') },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 0, image: require('../assets/images/product2.webp') },
    { id: 4, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 5, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 6, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 7, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 8, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 9, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 10, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 11, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 12, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 13, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    { id: 14, name: 'Product 3', price: 39.99, quantity: 0, image: require('../assets/images/product3.webp') },
    // Add more products as needed
  ]);

  

  const addToCart = (product) => {
    const updatedProducts = products.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
    );
    setProducts(updatedProducts);
  };

  const removeFromCart = (product) => {
    const updatedProducts = products.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: Math.max(0, prod.quantity - 1) } : prod
    );
    setProducts(updatedProducts);
  };

  const handleAddToCart = (product) => {
    const existingItem = products.find((prod) => prod.id === product.id);
    if (existingItem) {
      addToCart(product);
    }
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>  {item.price} EGP </Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => removeFromCart(item)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => addToCart(item)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={5} // عرض 2 منتج في كل صف
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity style={styles.button} onPress={goToCart}>
        <Text>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '18%', // عرض كل منتج بنسبة من عرض الشاشة لعرض 5 منتجات في الصف
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginHorizontal: 8, // إضافة مسافة أفقية بين المنتجات
  },
  productImage: {
    width: 220, // حجم الصورة المناسب لكل منتج
    height: 220,
    borderRadius: 5,
  },
  productInfo: {
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
  },
  addToCartButton: {
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  flatListContainer: {
    width: '100%', // تعبئة الشاشة بالمنتجات
  },
});
export default WomenProductList;
