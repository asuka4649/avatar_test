import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function WorkoutPageExercise({ navigation }) {
    const [activeTab, setActiveTab] = useState("Exercise"); // State for active tab

    return (
        <View style={styles.container}>
            {/* Header Image */}
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>
                    <Ionicons name="share-outline" size={24} color="white" />
                </TouchableOpacity>

                <ImageBackground style={styles.headerImage}>
                    <View style={styles.overlay}>
                        <Text style={styles.title}>POWER PUSH</Text>
                        <View style={styles.infoRow}>
                            <Image
                                source={require("../../assets/img/group3.png")}
                                style={styles.iconImage}
                            />
                            <Text style={styles.infoText}>10 Min Beginner</Text>
                            <Image
                                source={require("../../assets/img/vector.png")}
                                style={styles.iconImage}
                            />
                            <Text style={styles.infoText}>550 Cals</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* Content */}
            <ScrollView style={styles.contentContainer}>
                <Text style={styles.description}>
                    Level up with push-ups. Master your form, boost strength, and break limits.
                </Text>
                <Text style={styles.equipmentText}>Equipment: None</Text>

                {/* Tabs */}
                <View style={styles.tabsContainer}>
                    {["Exercise", "Reviews", "Rewards"].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={activeTab === tab ? styles.activeTab : styles.inactiveTab}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={activeTab === tab ? styles.activeTabText : styles.inactiveTabText}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Conditional Rendering Based on Active Tab */}
                {activeTab === "Exercise" && (
                    <View>
                        {/* Exercise List */}
                        {[1, 2].map((item) => (
                            <View key={item} style={styles.exerciseCard}>
                                <View style={styles.exerciseRow}>
                                    {/* Exercise Image */}
                                    <Image
                                        source={require("../../assets/img/frame.png")}
                                        style={styles.profileImage}
                                    />
                                    {/* Exercise Details */}
                                    <View style={styles.exerciseDetails}>
                                        <Text style={styles.exerciseTitle}>Warm Up - Back</Text>
                                        <Text style={styles.exerciseReps}>2 reps</Text>
                                    </View>
                                    <View>
                                        {/* Exercise Time */}
                                        <Text style={styles.exerciseTime}>1m 45s</Text>
                                        {/* Edit Button */}
                                        <TouchableOpacity>
                                            <Text style={styles.editButton}>Edit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {activeTab === "Reviews" && (
                    <View>
                        {/* Exercise List */}
                        {[1, 2].map((item) => (
                            <View key={item} style={styles.exerciseCard}>
                                <View style={styles.exerciseRow}>
                                    {/* Exercise Image */}
                                    <Image
                                        source={require("../../assets/img/frame.png")}
                                        style={styles.profileImage}
                                    />
                                    {/* Exercise Details */}
                                    <View style={styles.exerciseDetails}>
                                        <Text style={styles.exerciseTitle}>Maxwell</Text>
                                        <Text style={styles.exerciseReps}>Fun! Really enjoy it.</Text>
                                    </View>
                                    <View>
                                        {/* Exercise Time */}
                                        <Text style={styles.exerciseTime}>Rank 307</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}

                {activeTab === "Rewards" && (
                    <View>
                        {/* Exercise List */}
                        {[1, 2].map((item) => (
                            <View key={item} style={styles.exerciseCard}>
                                <View style={styles.exerciseRow}>
                                    {/* Exercise Image */}
                                    <Image
                                        source={require("../../assets/img/frame.png")}
                                        style={styles.profileImage}
                                    />
                                    {/* Exercise Details */}
                                    <View style={styles.exerciseDetails}>
                                        <Text style={styles.exerciseTitle}>On the Stage</Text>
                                    </View>
                                    <View>
                                        {/* Exercise Time */}
                                        <Text style={styles.exerciseTime}>500 coins</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>

            {/* Connect Button */}
            <TouchableOpacity
                style={styles.connectButton}
                onPress={() => navigation.navigate("EditWorkout")}
            >
                <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141E26",
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
    imageContainer: {
        position: "relative",
    },
    backButton: {
        position: "absolute",
        top: 10,
        left: 20,
        borderRadius: 20,
        padding: 5,
    },
    shareButton: {
        position: "absolute",
        top: 10,
        right: 20,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 20,
        padding: 5,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    description: {
        color: "#AAAAAA",
        marginTop: 10,
        fontSize: 14,
    },
    equipmentText: {
        color: "white",
        fontWeight: "bold",
        marginTop: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 10,
        marginBottom: 15,
    },
    activeTab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "#007AFF",
        borderRadius: 10,
    },
    activeTabText: {
        color: "white",
        fontWeight: "bold",
    },
    inactiveTab: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
    },
    inactiveTabText: {
        color: "#AAAAAA",
    },
    exerciseCard: {
        backgroundColor: "#313940",
        borderRadius: 20,
        padding: 10,
        marginTop: 7,
    },
    exerciseRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    exerciseDetails: {
        flex: 1,
        marginLeft: 10,
    },
    exerciseTitle: {
        color: "white",
        fontWeight: "bold",
    },
    exerciseReps: {
        color: "#AAAAAA",
        fontSize: 12,
    },
    exerciseTime: {
        color: "#AAAAAA",
        fontSize: 14,
        marginRight: 10,
        textAlign: "center",
    },
    editButton: {
        color: "#007AFF",
        textAlign: "center",
    },
    placeholderText: {
        color: "#AAAAAA",
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
    },
    connectButton: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 15,
        marginBottom: 30,
    },
    connectButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
