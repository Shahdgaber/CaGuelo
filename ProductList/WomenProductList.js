import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, useWindowDimensions } from 'react-native';

const ProductList = ({ goToCart }) => {
  const [columns, setColumns] = useState(2); // Default number of columns
  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    // Determine the number of columns based on screen width
    if (windowWidth >= 600) {
      setColumns(5); // For larger screens
    } else {
      setColumns(2); // For smaller screens
    }
  }, [windowWidth]);

  const [products, setProducts] = useState([
    { id: 1, name: 'Black dress', price: 1039.20, quantity: 0, image: require('../assets/images/product1.webp') },
        { id: 2, name: ' offSholder dress ', price: 800, quantity: 0, image: require('../assets/images/product2.webp') },
        { id: 3, name: 'White and black dress', price: 600, quantity: 0, image: require('../assets/images/product3.webp') },
        { id: 4, name: ' Red dress', price: 700 ,quantity: 0, image: require('../assets/images/product4.webp') },
        { id: 5, name: ' Stitsh T-Shirt ', price: 400, quantity: 0, image: require('../assets/images/product5.webp') },
        { id: 6, name: ' White mickey-mouse T-Shirt  ', price: 300, quantity: 0, image: require('../assets/images/product6.webp') },
        { id: 7, name: ' White dress ', price: 970, quantity: 0, image: require('../assets/images/product7.webp') },
        { id: 8, name: ' Blue shirt ', price: 350, quantity: 0, image: require('../assets/images/product8.webp') },
        { id: 9, name: 'Red printed shirt  ', price: 450, quantity: 0, image: require('../assets/images/product9.webp') },
        { id: 10, name: ' Short white Shirt  ', price: 900, quantity: 0, image: require('../assets/images/product10.webp') },
        { id: 11, name: ' blue jeans', price: 450, quantity: 0, image: require('../assets/images/product11.webp') },
        { id: 12, name: 'Navy blue jeans', price: 390, quantity: 0, image: require('../assets/images/product12.webp') },
        { id: 13, name: 'Black jeans', price: 370, quantity: 0, image: require('../assets/images/product13.webp') },
        { id: 14, name: 'Brown Jeb', price: 450, quantity: 0, image: require('../assets/images/product14.webp') },
        { id: 15, name: 'Black hoodi', price: 1050, quantity: 0, image: require('../assets/images/product15.webp') },
        { id: 16, name: 'Black printed sweatshirt ', price: 600, quantity: 0, image: require('../assets/images/product16.webp') },
        { id: 17, name: 'Grey printed sweatshirt', price: 790, quantity: 0, image: require('../assets/images/product17.webp') },
        { id: 18, name: 'Grey sweat-Bants', price: 250, quantity: 0, image: require('../assets/images/product18.webp') },
        { id: 19, name: 'Black sweat-Bants', price: 330, quantity: 0, image: require('../assets/images/product19.webp') },
        { id: 20, name: 'Pajamas', price: 650, quantity: 0, image: require('../assets/images/product20.webp') },
    //     // Add more products as needed
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
        <Text>{item.price} EGP</Text>
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

  // Generate a unique key based on the number of columns
  const flatListKey = columns.toString(); // Convert columns to string for key

  return (
    <View style={styles.container}>
      <Text style={styles.title}>For Women</Text>
      <FlatList
        key={flatListKey} // Use a unique key to force a fresh render
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={columns}
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
    backgroundColor: '#d9ead3'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    padding: 10,
    // backgroundColor: 'black',
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 210,
    height: 240,
    // resizeMode: 'cover',
    borderRadius: 10,
  },
  productInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  flatListContainer: {
    width: '100%',
    paddingVertical: 10,
  },
});

export default ProductList;

