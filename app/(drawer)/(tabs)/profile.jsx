import React from "react"; 
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native"; 
import { StyleSheet } from "react-native"; 
import { Link } from "expo-router"; 
 
const windowWidth = Dimensions.get('window').width; 
 
const ProfilePage = () => { 
  return ( 
    <ScrollView contentContainerStyle={styles.container}> 
      <View style={styles.header}> 
        <View style={styles.profileForm}> 
          <Text style={styles.sectionTitle}>Profile Information</Text> 
          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Email:</Text> 
            <TextInput 
              style={styles.input} 
              placeholder="Enter your email" 
              // Add any additional props or event handlers for email input 
            /> 
          </View> 
          <View style={styles.inputContainer}> 
            <Text style={styles.label}>Address:</Text> 
            <TextInput 
              style={styles.input} 
              placeholder="Enter your address" 
              // Add any additional props or event handlers for address input 
            /> 
          </View> 
          <TouchableOpacity style={styles.saveButton}> 
            <Text style={styles.saveButtonText}>Save</Text> 
          </TouchableOpacity> 
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
    flexDirection: "column", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: "#ccc", 
  }, 
  profileForm: { 
    width: "100%", 
    paddingHorizontal: 20, 
  }, 
  sectionTitle: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    color: "#333", 
  }, 
  inputContainer: { 
    marginBottom: 20, 
  }, 
  label: { 
    fontSize: 18, 
    marginBottom: 5, 
  }, 
  input: { 
    height: 40, 
    borderColor: "#ccc", 
    borderWidth: 1, 
    paddingHorizontal: 10, 
    borderRadius: 5, 
  }, 
  saveButton: { 
    backgroundColor: "#1BB7DB", 
    paddingVertical: 10, 
    borderRadius: 5, 
    alignItems: "center", 
  }, 
  saveButtonText: { 
    fontSize: 18, 
    color: "#fff", 
  }, 
  navLinks: { 
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "flex-start", 
    marginTop: 10, 
  }, 
  link: { 
    paddingHorizontal: 11, 
    fontSize: 20, 
    color: "black", 
    marginBottom: 5, 
  }, 
}); 
 
export default ProfilePage;