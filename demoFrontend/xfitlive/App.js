import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import CameraPermission from "./components/permissions/CameraPermission";
import LocationPermission from "./components/permissions/LocationPermission";
import "./global.css"
import OnboardingScreen from "./screens/OnboardingScreen";
import CalibrationScreen from "./screens/CalibrationScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import WorkoutSummaryScreen from "./screens/WorkoutSummaryScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Calibration" component={CalibrationScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="WorkoutSummary" component={WorkoutSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
