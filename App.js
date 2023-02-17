import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { firebase } from "./config";
import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';



const home = "Home";
const profile = "Profile";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();






function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{
              headerTitle: () => <Header name="Login" />,
              headerStyle: {
                backgroundColor: '#112B54',
                height: 100,
                // borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor: '#000',
                elevation: 25,
              },
            }}

          />
          <Stack.Screen name="Register" component={Register}
            options={{
              headerTitle: () => <Header name="Register" />,
              headerStyle: {
                backgroundColor: '#112B54',
                height: 100,
                // borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor: '#000',
                elevation: 25,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator> */}
      {/* <Stack.Screen name="Dashboard" component={Dashboard}
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              backgroundColor: '#112B54',
              height: 100,
              // borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              shadowColor: '#000',
              elevation: 25,
            },
          }}
        /> */}
      <Tab.Navigator
        initialRouteName="home"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#112B54' }}
        screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === profile) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'white',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name="Home" component={Dashboard}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}


export default () => {
  return <App />;
}
