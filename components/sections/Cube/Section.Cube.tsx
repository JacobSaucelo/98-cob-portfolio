"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import {
  EffectComposer,
  OrbitControls,
  OutputPass,
  RenderPixelatedPass,
} from "three/examples/jsm/Addons.js";

const SectionCube = () => {
  const [errorModel, setErrorModel] = useState<boolean>(false);
  const refContainer = useRef(null);

  useEffect(() => {
    handleCube(230, 230);
  }, []);

  const handleCube = (width: Number, height: Number) => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
      Number(width) / Number(height),
      0.4,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(Number(width), Number(height));
    renderer.setClearColor(0xffffff, 0);
    // renderer.setSize(window.innerWidth, window.innerHeight);

    refContainer.current &&
      // @ts-ignore "appendChild"
      refContainer.current.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    const renderPixelatedPass = new RenderPixelatedPass(4, scene, camera);
    composer.addPass(renderPixelatedPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxZoom = 2;

    const loader = new THREE.TextureLoader();
    const texture = pixelTexture(loader.load("/texture2.png"));

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      composer.render();
    }

    // katamad hahahha kaya any
    function pixelTexture(texture: any) {
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    }

    if (WebGL.isWebGLAvailable()) {
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      setErrorModel(true);
      // document.getElementById("container").appendChild(warning);
    }
  };

  if (errorModel) return "";

  return (
    <section
      style={{
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div ref={refContainer} style={{ border: "1px solid red" }}></div>
    </section>
  );
};

export default SectionCube;
