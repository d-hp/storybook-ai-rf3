import React, { useRef } from 'react';
import { Image, OrbitControls, Text, Html } from '@react-three/drei';
import Model from './Model.jsx';
import { useDispatch } from 'react-redux';
import {
  togglePage,
  incrementPage,
  decrementPage,
} from '../reducers/storyReducer.js';
import PageImage from './PageImage.jsx';
import PageText from './PageText.jsx';

const Book = ({ state }) => {
  const groupRef = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group ref={groupRef}>
        <mesh
          position-z={-2.5}
          scale={0.5}
          onClick={() => dispatch(decrementPage())}
        >
          <octahedronGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>
        <Text fontSize={0.3} color='orange' position-y={1} position-z={-2.5}>
          Previous
        </Text>
        <mesh
          scale={0.5}
          position-z={-2.5}
          position-x={-2}
          onClick={() => dispatch(togglePage(false))}
        >
          <sphereGeometry />
          <meshStandardMaterial color='red' />
        </mesh>
        <Text
          fontSize={0.3}
          color='red'
          position-y={1}
          position-x={-2}
          position-z={-2.5}
        >
          Home
        </Text>
        <mesh
          rotation-y={Math.PI * 0.25}
          position-x={2}
          position-z={-2.5}
          scale={0.7}
          onClick={() => dispatch(incrementPage())}
        >
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
        <Text
          fontSize={0.3}
          color='mediumpurple'
          position-y={1}
          position-x={2}
          position-z={-2.5}
        >
          Next
        </Text>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
      <Model />
      {state.story ? (
        <PageText text={state.story[state.currPage]} />
      ) : (
        <PageText text={'Creating your unique story...'} />
      )}
      {state.pictures ? (
        <PageImage image={state.pictures[state.currPage]} />
      ) : (
        <PageImage image={'./loading.svg'} />
      )}
    </>
  );
};

export default Book;
