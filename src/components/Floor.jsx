import React from "react";
import { angleToRadians } from "../utils/angle";

const Floor = () => {
  return (
    <>
      <mesh rotation={[angleToRadians(70), 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
};

export default Floor;
