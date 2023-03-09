import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateCharacter,
  updateLocation,
  updateEnding,
  togglePage,
} from '../reducers/storyReducer.js';
import { getStory } from '../reducers/storyReducer.js';

export default function InputCard() {
  const dispatch = useDispatch();

  const characters = [
    'princess',
    'pirate',
    'horse',
    'toad',
    'software engineer',
    'knight',
    'cowboy',
    'girl',
    'boy',
  ];
  const locations = [
    'woods',
    'sea',
    'fields',
    'swamp',
    'job market',
    'jungle',
    'desert',
  ];
  const endings = [
    'peace',
    'an adventure',
    'a community',
    'trouble',
    'happiness',
    'an opportunity',
    'friendship',
    'treasure',
    'wisdom',
    'a magical book',
  ];

  function makeOptList(arr) {
    const output = [
      <option key={'default'} disabled hidden>
        -------
      </option>,
    ];
    for (let i = 0; i < arr.length; i++) {
      output.push(
        <option key={arr[i]} value={arr[i]}>
          {arr[i]}
        </option>
      );
    }
    return output;
  }

  return (
    <div className='flex h-4/5 flex-col justify-center align-center'>
      <div className='card bg-base-100 shadow-2xl self-center align-center w-auto h-auto'>
        <div className='card-body'>
          <div className='p-10'>
            <p className='text-xl'>
              Tell me a story about a
              <select
                type='select'
                onChange={(e) => {
                  dispatch(updateCharacter(e.target.value));
                }}
                className='select-xs ml-3 mr-3 bg-slate-200'
                defaultValue='-------'
              >
                {makeOptList(characters)}
              </select>
              that goes out into the
              <select
                onChange={(e) => {
                  dispatch(updateLocation(e.target.value));
                }}
                className='select-xs ml-3 mr-3 bg-slate-200'
                defaultValue='-------'
              >
                {makeOptList(locations)}
              </select>
              and finds
              <select
                onChange={(e) => {
                  dispatch(updateEnding(e.target.value));
                }}
                className='select-xs ml-3 bg-slate-200'
                defaultValue='-------'
              >
                {makeOptList(endings)}
              </select>
            </p>
          </div>
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(togglePage(true));
              dispatch(getStory());
            }}
          >
            Create Story
          </button>
        </div>
      </div>
    </div>
  );
}
