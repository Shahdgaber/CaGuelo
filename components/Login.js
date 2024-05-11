import { useState } from "react";
import { View , TextInput , Button , Text , Pressable , StyleSheet  } from "react-native";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
// import { sendPasswordResetEmail } from "firebase/auth";



const Login = () => {
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [error , setError] = useState('');

//   const handleReset =() =>{
//     sendPasswordResetEmail(email)
// .then(() => {
//    Alert.alert('password reset email sent');
// })
// .catch(error => {
//    Alert.alert('Error',error.message);
//   });
// };

	const handleLogin = async () => {
    
			signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
	};

  



	return (
<<<<<<< HEAD
		<View style = {{ flex: 1 , flexDirection: 'column' , justifyContent: 'center' , margin: '15'  ,backgroundColor:'#d9ead3'}}>
			{/* <TextInput placeholder = 'Username' value = {username} onChangeText = {setUsername} style = {{ borderWidth: 1 , padding: 10 , marginBottom: 10 }} /> */}
			<TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {{ borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
=======
		<View style = {{ flex: 1 , flexDirection: 'column' , justifyContent: 'center' , margin: '10'  ,backgroundColor:'#d9ead3'}}>
			{/* <TextInput placeholder = 'Username' value = {username} onChangeText = {setUsername} style = {{ borderWidth: 1 , padding: 10 , marginBottom: 10 }} /> */}
			<TextInput placeholder = 'Email' value = {email} onChangeText = {setEmail} style = {{ borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 15,
>>>>>>> origin/firebase
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF',}} />
			<TextInput placeholder = 'Password' value = {password} onChangeText = {setPassword} secureTextEntry style = {{ borderWidth: 1,
        borderColor: '#ccc',
<<<<<<< HEAD
        paddingVertical: 12,
=======
        paddingVertical: 15,
>>>>>>> origin/firebase
        paddingHorizontal: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#FFF', }} />
<<<<<<< HEAD
			<Button title = 'Login' onPress = {handleLogin} />
=======
			<Button title = 'Login' onPress = {handleLogin}  />


>>>>>>> origin/firebase
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