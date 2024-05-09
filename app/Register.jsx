import React, { useState } from 'react';
import { View , TextInput, Button, Text, Pressable , StyleSheet , Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { auth , db } from '../firebase/firebase';

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePress = async () => {
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userId = user.uid;

      const userData = {
        name : username,
        email: email,
        password: password,
        userId: userId,
      };
      await addDoc(collection(db, 'users'), userData);
      router.navigate('index');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message); // Store the error message
    }
  };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                placeholder='Username'
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <TextInput
                placeholder='Confirm Password'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />

            <Pressable onPress = {handlePress} style={styles.button}>
				<Text style={styles.buttonText} > Register </Text>
			</Pressable> 

            {/* <Button
                title='Register'
                onPress={handlePress}
                color="#1BB7DB"
            /> */}
            <Pressable onPress={() => router.navigate('../Login')}>
                <Text style={styles.link}>Already have an account? Login</Text>
            </Pressable>
            {error ? <Text style={styles.error}>{error.code}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#d9ead3',
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1BB7DB',
        textAlign : 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    link: {
        marginTop: 20,
        color: '#1BB7DB',
        textDecorationLine: 'underline',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    button : {
        padding: 10,
        backgroundColor: "#1BB7DB",
        borderRadius: 5,
        borderRadius : 12 ,
        width : '60%',    
        alignSelf : 'center',
      },
      buttonText : {
          textAlign :'center' ,
      },
});


export default Register;