import React, { useState } from "react";
import { View, TextInput, Button, Text, Pressable, StyleSheet } from "react-native";
import { Firebase_Auth } from "../firebase ";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const auth = Firebase_Auth;

    const handlePress = async () => {
        try {
            // Create user with email and password using Firebase authentication
            await auth.createUserWithEmailAndPassword(email, password);
            // Set registration success to true
            setRegistrationSuccess(true);
            // Clear email and password fields
            setEmail('');
            setPassword('');
        } catch (error) {
            // Handle registration errors
            setError(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            {registrationSuccess ? (
                <Text style={styles.successMessage}>Registration successful! You can now login.</Text>
            ) : (
                <>
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
                    <Button
                        title='Register'
                        onPress={handlePress}
                        color="#1BB7DB"
                    />
                    <Pressable onPress={() => setRegistrationSuccess(true)}>
                        <Text style={styles.link}>Already have an account? Login</Text>
                    </Pressable>
                    {error ? <Text style={styles.error}>{error}</Text> : null}
                </>
            )}
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1BB7DB',
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
    successMessage: {
        fontSize: 18,
        color: 'green',
        marginBottom: 20,
    },
});

export default Register;
