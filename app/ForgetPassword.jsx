import { useState } from 'react';
import { View , TextInput , Button , Text , StyleSheet ,Pressable , Alert } from 'react-native';
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
		<View style = {styles.container}>
			<Text style={styles.title}>Forget Password</Text>
			<TextInput 
			placeholder = 'Email' 
			value = {email} 
			onChangeText = {setEmail} 
			style = {styles.input} 
			/>
			<Pressable onPress = {handleReset} style={styles.button}>
				<Text style={styles.buttonText} > RESET </Text>
			</Pressable>
			{/* <Button title = 'RESET' onPress = {handleReset} style={styles.button} /> */}
			<Pressable onPress = {() => router.replace('/Register')} >
				<Text style={styles.link}>Don't have account ? Register</Text>
			</Pressable>
			<Pressable onPress = {() => router.replace('/Login')}>
				<Text style={styles.link}>Already have an account? Login</Text>
			</Pressable>
			<Text> {error.code} </Text>
		</View>
	);
};


export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
		textAlign: 'center',
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
