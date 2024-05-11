import { useState } from 'react';
import { View , TextInput , Button , Text , Pressable , Alert } from 'react-native';
import { router } from 'expo-router';
import { sendPasswordResetEmail } from "firebase/auth";


const ForgetPassword = () => {

	const [email , setEmail] = useState('');
	const [error , setError] = useState('');

	const handleReset =() =>{
    sendPasswordResetEmail(email)
.then(() => {
   Alert.alert('password reset email sent');
})
.catch(error => {
   Alert.alert('Error',error.message);
  });
};

	return (
		<View style = {{ flex: 1 , flexDirection: 'column' , justifyContent: 'center' , margin: '15' , backgroundColor: "#d9ead3"}}>
			<TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {{ borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF', }} />
			<Button title = 'RESET' onPress = {handleReset} />
			<Pressable onPress = {() => router.replace('/account/register')}>
				<Text style = {{ marginTop: 10 }}> register </Text>
			</Pressable>
			<Pressable onPress = {() => router.replace('/account/login')}>
				<Text style = {{ marginTop: 10 }}> Login </Text>
			</Pressable>
			<Text> {error.code} </Text>
		</View>
	);
};

export default ForgetPassword;