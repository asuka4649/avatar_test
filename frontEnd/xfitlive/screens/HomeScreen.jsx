import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to XFitLive.App</Text>
      <Text style={styles.subHeader}>Modify the route to your Component element to view</Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Test your Components</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full screen height
    justifyContent: "center", // Centers items vertically
    alignItems: "center", // Centers items horizontally
    backgroundColor: "#ffffff", // Background color white
  },
  heading: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold", // Equivalent to font-bold
    marginBottom: 16, // Equivalent to mb-4
    color: "#0d9488", // Equivalent to text-teal-600
  },
  button: {
    backgroundColor: "#3b82f6", // Equivalent to bg-blue-500
    paddingVertical: 10, // Equivalent to py-2
    paddingHorizontal: 16, // Equivalent to px-4
    borderRadius: 8, // Equivalent to rounded
  },
  buttonText: {
    color: "#ffffff", // Equivalent to text-white
    fontWeight: "600", // Equivalent to font-semibold
  },
  subHeader: {
    color: "#11111", // Equivalent to text-white
    fontWeight: "600", // Equivalent to font-semibold
    marginBottom: 16, // Equivalent to mb-4


  },
});
