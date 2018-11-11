import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { View, Text } from '../components';
import { MouseCoords } from './MouseCoords';
import { Counter } from './Counter';

export const UseHooks: React.SFC<RouteComponentProps> = () => {
  return (
    <View>
      <Text type='header'>Use hooks everywhere</Text>
      <MouseCoords />
      <Counter />
    </View>
  );
};
