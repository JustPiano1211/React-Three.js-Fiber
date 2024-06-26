import { OrbitControls } from '@react-three/drei';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Header from './layout/header';

const Box = (props) => {
  const meshRef = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1.2, 1.2, 1.2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const App = () => (
  <>
    <Header />
    <Canvas style={{ height: "calc(100vh - 50px)" }}>
      <ambientLight intensity={1} />
      <spotLight position={[20, 20, 20]} angle={0.15} lookAt={[0, 0, 0]} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-20, -20, -20]} decay={0} intensity={Math.PI} />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
      <OrbitControls />
    </Canvas>
  </>
)

export default App;
