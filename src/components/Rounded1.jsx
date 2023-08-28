import React from 'react'

const Rounded1 = () => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
}

export default Rounded1