import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { firebase } from '../config'
import { useNavigation } from '@react-navigation/native'
import m from "../assets/mobility-pana.png"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setfullName] = useState('')
    const navigation = useNavigation();

  const registerUser = async (email, password, fullName) => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                firebase.auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: 'https://e-scooter-41f97.firebaseapp.com',
                })
                .then(() => {
                    alert('Email sent')
                }).catch((error) => {
                    alert(error.message)
                })
                    .then(() => {
                        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                            fullName,
                            email,
                        })
                    }).catch((error) => {
                        alert(error.message)
                    })
            })
            .catch((error => {
                alert(error.message)
            }))

    }

    return (
        <ScrollView
            style={styles.scrollView}
        >
        <View style={styles.container}>
            <Image
                source={m}
                style={{
                    width: 350,
                    height: 350,
                }}
            />
     
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#aaaaaa"
                onChangeText={(fullName) => setfullName(fullName)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                onChangeText={(email) => setEmail(email)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity
                onPress={() => registerUser(email, password, fullName)}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>Register</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already got an account? <Text onPress={() => navigation.navigate('Login')} style={styles.footerLink}>Log in</Text></Text>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: 300,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F0F0F0',
        marginBottom: 10,
        padding: 15,
    },
    button: {
        backgroundColor: '#112B54',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'black'
    },
    footerLink: {

        color: "#112B54",
        fontWeight: "bold",
        fontSize: 16,
        shadowColor: '#000',
        elevation: 50,
    },
    scrollView: {
        backgroundColor: '#fff',
    },

})

export default Register