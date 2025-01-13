import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Audio from 'expo-av';

export default function MicrophonePermission() {
  const [microphonePermission, setMicrophonePermission] = useState(null);

  const requestMicrophonePermission = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    setMicrophonePermission(status === 'granted');
    if (status !== 'granted') {
      alert('Microphone permission is required for audio recording.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.permissionText}>
        Microphone Permission: {microphonePermission ? 'Granted' : 'Denied'}
      </Text>
      <Button title="Request Microphone Permission" onPress={requestMicrophonePermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  permissionText: {
    marginBottom: 10,
    fontSize: 18,
  },
});

