import React, { useEffect, useState } from 'react';
import MapView, {
    Marker, Polyline,
    PROVIDER_GOOGLE, Circle,
} from 'react-native-maps';
import { StyleSheet, View, Button } from 'react-native';
import * as Location from 'expo-location';
import a from "../assets/marker.png"
import view from "../assets/view.png"
import MapViewDirections from "react-native-maps-directions"
import { GOOGLE_MAPS_KEY } from "@env"


export default function App() {
    const [region, setRegion] = useState({
        latitude: 32.29939,
        longitude: -9.23718,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });

        // console.log(location.
        //     coords.latitude,
        //     location.coords.longitude);
    }

    useEffect(() => {
        userLocation();
    }, []);


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
                provider={PROVIDER_GOOGLE}

            >
                <Marker
                    draggable
                    coordinate={region}
                    onDragEnd={(direction) => setRegion(direction.nativeEvent.coordinate)}
                    title="You"
                    description="You"
                    image={view}
                />
                <Marker
                    coordinate={{
                        latitude: 32.29939,
                        longitude: -9.23718,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Marker
                    coordinate={{
                        latitude: 32.291482,
                        longitude: -9.239221,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Marker
                    coordinate={{
                        latitude: 32.296517,
                        longitude: -9.231849,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Marker
                    coordinate={{
                        latitude: 32.292371,
                        longitude: -9.219993,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Marker
                    coordinate={{
                        latitude: 32.290849,
                        longitude: -9.229166,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Marker
                    coordinate={{
                        latitude: 32.300203,
                        longitude: -9.228323,
                    }}
                    title="Scooter"
                    description="Scooter"
                    image={a}
                />
                <Circle
                    center={region}
                    radius={100}
                    fillColor="rgba(255,0,0,0.5)"
                    strokeColor="rgba(255,0,0,0.5)"
                />
                <MapViewDirections
                    origin={region}
                    destination={{
                        latitude: 32.29939,
                        longitude: -9.23718,
                    }}
                    apikey={GOOGLE_MAPS_KEY}
                />

                {/* <AnimatedRegion
                    coordinate={region}
                    duration={1000}
                    
                /> */}
                <Polyline
                    coordinates={[region,
                        {
                            latitude: 32.29939,
                            longitude: -9.23718,
                        },
                    ]}

                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={2}
                />
            </MapView>
            <Button title="Get Location" onPress={userLocation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

