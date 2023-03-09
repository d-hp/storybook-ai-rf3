import React from 'react';
import { Text } from '@react-three/drei';

const PageText = ({ text }) => {
  return (
    <>
      <Text
        fontSize={0.1}
        color='black'
        rotation-x={-Math.PI * 0.5}
        rotation-y={Math.PI * 0.05}
        position-y={-0.63}
        position-x={-0.89}
        position-z={0}
        maxWidth={1.5}
        lineHeight={1.25}
        textAlign='center'
      >
        {text}
      </Text>
    </>
  );
};

export default PageText;
