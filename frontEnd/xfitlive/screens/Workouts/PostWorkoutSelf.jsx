import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { ProgressBar } from "react-native-paper";

export default function PostWorkoutScreen({ navigation }) {
  const earnedCoins = 100; // Coins earned after the workout
  const progress = 0.6; // Progress value (60%)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("./../../assets/img/samuel.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          {/* Coin Image */}
          <View style={styles.coinContainer}>
            <Image
              source={require("../../assets/img/coin.jpg")}
              style={styles.coinImage}
            />
          </View>

          {/* Earned Coins */}
          <Text style={styles.rewardText}>
            You’ve earned {earnedCoins} coins.
          </Text>
          <Text style={styles.rewardText}>Great job!</Text>

          {/* Progress Bar */}
          <View style={styles.progressBarBg}>
            <ProgressBar
              progress={progress || 0}
              color="#4285F4"
              style={styles.progressBar}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.floor(progress * 100)}/100
          </Text>

          {/* Finish Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  coinContainer: {
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  coinImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "cover",
  },
  rewardText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "SF Pro Display",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24, // Use the same value as fontSize for normal line height
    letterSpacing: -0.24,
  },
  subText: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  progressBarBg: {
    width: "80%",
  },
  progressBar: {
    width: "100%",
    height: 6,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: 60,
  },
  progressText: {
    fontSize: 16,
    color: "white",
    marginBottom: 60,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4285F4",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
