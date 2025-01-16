import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Header from "../components/dashboard/Header";

function ForYouPage() {
  return (
    <View>
      <Text>For You Page</Text>

      {/* Card Carousel */}
      {/* Menu */}
      {/* Continue */}
      {/* Follow Your Friends */}

    </View>
  );
}

function ExplorePage() {
  return (
    <View>
      <Text>Explore Page</Text>
    </View>
  );
}

function ChallengesPage() {
  return (
    <View>
      <Text>Challenges Page</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View className="justify-self-stretch items-center justify-center bg-white">
        <Header></Header>

        {/* Navigator */}
        {/* Search */}
        {/* Page */}

      </View>
    </SafeAreaView>
  );
}
