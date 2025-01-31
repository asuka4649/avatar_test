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

export default function WorkoutLibrary({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.challengeContainer}>
          <Text style={styles.challengeText}>
            <Image
              source={require("../../assets/img/vector-challenge.png")}
              style={styles.vector}
            />{" "}
            CHALLENGES
          </Text>
          <Text style={styles.challengeText}>1h ago</Text>
        </View>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>New Challenger</Text>
          <Text style={styles.newBadge}>
            <Image
              source={require("../../assets/img/vector-new-challenge.png")}
              style={styles.vectorChallenge}
            />
          </Text>
        </View>
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingText}>Good Morning,</Text>
            <Text style={styles.userName}>Jessica</Text>
          </View>
          <Image
            source={require("../../assets/img/profile.png")}
            style={styles.profileImage}
          />
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>For You</Text>
        <Text style={styles.tabText}>Explore</Text>
        <Text style={[styles.tabText, styles.selectedTabText]}>Challenges</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
        <Ionicons name="mic-outline" size={20} color="#aaa" />
      </View>

      <ScrollView>
        <View style={styles.challengeCard}>
          <ImageBackground
            source={require("../../assets/img/portrait-exercise.png")}
            style={styles.challengeImage}
          >
            <View style={styles.participants}>
              <Ionicons name="people-outline" size={16} color="#A6C9FF" />
              <Text style={styles.participantsText}>103</Text>
            </View>
            <View style={styles.challengeDetails}>
              <Text style={styles.challengeTitle}>POWER PUSH</Text>
              <Text style={styles.challengeInfo}>⏱ 10 min beginner</Text>
              <Text style={styles.challengeInfo}>⏳ Deadline Dec 20th</Text>
              <View style={styles.buttonsRow}>
                <TouchableOpacity style={styles.beginButton} onPress={() => navigation.navigate("PostWorkoutSelfBegin")}>
                  <Text style={styles.beginButtonText}>Begin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveButton}>
                  <Ionicons name="heart-outline" size={16} color="#000" />
                  <Text style={styles.saveButtonText}>Save</Text>
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
    backgroundColor: "#141E26",
    // padding: 20,
  },
  header: {
    backgroundColor: "#111",
    padding: 15,
  },
  challengeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1d1d1d",
    padding: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1d1d1d",
    padding: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    marginBottom: 10,
  },
  challengeText: {
    color: "#aaa",
    fontSize: 10,
  },
  notificationText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  newBadge: {
    color: "white",
    padding: 3,
    borderRadius: 10,
    fontSize: 12,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingBottom: 5,
  },
  greetingText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    paddingTop: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: "auto",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tabText: {
    color: "#aaa",
    fontSize: 16,
    fontWeight: "normal",
  },
  selectedTabText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    margin: 15,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
  },
  challengeCard: {
    backgroundColor: "#1d1d1d",
    borderRadius: 10,
    overflow: "hidden",
    padding: 15,
  },
  challengeImage: {
    width: "100%",
    height: 430,
    justifyContent: "flex-end",
  },
  vector: {
    alignItems: "center",
  },
  vectorChallenge: {
    // width: 15
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
    marginTop: 30,
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
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 10,
  },
  saveButtonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },
});
