import React from "react";
import '../global.css'
import { View, Text, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4">Login Screen</Text>

      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 rounded"
        onPress={() => navigation.navigate("Signup")}
      >
        <Text className="text-white font-semibold">Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
