
import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const HomePage = () => {
  const handleSearch = () => {
    // Add functionality to handle search button press
    console.log("Search button pressed");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>CajwlOOh</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#d9ead3",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    marginRight: 10,
    
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  searchButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#1BB7DB",
    borderRadius: 5,
  },
  searchButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  navLinks: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  link: {
    paddingHorizontal: 13,
    fontSize: 20,
    color: "Blacl",
  },
});

export default HomePage;

