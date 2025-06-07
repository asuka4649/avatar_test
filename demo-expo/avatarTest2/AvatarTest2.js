import { Asset } from 'expo-asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Renderer } from 'expo-three';
import { GLView } from 'expo-gl';
import * as THREE from 'three';
import React from 'react';

export default function AvatarTest2() {
  console.log('✅ AvatarTest2 component is mounted'); // Log 1

  const onContextCreate = async (gl) => {
    console.log('🎬 GLView context created'); // Log 2

    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    scene.add(light);

    camera.position.z = 5;

    const modelAsset = Asset.fromModule(require('./BicepTest1.glb'));
    await modelAsset.downloadAsync();

    console.log('📦 Model URI:', modelAsset.uri); // Log 3

    const loader = new GLTFLoader();
    loader.load(
      modelAsset.uri,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, -1, 0);
        scene.add(model);
        console.log('✅ Model loaded and added to scene'); // Log 4

        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.01;
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('❌ Failed to load model:', error); // Log 5
      }
    );
  };

  return <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />;
}
