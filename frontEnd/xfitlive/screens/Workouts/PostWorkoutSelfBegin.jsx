import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostWorkoutSelfBegin({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.challengeCard}>
          <ImageBackground
            source={require("../../assets/img/portrait-exercise.png")}
            style={styles.challengeImage}
          >
            <View style={styles.challengeDetails}>
              <Text style={styles.challengeTitle}>POWER PUSH</Text>
              <Text style={styles.challengeInfo}>⏱ 10 min beginner</Text>
              <Text style={styles.challengeInfo}>⏳ Deadline Dec 20th</Text>
              <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.beginButton} onPress={() => navigation.navigate("PostWorkoutSelfStart")}>
                  <Text style={styles.beginButtonText}>Begin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  challengeCard: {
    backgroundColor: "#1d1d1d",
    borderRadius: 10,
    overflow: "hidden",
  },
  challengeImage: {
    width: "100%",
    height: 730,
    justifyContent: "flex-end",
  },
  vector: {
    alignItems: "center",
  },
  participants: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.29)",
    padding: 7,
    position: "absolute", 
    top: 10, 
    right: 10, 
    borderRadius:8
  },
  participantsText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 5,
  },
  challengeDetails: {
    padding: 15,
    backgroundColor: "#0E0E0E",
  },
  challengeTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  challengeInfo: {
    color: "#fff",
    fontSize: 14,
    margin: 5,
    textAlign: "center",
  },
  buttonsRow: {
    flexDirection: "row",
    margin: 30
  },
  beginButton: {
    backgroundColor: "#2980ff",
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  beginButtonText: {
    color: "white",
    fontSize: 16,
  },
});
