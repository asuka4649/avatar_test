import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import { Renderer } from 'expo-three';
import { GLTFLoader } from 'three-stdlib';

const { width, height } = Dimensions.get('window');

export default function AvatarTest() {
  const requestRef = useRef();

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: w, drawingBufferHeight: h } = gl;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(w, h);
    renderer.setClearColor('#ffffff');

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const loader = new GLTFLoader();

    const model = await loader.loadAsync(
      // 🔁 Choose one of these two options:
      
      // Option 1: Hosted URL
      'https://raw.githubusercontent.com/xFitLive/react-app/d3b663ae0d620cd24fb07c28aa9201582769ea2c/BicepTest1.glb'

      // Option 2 (if testing locally in dev):
      // require('../assets/models/avatar.glb')
    );

    const avatar = model.scene;
    scene.add(avatar);

    const mixer = new THREE.AnimationMixer(avatar);
    model.animations.forEach((clip) => mixer.clipAction(clip).play());

    const clock = new THREE.Clock();

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      mixer.update(clock.getDelta());
      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    animate();
  };

  return (
    <View style={styles.container}>
      <GLView style={styles.glview} onContextCreate={onContextCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glview: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
