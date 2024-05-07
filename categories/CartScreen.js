import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = ({ goToProducts }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 0 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 0 },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 0 },
  ]);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>{item.name}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Text>+</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
            >
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <Text style={styles.total}>Total: ${getTotalPrice().toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={goToProducts}>
        <Text>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default CartScreen;