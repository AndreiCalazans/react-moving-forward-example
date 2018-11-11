import React from 'react';
import { View } from '../components';
import { useMouseMovement } from './useMouseMovement';

export const MouseCoords: React.SFC<{}> = () => {
  const mouseCoords = useMouseMovement();
  return (
    <View>
      <h3>Mouse coordinates</h3>
      <p>The current mouse position is: x: {mouseCoords.x} y: {mouseCoords.y}</p>
    </View>
  );
};
