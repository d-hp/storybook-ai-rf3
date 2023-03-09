import React from 'react';
import ListItem from './ListItem.jsx';
import {
  defaultStories,
  defaultPictures,
} from '../defaultStories/defaultStories';

export default function SideDrawer() {
  const storyThemeComponents = [];

  for (const key in defaultStories) {
    storyThemeComponents.push(
      <ListItem
        key={key}
        name={key}
        storyObj={defaultStories[key]}
        pictureObj={defaultPictures[key]}
      />
    );
  }

  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer' className='drawer-overlay' />
      <ul className='menu p-4 w-80 bg-base-100 text-base-content'>
        <p>Stories</p>
        {storyThemeComponents}
      </ul>
    </div>
  );
}
