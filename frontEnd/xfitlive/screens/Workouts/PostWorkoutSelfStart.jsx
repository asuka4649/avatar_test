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

export default function PostWorkoutSelfStart({ navigation }) {
  return (
    <View style={styles.container}> 
      <TouchableOpacity onPress={() => navigation.navigate("WorkoutPageExcercise")}>
        <ScrollView>
          <View>
            <View style={styles.challengeDetails}>
              <Text style={styles.challengeTitle}>POWER PUSH</Text>
              <Text style={styles.content}>
                Level up with push-ups. Master your form, boost strength, and
                break limits. Unlock power one rep at a time.
              </Text>
              <Text style={styles.challengeInfo}>⏱ 10 min beginner</Text>
              <Text style={styles.challengeInfo}>⏳ Deadline Dec 20th</Text>
              <Text style={styles.challengeInfo}>⚡ 1000 Experience Points</Text>
              <View style={styles.buttonsRow}>
                <TouchableOpacity
                  style={styles.beginButton}
                  onPress={() => navigation.navigate("WorkoutLibraryPadding")}
                >
                  <Text style={styles.beginButtonText}>Begin</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ImageBackground
              source={require("../../assets/img/portrait-start.png")}
              style={styles.challengeImage}
            ></ImageBackground>
          </View>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  challengeImage: {
    width: "100%",
    height: 450,
    justifyContent: "flex-end",
  },
  content: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "400",
    margin: 50,
    marginTop: 10,
    marginBottom: 30,
  },
  challengeDetails: {
    padding: 15,
    paddingTop: 60,
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
});
