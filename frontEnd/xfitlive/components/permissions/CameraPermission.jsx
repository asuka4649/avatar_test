import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraPermission() {
  const [cameraPermission, setCameraPermission] = useState(null);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(status === 'granted');
    if (status !== 'granted') {
      alert('Camera permission is required to use the camera.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.permissionText}>
        Camera Permission: {cameraPermission ? 'Granted' : 'Denied'}
      </Text>
      <Button title="Request Camera Permission" onPress={requestCameraPermission} />
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
