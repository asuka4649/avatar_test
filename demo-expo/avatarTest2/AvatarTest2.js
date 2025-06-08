import React, { useRef, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const { width, height } = Dimensions.get('window');

// 👉 Replace this with your actual raw .glb link:
const AVATAR_URL = 'https://raw.githubusercontent.com/asuka4649/avatar_test/main/avatarTest2/BicepTest1.glb';

export default function AvatarTest2() {
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const onContextCreate = async (gl) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.setClearColor(0xffffff, 1);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(
      AVATAR_URL,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(1, -1, 0); // Move to bottom right corner
        scene.add(model);

        const animate = () => {
          timeoutRef.current = requestAnimationFrame(animate);
          model.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('Failed to load GLB model:', error);
      }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GLView
        style={{ width, height }}
        onContextCreate={onContextCreate}
      />
    </View>
  );
}
