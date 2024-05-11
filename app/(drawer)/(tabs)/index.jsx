import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, SafeAreaView, FlatList, Pressable, TextInput, ScrollView } from 'react-native';
import { addDoc, getDocs, where, query, collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Item from '../../Item';
import { useRouter, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
      setFilteredData(fetchedData);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'products'), (snapshot) => {
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const favoriteQuery = collection(db, 'Favorites');
      const unsubscribe = onSnapshot(favoriteQuery, (snapshot) => {
        const favoritesData = snapshot.docs.reduce((acc, doc) => {
          const data = doc.data();
          if (data.userId === userId) {
            acc[data.productId] = true; 
          }
          return acc;
        }, {});
        setFavorites(favoritesData);
      });

      return () => unsubscribe();
    }
  }, [userId]);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        router.push('/Login');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };


  const handleSearch = (text) => {
    setSearchTerm(text);
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.itemContainer}>
      <Item
        name={item.name}
        price={item.price}
        image={item.image}
        productId={item.id}
      />
    </View>
  );
  
  return (
    <ScrollView style={styles.scrollContainer}>
      <SafeAreaView style={styles.safeContainer}>
        <Pressable onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={30} color="black" />
        </Pressable>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredData}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No Products found</Text>
          }
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderRadius: 10,
    borderColor: "#0a4a7c",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeContainer: {
    padding: 20,
  },
  itemContainer: {
    width: '50%' ,
    borderRadius: 10,
    marginBottom: 15,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
  },
});
