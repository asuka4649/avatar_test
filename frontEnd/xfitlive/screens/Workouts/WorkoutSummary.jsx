    import React, {useState} from "react";
    import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    } from "react-native";
    import { ProgressBar } from "react-native-paper";

    export default function PostWorkoutScreen( ) {
    const [showLevelScreen, setShowLevelScreen] = useState(false);
    const earnedCoins = 100; // Coins earned after the workout
    const progress = 0.6; // Progress value (60%)
    const exp = 2500;
    const dailyChallenges = [
        { title: "Send one challenge", exp: 2500, progress: 1 },
        { title: "Complete one Workout", exp: 1000, progress: 0.5 },
      ];
      
      const weeklyChallenges = [
        { title: "Complete one Endurance Workout", exp: 2500, progress: 1 },
        { title: "Complete 12 dailies", exp: 5000, progress: 0.4 },
      ];
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.overlay}>
            <View style={{ alignItems: "center", width: "100%" }}>
            {/* Title Text */}
            <Text style={styles.titleText}>
            Rewards
            </Text>
            <View style={styles.rewardContainer}>
            {/* Earned Coins */}
            <Text style={styles.coinText}>
            {earnedCoins} Tokens Earned
            </Text>
            {/* Coin Image */}
            <View style={styles.coinContainer}>
            <Image source={require("../../assets/img/coin.jpg")} style={styles.coinImage}/>
            </View>
            <Text style={styles.rewardText}>
            {progress * 10} more tokens until the next tier
            </Text>
        </View>
    </View>

        {showLevelScreen && (
            <View style={{ alignItems: "center", width: "100%" }}>
            <Text style={styles.titleText}>Level 251</Text>
            <View style={styles.progressBarBg}>
            <ProgressBar progress={0.45} color="#4285F4" style={styles.expBar} />
            </View>
            <Text style={styles.levelInfoText}>11750/26750 to next level</Text>
            {/* Finish Button */}
                <TouchableOpacity
                style={styles.button}
                onPress={() => setShowLevelScreen(false)}>
                <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
            </View>
            
            
        )}
        {!showLevelScreen && (
        <>
        {/* Daily Challenges */}
        <View style={{ width: '100%' }}>
          <Text style={styles.subtitleText}>Daily</Text>
        </View>
        {dailyChallenges.map((challenge, index) => (
          <View key={`daily-${index}`} style={{ width: '100%' }}>
            <Text style={styles.challengeText}>{challenge.title}</Text>
            <Text style={styles.expText}>+ {challenge.exp} EXP</Text>
            <View style={styles.progressBarBg}>
              <ProgressBar
                progress={challenge.progress} color="#4285F4" style={styles.progressBar}/>
            </View>
          </View>
        ))}
        {/* Weekly Challenges */}
        <View style={{ width: '100%', marginTop: 30 }}>
          <Text style={styles.subtitleText}>Weekly</Text>
        </View>
        {weeklyChallenges.map((challenge, index) => (
          <View key={`weekly-${index}`} style={{ width: '100%' }}>
            <Text style={styles.challengeText}>{challenge.title}</Text>
            <Text style={styles.expText}>+ {challenge.exp} EXP</Text>
            <View style={styles.progressBarBg}>
              <ProgressBar progress={challenge.progress} color="#4285F4" style={styles.progressBar}/>
            </View>
          </View>
          
        ))}
                {/* Finish Button */}
                <TouchableOpacity
                style={styles.button}
                onPress={() => setShowLevelScreen(true)}>
                <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
            </>
            )}
            </View>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#141E26",
    },
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-start", 
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#141E26",
    },
    coinContainer: {
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    coinImage: {
        width: 74,
        height: 74,
        borderRadius: 60,
        resizeMode: "cover",
    },
    rewardContainer: {
        borderWidth: 1,              
        borderColor: "#FFD700",      
        padding: 20,                      
        borderRadius: 10,                
        alignItems: "center",             
        width: "90%",                     
        marginBottom: 30,                  
      },
    titleText: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Verdana",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 24,
        marginBottom: 10
    },
    subtitleText: {
        color: "#FFF",
        textAlign: "left",
        fontFamily: "Verdana",
        fontSize: 26,
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: -0.24,
    },
    challengeText: {
        color: "#FFF",
        textAlign: "left",
        marginLeft: 35,
        fontFamily: "Verdana",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: -0.24,
        marginTop: 10
    },
    expText: {
        color: "#74D7FF",
        textAlign: "right",
        marginRight: 35,
        fontFamily: "Verdana",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: 24,
        letterSpacing: -0.24
    },
    coinText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Verdana",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: -0.24,
        marginBottom: 20
    },
    rewardText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Verdana",
        fontSize: 13,
        fontWeight: "400",
        letterSpacing: -0.24,
        marginVertical: 20,
        color: '#74D7FF'
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
        height: 2,
        marginVertical: 10,
        marginLeft: 35,
        marginTop: 10,
        alignItems: "center"
    },
    progressText: {
        fontSize: 16,
        color: "white",
        marginBottom: 60,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 35,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        width: '90%',
    },
    buttonText: {
        color: "white",
        fontWeight: 700,
        fontSize: 16,
        textAlign: "center"
    },
    levelInfoText: {
        color: "#FFF",
        textAlign: "center",
        marginTop: 10,
        fontFamily: "Verdana",
        fontSize: 14,
        marginBottom: 250
},
expBar: {
    width: '100%',
    height: 10,             
    borderRadius: 10,        
    borderWidth: 1,         
    borderColor: '#4285F4',   
    backgroundColor: '#141E26', 
    overflow: 'hidden',         
    marginTop: 20,
    marginBottom: 20
  },
    });
