import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ProductList = ({ goToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      
      try {
        const q = query(collection(db, "products"), where("category", "==", "women"));
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
    );
    setProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: Math.max(0, product.quantity - 1) } : product
    );
    setProducts(updatedProducts);
  };

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
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>For Women</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity style={styles.button} onPress={goToCart}>
        <Text style={styles.buttonText} >Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth : '100%',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingBottom : 20 ,
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
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 210,
    height: 260,
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
    borderRadius: 12,
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    borderRadius : 12 ,
    width : '60%',    alignSelf : 'center',
  },
  buttonText : {
    textAlign :'center' ,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default ProductList;