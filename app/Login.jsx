import { useState } from "react";
import { View , TextInput , Button , Text , Pressable , StyleSheet   } from "react-native";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
// import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [error , setError] = useState('');

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
		<View style = {styles.container}>
        <Text style={styles.title} >Login</Text>
			<TextInput 
        placeholder = 'Email' 
        value = {email} 
        onChangeText = {setEmail} 
        style={styles.TextInput} 
      />
			<TextInput 
        placeholder = 'Password' 
        value = {password} 
        onChangeText = {setPassword} 
        secureTextEntry 
        style={styles.TextInput} 
      />
      <Pressable onPress = {handleLogin} style={styles.button}>
				<Text style={styles.buttonText} > Login </Text>
			</Pressable>
			{/* <Button 
        title = 'Login' 
        onPress = {handleLogin} 
        style={styles.button} 
      /> */}
			<Pressable onPress = {() => router.replace('/Register')}>
				<Text style = {styles.link}>Don't have account ? Register</Text>
			</Pressable>
			<Pressable onPress = {() => router.replace('/ForgetPassword')}>
				<Text style = {styles.link}>Forgot Password</Text>
			</Pressable>

			<Text> {error.code} </Text>
      
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
  container : {
    flex: 1 , 
    flexDirection: 'column' , 
    justifyContent: 'center' , 
    margin: '10'  ,
    backgroundColor:'#d9ead3'
  },
  TextInput : {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '80%',
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignSelf : 'center',
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
  Text :{
    marginTop: 10 , 
    textAlign:'center',
  },
  title : {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1BB7DB',
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    color: '#1BB7DB',
    textDecorationLine: 'underline',
    textAlign: 'center',
},
});
