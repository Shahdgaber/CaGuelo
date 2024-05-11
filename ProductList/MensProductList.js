import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
    { id: 1, name: 'Black T-shirt', price: 1039.20, quantity: 0, image: require('../assets/images1/product1.webp') },
        { id: 2, name: ' White T-shirt ', price: 800, quantity: 0, image: require('../assets/images1/product2.webp') },
        { id: 3, name: 'lightgreen shirt', price: 600, quantity: 0, image: require('../assets/images1/product3.webp') },
        { id: 4, name: ' navy blue printed shirt', price: 700 ,quantity: 0, image: require('../assets/images1/product4.webp') },
        { id: 5, name: ' lightblue Shirt ', price: 400, quantity: 0, image: require('../assets/images1/product5.webp') },
        { id: 6, name: ' cafe shirt ', price: 300, quantity: 0, image: require('../assets/images1/product6.webp') },
        { id: 7, name: ' navy blue jeans ', price: 970, quantity: 0, image: require('../assets/images1/product7.webp') },
        { id: 8, name: ' Grey jeans ', price: 350, quantity: 0, image: require('../assets/images1/product8.webp') },
        { id: 9, name: 'skiny white bants  ', price: 450, quantity: 0, image: require('../assets/images1/product9.webp') },
        { id: 10, name: ' white Shirt  ', price: 900, quantity: 0, image: require('../assets/images1/product10.webp') },
        { id: 11, name: ' Black hoodi', price: 450, quantity: 0, image: require('../assets/images1/product11.webp') },
        { id: 12, name: 'Beige shirt', price: 390, quantity: 0, image: require('../assets/images1/product12.webp') },
        { id: 13, name: 'White sweatshirt', price: 370, quantity: 0, image: require('../assets/images1/product13.webp') },
        { id: 14, name: 'Black hoodi', price: 450, quantity: 0, image: require('../assets/images1/product14.webp') },
        { id: 15, name: 'Grey hoodi', price: 1050, quantity: 0, image: require('../assets/images1/product15.webp') },
        { id: 16, name: 'Brown hoodi ', price: 600, quantity: 0, image: require('../assets/images1/product16.webp') },
        { id: 17, name: 'Beige sweatbants', price: 790, quantity: 0, image: require('../assets/images1/product17.webp') },
        { id: 18, name: 'Grey sweatbants', price: 250, quantity: 0, image: require('../assets/images1/product18.webp') },
        { id: 19, name: 'Black sweatBants', price: 330, quantity: 0, image: require('../assets/images1/product19.webp') },
        { id: 20, name: 'Black shirt', price: 650, quantity: 0, image: require('../assets/images1/product20.webp') },
    //     // Add more products as needed
  ]);

  const addToCart = (product) => {
    const updatedProducts = products.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: prod.quantity + 1 } : prod
=======
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ProductList = ({ goToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(collection(db, "products"), where("category", "==", "men"));
        const querySnapshot = await getDocs(q);
        const productsData = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data(), quantity: 0 });
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
>>>>>>> origin/firebase
    );
    setProducts(updatedProducts);
  };

<<<<<<< HEAD
  const removeFromCart = (product) => {
    const updatedProducts = products.map((prod) =>
      prod.id === product.id ? { ...prod, quantity: Math.max(0, prod.quantity - 1) } : prod
=======
  const removeFromCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: Math.max(0, product.quantity - 1) } : product
>>>>>>> origin/firebase
    );
    setProducts(updatedProducts);
  };

<<<<<<< HEAD
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
=======
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => removeFromCart(item.id)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => addToCart(item.id)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item.id)}>
>>>>>>> origin/firebase
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

<<<<<<< HEAD
  // Generate a unique key based on the number of columns
  const flatListKey = columns.toString(); // Convert columns to string for key

=======
>>>>>>> origin/firebase
  return (
    <View style={styles.container}>
      <Text style={styles.title}>For Men</Text>
      <FlatList
<<<<<<< HEAD
        key={flatListKey} // Use a unique key to force a fresh render
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={columns}
=======
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
>>>>>>> origin/firebase
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
<<<<<<< HEAD
    // backgroundColor: 'black',
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 210,
    height: 240,
    // resizeMode: 'cover',
=======
    borderRadius: 10,
    elevation: 3,
    // backgroundColor: '#fff',
  },
  productImage: {
    width: 210,
    height: 260,
>>>>>>> origin/firebase
    borderRadius: 10,
  },
  productInfo: {
    marginTop: 10,
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
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
<<<<<<< HEAD
    width: '100%',
    paddingVertical: 10,
  },
});

export default ProductList;

=======
    paddingBottom: 20,
  },
});

export default ProductList;
>>>>>>> origin/firebase
