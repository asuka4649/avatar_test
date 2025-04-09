import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SignupScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-200">
      <Text className="text-2xl font-bold mb-4">Signup Screen</Text>

      <TouchableOpacity
        className="bg-green-500 px-4 py-2 rounded"
        onPress={() => navigation.navigate("Home")}
      >
        <Text className="text-white font-semibold">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
