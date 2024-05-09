import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,SafeAreaView,FlatList,Pressable,TextInput,Animated, ScrollView,} from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db } from '../../../firebase/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useLocalSearchParams, router } from 'expo-router';
import Item from '../../Item';

export default function Home() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const animatedValue = new Animated.Value(0); 
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('productData');
        const parsedData = storedData ? JSON.parse(storedData) : [];

        const querySnapshot = await getDocs(collection(db, 'products'));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());

        if (parsedData.length !== fetchedData.length) {
          await AsyncStorage.setItem('productData', JSON.stringify(fetchedData));
        }

        setData(fetchedData);
        setFilteredData(fetchedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filterResults);
  }, [searchTerm, data]);



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View style={styles.itemContainer}>
            <Item
              name={item.name}
              price={item.price}
              image={item.image}
              />
          </Animated.View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products found</Text>
        }
        />
    </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Added padding to move content below the status bar
    paddingHorizontal: 20,
    paddingRight : 15,
    backgroundColor: '#F0F0F0', // A soft gray background for a light and clean look
  },
  signOutButton: {
    backgroundColor: '#FF6347', // A vibrant red for visibility
    padding: 12, // Added padding for a more substantial button
    borderRadius: 10, // Rounded corners for style
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Increased margin for spacing
  },
  signOutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold', // Added font weight for emphasis
    color: '#333', // Darker text for contrast
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // White background for clarity
    borderRadius: 10, // Rounded corners for a soft appearance
    padding: 15, // Generous padding for comfort
    shadowColor: '#000', // Adding shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Required for shadows on Android
    marginBottom: 20, // Spacing between the search bar and the list
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    borderRadius: 10, // Matching the outer container's corners
    borderColor: '#D1D5DB', // Light gray border
    borderWidth: 1,
    padding: 10, // Comfortable padding for text input
    backgroundColor: 'white',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF', // White background for item container
    padding: 15, // Sufficient padding for comfort
    borderRadius: 10, // Rounded corners for style
    shadowColor: '#000', // Shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Required for shadows on Android
    marginBottom: 15, // Spacing between items
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666', // A subtle gray for the empty text
  },
});
