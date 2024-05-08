import { Link } from "expo-router";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";

const ProductPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.categoryContainer}>
          <Text style={styles.title}>Choose the category</Text>
          <View style={styles.categoryLinks}>
            <View style={styles.categoryItem}>
              <Link href="/category/forMens" style={styles.link}>
                For Men Category
              </Link>
              <Image
                source={require('../assets/concept-shopping-holidays-lifestyle-excited-guy-pointing-finger-paper-bag-looking-amazed-recommending-store-announcing-discounts-blue-background.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.categoryItem}>
              <Link href="/category/forWomens" style={styles.link}>
                For Women Category
              </Link>
              <Image
                source={require('../assets/young-lady-pink-jacket-smiling-camera.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.categoryItem}>
              <Link href="/category/forChildrens" style={styles.link}>
                For Children Category
              </Link>
              <Image
                source={require('../assets/cheerful-diverse-kids-holding-hands.jpg')}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  categoryLinks: {
    flexDirection: "column", // Changed to column to display items vertically
    alignItems: "center", // Center items horizontally
  },
  categoryItem: {
    marginBottom: 20,
    width: "100%", // Each item occupies full width
    alignItems: "center", // Center items horizontally
  },
  link: {
    fontSize: 30,
    color: "#555",
    fontWeight: "bold", // Make link text bold
    marginTop: 10,
    paddingVertical:8,
    paddingHorizontal:12,
    marginVertical:5,
    marginHorizontal:10
  },
  image: {
    width: "70%", // Ensure the image takes the full width of its container
    height: 400, // Adjust height as needed
    marginBottom: 10,
    borderRadius:10,
    shadowColor:'rgba(0,0,0,0.1)',
    shadowOpacity:0.9,
    shadowRadius:5,
    elevation:5,
  },
});

export default ProductPage;
