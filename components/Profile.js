import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from "../config"

const Dashboard = () => {
    const [name, setName] = useState('')

    //change the password
    const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
            .then(() => alert('Password reset email sent!'))
            .catch(error => alert(error))
    }

    

    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(snapshot => {
                if (!snapshot.exists) {
                    setName(snapshot.data())
                }
                else {
                    console.log('User does not exist')
                }
            })
    }
        , []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>hi 
            {name.fullName ? name : ' Hero '
            }!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => firebase.auth().signOut()}
            >

                <Text style={styles.buttonTitle}>Logout</Text>
            </TouchableOpacity>
<TouchableOpacity
    style={styles.button}
    onPress={() => changePassword()}
    
>
    <Text style={styles.buttonTitle}>Change Password</Text>

</TouchableOpacity>

        </SafeAreaView>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
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
})


export default Dashboard