import React from 'react';
import { View, Text, Image, StyleSheet, Pressable,SafeAreaView } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { router } from 'expo-router';

export default function Product() {
  const { name, price, image } = useLocalSearchParams();

  return (
    <View style={styles.container}>
    <SafeAreaView>
    <Image source={{ uri: image }} style={styles.image} />
      <View style={{flex:1,paddingHorizontal:25}}><Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Pressable onPress={() => router.replace('/')}> 
        <Text style={styles.link}>to home</Text>
      </Pressable></View>
    </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    width: '100%', 
    aspectRatio: 1, 
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold', 
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  link: {
    color: 'blue', 
    textDecorationLine: 'underline',
    marginTop: 10, 
  },
});