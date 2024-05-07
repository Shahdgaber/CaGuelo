import { useState } from "react";
import { View , TextInput , Button , Text , Pressable , StyleSheet } from "react-native";
import { router } from "expo-router";
// import { login } from "../../firebase/auth";

const Login = () => {
	// const [username , setUsername] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [error , setError] = useState('');

	const handleLogin = async () => {
		try {
			const credentials = await login(email , password);
			console.log(`credentials ${credentials}`);
			router.navigate('/TodoPage');
		} catch (error) {
			console.log(`Error ${JSON.stringify(error)}`);
			setError(error);
		}
	};

	return (
		<View style = {{ flex: 1 , flexDirection: 'column' , justifyContent: 'center' , margin: '15'  ,backgroundColor:'#d9ead3'}}>
			{/* <TextInput placeholder = 'Username' value = {username} onChangeText = {setUsername} style = {{ borderWidth: 1 , padding: 10 , marginBottom: 10 }} /> */}
			<TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {{ borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF',}} />
			<TextInput placeholder = 'Password' value = {password} onChangeText = {setPassword} secureTextEntry style = {{ borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF', }} />
			<Button title = 'Login' onPress = {handleLogin} />
			<Pressable onPress = {() => router.replace('/account/register')}>
				<Text style = {{ marginTop: 10 , alignItems:'center' ,}}> register </Text>
			</Pressable>
			<Pressable onPress = {() => router.replace('/account/reset')}>
				<Text style = {{ marginTop: 10 }}> Forgot Password </Text>
			</Pressable>
			<Text> {error.code} </Text>
		</View>
	);
};

export default Login;