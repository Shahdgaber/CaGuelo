import React, { useState } from "react";
import { View, TextInput, Button, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
// import { register } from "../firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePress = async () => {
        try {
            const credentials = await register(email, password);
            console.log(`credentials ${credentials}`);
            router.navigate('/account/login');
        } catch (error) {
            console.log(`Error ${JSON.stringify(error)}`);
            setError(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
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
            <Pressable onPress={() => router.navigate('/account/login')}>
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
});

export default Register;