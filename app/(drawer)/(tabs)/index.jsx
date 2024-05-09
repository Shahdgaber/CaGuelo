import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,SafeAreaView,FlatList,Pressable,TextInput,Animated,Dimensions , ScrollView , SectionList } from 'react-native';
import { addDoc, getDocs,where , query,collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Item from '../../Item';
import { useRouter , Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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

  // useEffect(() => {
  //   const filteredResults = data.filter((item) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filteredResults);
  // }, [searchTerm, data]);

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

  // const toggleFavorite = async (productId) => {
  //   if (!userId) {
  //     alert('Please sign in to manage your favorites');
  //     return;
  //   }

  //   if (favorites[productId]) {
  //     const favoriteSnapshot = await getDocs(collection(db, 'Favorites'));
  //     const favoriteDoc = favoriteSnapshot.docs.find(
  //       (doc) => doc.data().productId === productId && doc.data().userId === userId
  //     );
  //     if (favoriteDoc) {
  //       await deleteDoc(favoriteDoc.ref);
  //       setFavorites((prev) => ({ ...prev, [productId]: false }));
  //     }
  //   } else {
  //     await addDoc(collection(db, 'Favorites'), {
  //       userId,
  //       productId,
  //     });
  //     setFavorites((prev) => ({ ...prev, [productId]: true }));
  //   }
  // };


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
        {/* <View style={styles.header}> */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        {/* </View> */}
          <FlatList
            data={data}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            // horizontal={true}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
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
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeContainer: {
    padding: 20,
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items on the left
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666',
    alignSelf: 'center',
  },
  cardButton: {
    marginLeft: 10,
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