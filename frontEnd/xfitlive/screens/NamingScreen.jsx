import React from "react";
import { 
View,
Text, 
TextInput, 
TouchableOpacity,
StyleSheet,
SafeAreaView,
Image,
KeyboardAvoidingView, 
TouchableWithoutFeedback, 
Keyboard, 
Platform
} from 'react-native';

export default function NamingScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
                <View style={styles.overlay}>
                <View style={styles.profileContainer}>
                <Image
                source={require("../assets/img/xakari_profile.png")}
                style={styles.profileImage}/>
            </View>
            <Text style={styles.titleText}>
            Hi, my name is Xakari! {"\n"} I am your AI Coach. {"\n"} What is your name?
            </Text>
            <View style={styles.inputRow}>
    <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#ccc"
            style={styles.input}/>
    <TouchableOpacity style={styles.sendContainer}>
    <Image
      source={require("../assets/img/naming_button.png")}
      style={styles.sendImage}/>
    </TouchableOpacity>
    </View>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

    const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "rgb(16,40,89)",
    },
    background: {
        flex: 1,
    },
    profileContainer: {
      marginTop: 125,
      marginBottom: 30,
      alignItems: "center",
      justifyContent: "center",
  },
  profileImage: {
      width: 129,
      height: 132,
      borderRadius: 60,
      resizeMode: "cover",
  },
  sendContainer: {
    alignItems: "center",
    justifyContent: "center",
},
sendImage: {
    width: 40,
    height: 40,
    borderRadius: 60,
    resizeMode: "cover",
},
    overlay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "rgb(16,40,89)",
    },
    titleText: {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Verdana",
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 24,
        letterSpacing: -0.24,
        marginBottom: 125
    },
    inputRow: {
      flexDirection: 'row',      
      alignItems: 'center',        
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0.1)',  
      borderRadius: 25,                        
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginTop: 20,
    },
    input: {
      flex: 1,        
      color: 'white',
      fontSize: 16,
      paddingVertical: 8,
      paddingHorizontal: 10,
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
