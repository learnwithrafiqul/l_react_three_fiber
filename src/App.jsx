import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'




const App = () => {
  return (
  <Canvas>
    <Suspense fallback={null}>


    </Suspense>
  </Canvas>
  )
}

export default App