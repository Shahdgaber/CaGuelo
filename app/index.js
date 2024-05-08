import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native"; // Import TextInput and TouchableOpacity for the search bar and button
import { StyleSheet } from "react-native";
import React from "react";

const HomePage = () => {
  const handleSearch = () => {
    // Add functionality to handle search button press
    console.log("Search button pressed");
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Your App Logo</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          // Add any additional props or event handlers for search functionality
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navLinks}>
        <Link href="/products" style={styles.link}>
          Products
        </Link>
        <Link href="/cart" style={styles.link}>
          Cart
        </Link>
        <Link href="./account/register" style={styles.link}>
          Register
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flex: 2,
    flexDirection: "row", // Adjust the flex value to allocate space for the search bar and button
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchButton: {
    marginLeft: 10,
    marginRight:100, // Adjust spacing between search input and button
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1BB7DB", // Example color for the button
    borderRadius: 5,
    
  },
  searchButtonText: {
    fontSize: 16,
    color: "#fff",
    
  },
  navLinks: {
    flexDirection: "row",
  },
  link: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#555",
  },
});

export default HomePage;
