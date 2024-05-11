import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase'; // Import your Firebase instance
import ProfileAvatar from '../../profileavatar';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      if (authenticatedUser) {
        try {
          const userId = authenticatedUser.uid;
          const usersRef = collection(db, 'users');
          const userQuery = query(usersRef, where('userId', '==', userId));
          const querySnapshot = await getDocs(userQuery);
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setUser(userData);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error gracefully
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : user ? (
        <View style={styles.profileContainer}>
          <Text style={styles.title}>User Profile</Text>
          <View style={styles.infoContainer}>
            <ProfileAvatar />
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>User ID:</Text>
              <TextInput style={styles.input} value={user.userId} editable={false} />
            </View>
          
          <View style={styles.infoContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Name:</Text>
              <TextInput style={styles.input} value={user.name} editable={false} />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Email:</Text>
              <TextInput style={styles.input} value={user.email} editable={false} />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={[styles.fieldContainer, styles.passwordContainer]}>
              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                secureTextEntry={!showPassword}
                value={user.password}
                editable={false}
              />
              <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Text>No user logged in.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
    marginTop:15,
    alignItems:'center',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:13,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  eyeIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
    padding: 10,
  },
});

export default ProfilePage;
