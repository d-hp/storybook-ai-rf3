import React from 'react';
import { Image } from '@react-three/drei';

const PageImage = ({ image }) => {
  return (
    <>
      <Image
        url={image}
        rotation-x={-Math.PI * 0.5}
        rotation-y={-Math.PI * 0.05}
        position-x={0.89}
        position-y={-0.63}
        maxWidth={1.5}
        scale={1.5}
        textAlign='center'
      />
    </>
  );
};

export default PageImage;
