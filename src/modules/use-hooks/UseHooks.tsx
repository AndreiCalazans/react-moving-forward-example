import React, { useContext, useEffect } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { View, Text, Tabs } from '../components';
import { UserContext } from '../user';
import { MouseCoords } from './MouseCoords';
import { Counter } from './Counter';
import { ClassesView } from '../classes';

const tabs = [
  {
    name: 'Mouse Coordinates',
    path: 'mouse-coords',
  },
  {
    name: 'Counter',
    path: 'counter',
  },
  {
    name: 'withReducer + useContext classes example',
    path: 'classes',
  },
];

export const UseHooks: React.SFC<RouteComponentProps> = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <View>
      <View>
        <input onChange={(e) => dispatch({ name: e.target.value })}/>
        <Text type='header'>Use hooks everywhere</Text>
        <Text type='body'>Hello {state.name}, click on the different tabs to see implementation options.</Text>
      </View>
      <Tabs tabs={tabs}/>
      <Router>
        <MouseCoords path='/mouse-coords' />
        <Counter path='/counter' />
        <ClassesView path='/classes/*' />
      </Router>
    </View>
  );
};
