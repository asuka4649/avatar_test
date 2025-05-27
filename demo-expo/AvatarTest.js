import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

const { width, height } = Dimensions.get('window');

export default function AvatarTest() {
  const requestRef = useRef();

  const onContextCreate = async (gl) => {
    console.log("🟢 GLView created");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor('#eeeeee');

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const loader = new GLTFLoader();

    try {
      console.log("📦 Loading model...");
      const model = await loader.loadAsync(
        'https://raw.githubusercontent.com/xFitLive/react-app/refs/heads/asuka_avatar_testing/BicepTest1.glb?token=GHSAT0AAAAAADAG7SSMWDXL5JUXCZKEJJNY2BUGPMA'
      );
      console.log("✅ Model loaded");

      const avatar = model.scene;
      avatar.scale.set(1.5, 1.5, 1.5); // scale if needed
      scene.add(avatar);

      const mixer = new THREE.AnimationMixer(avatar);
      if (model.animations.length > 0) {
        model.animations.forEach((clip) => mixer.clipAction(clip).play());
        console.log("🎬 Animations started");
      } else {
        console.warn("⚠️ No animations found in model");
      }

      const clock = new THREE.Clock();
      const animate = () => {
        requestRef.current = requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };

      animate();
    } catch (error) {
      console.error("❌ Error loading model:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ position: 'absolute', top: 40, alignSelf: 'center' }}>
        👀 Loading Avatar...
      </Text>
      <GLView style={styles.glview} onContextCreate={onContextCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glview: {
    width: width,
    height: height,
  },
});
