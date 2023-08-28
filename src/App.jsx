import React from "react";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div>
      <Canvas id="three-canvas-container">
        <ambientLight args={["#ffffff", 1]} />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
