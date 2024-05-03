import { useState } from 'react';
import { View , TextInput , Button , Text , Pressable } from 'react-native';
import { router } from 'expo-router';
// import { reset } from '../firebase/auth';

const ForgetPassword = () => {

	const [email , setEmail] = useState('');
	const [error , setError] = useState('');

	const handleReset = async () => {
		try {
            await reset(email);
            console.log('Password Rested Successfully');
            alert('Email for reset password sent successfully');
		} catch (error) {
			console.log(`Error ${JSON.stringify(error)}`);
			setError(error);
		}
	};

	return (
		<View style = {{ flex: 1 , flexDirection: 'column' , justifyContent: 'center' , margin: '15' }}>
			<TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {{ borderWidth: 1 , padding: 10 , marginBottom: 10 }} />
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