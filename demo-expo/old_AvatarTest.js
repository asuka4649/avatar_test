import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer, Asset } from 'expo-three';
import {
  PerspectiveCamera,
  Scene,
  AmbientLight,
  DirectionalLight,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Import GLTFLoader
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // For interactivity

// Ensure global THREE is set (sometimes necessary)
import { THREE } from 'expo-three';
global.THREE = global.THREE || THREE;

export default function App() {
  const glViewRef = useRef(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      if (glViewRef.current && !modelLoaded) {
        const gl = await glViewRef.current.startAsync();
        const renderer = new Renderer({ gl });
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const camera = new PerspectiveCamera(
          75,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
          0.1,
          1000
        );
        camera.position.z = 5;

        const scene = new Scene();

        // Add some basic lighting
        const ambientLight = new AmbientLight(0x404040); // soft white light
        scene.add(ambientLight);
        const directionalLight = new DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        // Load the GLB model
        const loader = new GLTFLoader();
        // Replace with YOUR GitHub raw .glb link
        const glbUrl = 'https://raw.githubusercontent.com/xFitLive/react-app/asuka_avatar_testing/test/BicepTest1.glb'; 

        loader.load(
          modelUrl,
          (gltf) => {
            scene.add(gltf.scene);
            // Optional: Adjust model position/scale if needed
            // gltf.scene.scale.set(0.1, 0.1, 0.1); 
            // gltf.scene.position.y = -1;
            setModelLoaded(true); // Indicate that the model has loaded
          },
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
          },
          (error) => {
            console.error('Error loading GLB model:', error);
          }
        );

        // Add OrbitControls for user interaction
        const controls = new OrbitControls(camera, glViewRef.current);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.minDistance = 2;
        controls.maxDistance = 10;
        controls.maxPolarAngle = Math.PI / 2;

        const render = () => {
          requestAnimationFrame(render);
          controls.update(); // Update controls
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        render();
      }
    };

    if (!modelLoaded) { // Only load if not already loaded
      loadModel();
    }

    return () => {
      // Clean up if needed
      // glViewRef.current.destroy(); // Or similar cleanup
    };
  }, [modelLoaded]);

  return (
    <View style={styles.container}>
      <GLView
        ref={glViewRef}
        style={styles.glView}
        onContextCreate={() => {
          // Context is created, but we handle rendering in useEffect
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  glView: {
    width: '100%',
    height: '100%',
  },
});