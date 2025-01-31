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

export default function WorkoutLibraryPadding () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>CHALLENGES</Text>
          <Text style={styles.newBadge}>New</Text>
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good Morning,</Text>
          <Text style={styles.userName}>Jessica</Text>
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
                <TouchableOpacity style={styles.beginButton}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  header: {
    marginTop: 20,
  },
  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1d1d1d",
    padding: 10,
    borderRadius: 8,
  },
  notificationText: {
    color: "#fff",
    fontSize: 12,
  },
  newBadge: {
    backgroundColor: "red",
    color: "white",
    padding: 3,
    borderRadius: 10,
    fontSize: 12,
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  greetingText: {
    color: "#aaa",
    fontSize: 14,
  },
  userName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
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
    color: "#A6C9FF",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#1d1d1d",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
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
    marginTop: 20,
  },
  challengeImage: {
    width: "100%",
    height: 470,
    justifyContent: "flex-end",
  },
  participants: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 5,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: "flex-end",
    margin: 10,
    // top: 10
  },
  participantsText: {
    color: "#A6C9FF",
    fontSize: 14,
    marginLeft: 5,
  },
  challengeDetails: {
    padding: 15,
    backgroundColor: "#0E0E0E"
  },
  challengeTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  challengeInfo: {
    color: "#fff",
    fontSize: 14,
    margin: 5,
    textAlign: "center"
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
    borderRadius: 10,
  },
  beginButtonText: {
    color: "white",
    fontSize: 16
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  saveButtonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 5,
  },
});


