import React from 'react';
import { Clone, useGLTF } from '@react-three/drei';

const Model = () => {
  const model = useGLTF('./open_book.glb');

  return (
    <>
      <Clone object={model.scene} scale={1.5} position-y={-0.9} />
    </>
  );
};

useGLTF.preload('./open_book.glb');

export default Model;
