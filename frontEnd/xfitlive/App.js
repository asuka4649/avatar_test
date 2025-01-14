import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/loginScreen";
import SignupScreen from "./screens/SignUpScreen";
import CameraPermission from "./components/permissions/CameraPermission";
import LocationPermission from "./components/permissions/LocationPermission";
import "./global.css"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
