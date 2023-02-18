import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';



const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (

        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[

                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/1.gif')}
                        resizeMode="contain"
                        style={styles.image}
                    />,
                    title:
                        <Text style={styles.title}>Welcome to E-Scooter</Text>
                    // subtitle:
                    //     'Create an account or login to your account to book a scooter.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/3.gif')}
                        resizeMode="contain"
                        style={styles.image}

                    />,
                    title:
                        <Text style={styles.title}>Find a Scooter</Text>
                    // subtitle: 'Find a scooter to get started.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/4.gif')}
                        resizeMode="contain"
                        style={styles.image}

                    />,
                    title:
                        <Text style={styles.title}>Book a Scooter</Text>
                    // subtitle: 'Book a scooter to get started.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/2.gif')}
                        resizeMode="contain"
                        style={styles.image}
                    />,
                    title:
                        <Text style={styles.title}>Ride a Scooter</Text>


                    // subtitle: 'Ride a scooter to get started.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/parking.gif')}
                        resizeMode="contain"
                        style={styles.image}
                    />,
                    title:
                        <Text style={styles.title}>Return a Scooter</Text>
                    // subtitle: 'Return a scooter to get started.',
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#112B54',
        textAlign: 'center',
        marginTop: 20,
    }
});


