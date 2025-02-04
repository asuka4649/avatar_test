import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const workoutData = [
  { id: "1", name: "Warm Up - Wrist", type: "2 reps" },
  { id: "2", name: "Warm Up - Arms", type: "3 reps" },
  { id: "3", name: "5 pushups", type: "2 reps" },
  { id: "4", name: "5 pushups", type: "3 reps" },
  { id: "5", name: "8 pushups", type: "2 reps" },
  { id: "6", name: "AMRAP", type: "2 min" },
  { id: "7", name: "Cheers Voice", type: "starred" },
];

const ButtonMin = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonMinContainer}>
    <Ionicons name="remove-outline" size={15} color="#3b82f6" />
  </TouchableOpacity>
);

const ButtonAdd = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonAddContainer}>
    <Ionicons name="add-outline" size={15} color="white" />
  </TouchableOpacity>
);

export default function EditWorkout({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.name}</Text>
      {item.type === "starred" ? (
        <Ionicons name="star-outline" size={24} color="white" />
      ) : (
        <View style={styles.repsContainer}>
          <ButtonMin onPress={() => console.log("Decrease reps")} />
          <Text style={styles.repsText}>{item.type}</Text>
          <ButtonAdd onPress={() => console.log("Increase reps")} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.headerImage}>
        <View style={styles.overlay}>
          <Text style={styles.title}>POWER PUSH</Text>
          <View style={styles.infoRow}>
            <Image source={require("../../assets/img/group3.png")} style={styles.iconImage} />
            <Text style={styles.infoText}>10 Min Beginner</Text>
            <Image source={require("../../assets/img/vector.png")} style={styles.iconImage} />
            <Text style={styles.infoText}>550 Cals</Text>
          </View>
        </View>
      </ImageBackground>
      <Text style={styles.timer}>1:59</Text>
      <FlatList data={workoutData} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PostWorkoutSelf")}>
          <Text style={styles.buttonComplete}>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1b2d",
  },
  headerImage: {
    height: 200,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: "white",
    marginHorizontal: 5,
    marginRight: 30,
  },
  timer: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1a2c3b",
  },
  itemText: {
    color: "white",
    fontSize: 16,
  },
  repsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  repsText: {
    color: "white",
    marginHorizontal: 5,
  },
  footer: {
    padding: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3b82f6",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonComplete: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  buttonMinContainer: {
    color: "#3b82f6",
    borderRadius: 50,
    padding: 5,
  },
  buttonAddContainer: {
    backgroundColor: "#3b82f6",
    borderRadius: 50,
    padding: 4,
  },
  iconImage: {
    backgroundColor: "#0c1b2d",
  },
  skipText: {
    color: "white",
    fontSize: 16,
    marginBottom: 30,
  },
});
