import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { View } from 'react-native';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function AvatarTest2() {
  const animationRef = useRef();

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent

    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    const loader = new GLTFLoader();
    const glbUrl = 'https://raw.githubusercontent.com/xFitLive/react-app/asuka_avatar_testing/test/BicepTest1.glb';

    loader.load(glbUrl, (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.3, 0.3, 0.3);
      model.position.set(1.0, -1.5, 0);
      scene.add(model);

      const mixer = new THREE.AnimationMixer(model);
      if (gltf.animations.length > 0) {
        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
      }

      const clock = new THREE.Clock();
      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };
      animate();
    });
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GLView
        style={{ width: 200, height: 200, position: 'absolute', bottom: 10, right: 10 }}
        onContextCreate={onContextCreate}
      />
    </View>
  );
}
