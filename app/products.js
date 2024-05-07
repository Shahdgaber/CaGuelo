// import { Link } from "expo-router";
// import { View, Text, TextInput, TouchableOpacity } from "react-native"; // Import TextInput and TouchableOpacity for the search bar and button
// import { StyleSheet } from "react-native";
// import React from "react";

// const ProductPage = () => {

//   return (
//     <View style={styles.header}>
//       <View style={styles.logoContainer}>
//         <Text style={styles.logo}>Choose the categore</Text>
//       </View>
//       <View style={styles.navLinks}>
//         <Link href="/category/forMens" style={styles.link}>
//           For Men Categore
//         </Link>
//         <Link href="/category/forWomens" style={styles.link}>
//           For Women Categore
//         </Link>
//         <Link href="/category/forChildrens" style={styles.link}>
//           For Children Categore
//         </Link>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: "#fff",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   logoContainer: {
//     flex: 1,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   navLinks: {
//     flexDirection: "row",
//   },
//   link: {
//     paddingHorizontal: 10,
//     fontSize: 16,
//     color: "#555",
//   },
// });

// export default ProductPage;

import { Link } from "expo-router";
import { View, Text, StyleSheet , ScrollView , ImageBackground , image} from "react-native";
import React from "react";

const ProductPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <ImageBackground
  source={require('../assets/back.jpg')}
  style={styles.backgroundImage}
>

    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Choose the category</Text>
      </View>
      <View style={styles.navLinks}>
        <Link href="/category/forMens" style={styles.link}>
          For Men 
        </Link>
        <Link href="/category/forWomens" style={styles.link}>
          For Women 
        </Link>
        <Link href="/category/forChildrens" style={styles.link}>
          For Children 
        </Link>
      </View>
    </View>
    </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#d9ead3",
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // تغطية الصورة بكامل المساحة
  width:'100%',
  height:'100%',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#ccc",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'Black',
    textAlign: "center", // Center text horizontally
  },
  navLinks: {
    flexDirection: "row",
    flex: 1, // Take remaining space in the header
    justifyContent: "space-around", // Distribute links evenly
    alignItems: "center", // Center items vertically
    color: "blue",
  },
  link: {
    fontSize: 25,
    color: "#555",
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center", // Center text horizontally
    fontWeight: "bold",
  },
});

export default ProductPage;

