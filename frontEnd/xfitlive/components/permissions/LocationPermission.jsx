import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationPermission() {
  const [locationPermission, setLocationPermission] = useState(null);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationPermission(status === 'granted');
    if (status !== 'granted') {
      alert('Location permission is required to access your location.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.permissionText}>
        Location Permission: {locationPermission ? 'Granted' : 'Denied'}
      </Text>
      <Button title="Request Location Permission" onPress={requestLocationPermission} />
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
