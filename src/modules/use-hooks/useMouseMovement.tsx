import { useState, useEffect } from 'react';

type Coords = {
  x: number,
  y: number,
};

const handleMouseMovement = (setCoords: (c: Coords) => void) => (event: any) => {
  setCoords({ x: event.pageX, y: event.pageY });
};

export const useMouseMovement = () => {
  const [mouseCoords, setMouseCoordinate] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = handleMouseMovement(setMouseCoordinate);
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return mouseCoords;
};
