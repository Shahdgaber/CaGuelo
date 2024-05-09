import { Link } from "expo-router"; 
import { View, Text, StyleSheet , ScrollView , ImageBackground , Dimensions} from "react-native"; 
import React from "react"; 
 
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 
 
const ProductPage = () => { 
  return ( 
    <ScrollView contentContainerStyle={styles.container}> 
      {/* <ImageBackground 
        source={require('../assets/back.jpg')} 
        style={styles.backgroundImage} 
      >  */}
        <View style={styles.header}> 
          {/* <View style={styles.logoContainer}> 
            <Text style={styles.logo}>Choose the category</Text> 
          </View> */} 
          <View style={styles.navLinks}> 
            <Link href="/MensProductList" style={styles.link}> 
               Men  
            </Link> 
            <Link href="/WomenProductList" style={styles.link}> 
               Women  
            </Link> 
            <Link href="/ChildProductList" style={styles.link}> 
               Children  
            </Link> 
          </View> 
        </View> 
      {/* </ImageBackground>  */}
    </ScrollView> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flexGrow: 1, 
    backgroundColor : "#d9ead3" , 
  }, 
  backgroundImage: { 
    width: windowWidth, 
    height: windowHeight, 
    
  }, 
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingVertical: windowHeight * 0.02, 
    paddingHorizontal: windowWidth * 0.05, 
    borderBottomWidth: 0.03 * windowWidth, 
    borderBottomColor: "#ccc", 
  }, 
  logoContainer: { 
    flex: 1, 
  }, 
  logo: { 
    fontSize: windowWidth * 0.05, 
    fontWeight: "bold", 
    color: 'black', 
    textAlign: "center", 
  }, 
  navLinks: { 
    flexDirection: "row", 
    flex: 1, 
    justifyContent: "space-around", 
    alignItems: "center", 
    color: "blue", 
  }, 
  link: { 
    fontSize: windowWidth * 0.04, 
    color: "#555", 
    paddingVertical: windowHeight * 0.015, 
    paddingHorizontal: windowWidth * 0.03, 
    textAlign: "center", 
    fontWeight: "bold", 
  }, 
}); 
 
export default ProductPage;