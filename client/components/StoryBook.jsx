import React from 'react';
import { useSelector } from 'react-redux';
// import {
//   togglePage,
//   incrementPage,
//   decrementPage,
// } from '../reducers/storyReducer.js';
import { Canvas } from '@react-three/fiber';
import Book from './Book.jsx';
import * as THREE from 'three';

export default function StoryBook() {
  const state = useSelector((state) => state.stories);

  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Book state={state} />
    </Canvas>

    // <div className='flex h-4/5 flex-col justify-center align-center'>
    //   <button
    //     className='btn btn-primary self-end m-1'
    //     onClick={() => dispatch(togglePage(false))}
    //   >
    //     Pick a New Story
    //   </button>
    //   <div className='flex w-full h-full justify-center'>
    //     <div className='card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6'>
    //       <div className='card-body flex justify-center items-center'>
    //         <div>
    //           {state.story ? (
    //             <Page page={state.story[state.currPage]} />
    //           ) : (
    //             'Im loading'
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     <div className='card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6'>
    //       <div className='card-body justify-center items-center'>
    //         <div>
    //           {state.pictures ? (
    //             <Picture picture={state.pictures[state.currPage]} />
    //           ) : (
    //             'Im loading'
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //     <div className='justify-end self-center w-auto'>
    //       <div className='btn-group grid grid-cols-2'>
    //         <button
    //           className='btn btn-primary'
    //           onClick={() => dispatch(decrementPage())}
    //         >
    //           Previous
    //         </button>
    //         <button
    //           className='btn btn-primary'
    //           onClick={() => dispatch(incrementPage())}
    //         >
    //           Next
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

function Page(props) {
  return <p className='w-5/8'>{props.page}</p>;
}

function Picture(props) {
  return <img className='max-w-xs' src={props.picture} />;
}
