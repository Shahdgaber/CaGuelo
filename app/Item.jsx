import React , {useState , useEffect }from 'react';
import { StyleSheet, Text, View, Image, Pressable , TouchableOpacity} from 'react-native';
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, getDocs,where , query,collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export default function Item({ name, price, image , quantity ,  productId }) {
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
  
  const toggleFavorite = async (productId) => {
    if (!userId) {
      alert('Please sign in to manage your favorites');
      return;
    }

    if (favorites[productId]) {
      const favoriteSnapshot = await getDocs(collection(db, 'Favorites'));
      const favoriteDoc = favoriteSnapshot.docs.find(
        (doc) => doc.data().productId === productId && doc.data().userId === userId
      );
      if (favoriteDoc) {
        await deleteDoc(favoriteDoc.ref);
        setFavorites((prev) => ({ ...prev, [productId]: false }));
      }
    } else {
      await addDoc(collection(db, 'Favorites'), {
        userId,
        productId,
      });
      setFavorites((prev) => ({ ...prev, [productId]: true }));
    }
  };


  
  return (
    <View style={styles.productItem}>
    <Image source={{ uri : image }} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{name}</Text>
      <Text>{price}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <TouchableOpacity style={styles.quantityButton} onPress={() => removeFromCart(productId)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity style={styles.quantityButton} onPress={() => addToCart(productId)}>
        <Text>+</Text>
      </TouchableOpacity>
      <View style={styles.itemActions}>
        <Pressable onPress={() => toggleFavorite(productId)}>
          <Ionicons
            name="heart-circle-outline"
            size={30}
            color={favorites[productId] ? "#0a4a7c" : 'lightgray'}
          />
        </Pressable>
      </View>
    </View>
  </View>

  //   <View style={styles.item}>
  //     <Pressable onPress={() => router.push(`/pressedItem?productId=${productId}`)}>
  //       <Image source={{ uri: image }} style={styles.image} />
  //     </Pressable>
  //     <View style={styles.infoContainer}>
  //       <Text style={styles.name}>{name}</Text>
  //       <Text style={styles.price}>{price}</Text>
  //     </View>
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    Width : '100%',
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
    // margin: 10,
    // padding: 10,
    borderRadius: 10,
    // elevation: 3,
  },
  productImage: {
    width: '80%',
    height: 160,
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
