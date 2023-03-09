import React, { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';

const CustomBook = () => {
  const vertices = 10 * 3;
  const geometryRef = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(vertices * 3);

    for (let i = 0; i < vertices * 3; i += 1) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, [positions]);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach={'attributes-position'}
            count={vertices}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color={'red'} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default CustomBook;
