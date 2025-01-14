import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-4">Welcome to XFitLive.app</Text>

      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 rounded"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white font-semibold">Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
