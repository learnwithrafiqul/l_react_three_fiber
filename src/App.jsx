import React from "react";
import { Canvas } from "@react-three/fiber";
import Rounded1 from "./components/Rounded1";
import Floor from "./components/Floor";

const App = () => {
  return (
    <div>
      <Canvas id="three-canvas-container">
        <Rounded1 />
        <Floor />
        <ambientLight />
      </Canvas>
    </div>
  );
};

export default App;
