
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartScreen from '../categories/CartScreen';


const cart = () => {
  return (
    <View style={styles.container}>
      <CartScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default cart;
