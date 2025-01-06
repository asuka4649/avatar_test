import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useTailwind } from "nativewind";

export default function HomeScreen({ navigation }) {
  const tailwind = useTailwind();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-blue-900">
      <Animated.View
        className="absolute top-0 left-0 right-0 bottom-0 bg-blue-700 opacity-70"
        style={{ opacity: fadeAnim }}
      />
      <Image
        source={require("../assets/logo.png")}
        className="w-40 h-40 mb-6"
        resizeMode="contain"
      />
      <TouchableOpacity
        className="bg-white px-6 py-3 rounded-lg mb-4 shadow-lg hover:bg-gray-300"
        onPress={() => {/* handle navigation or router.push('/login') */}}
      >
        <Text className="text-blue-900 font-bold text-lg">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-gray-300 px-6 py-3 rounded-lg shadow-lg hover:bg-white"
        onPress={() => {/* handle navigation or router.push('/signup') */}}
      >
        <Text className="text-blue-900 font-bold text-lg">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
