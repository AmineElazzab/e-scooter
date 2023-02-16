import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { firebase } from "./config";
import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import Header from "./components/Header";

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
              headerTitle: () => <Header name="Login"/>,
              headerStyle: {
                backgroundColor: '#FFB800',
                height: 100,
                // borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor:'#000',
                elevation: 25,
              },
            }}

          />
          <Stack.Screen name="Register" component={Register} 
            options={{
              headerTitle: () => <Header name="Register" />,
              headerStyle: {
                backgroundColor: '#FFB800',
                height: 100,
                // borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                shadowColor:'#000',
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
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} 
          options={{
            headerTitle: () => <Header name="Dashboard" />,
            headerStyle: {
              backgroundColor: '#FFB800',
              height: 100,
              // borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              shadowColor:'#000',
              elevation: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () => {
  return <App />;
}
