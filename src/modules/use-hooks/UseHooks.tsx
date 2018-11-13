import React, { useContext, useState, useCallback } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { View, Text, Tabs } from '../components';
import { ClassesView } from '../classes';
import { UserContext } from '../user';
import { MouseCoords } from './MouseCoords';
import { Counter } from './Counter';
import { AskName } from './AskName';

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
  const { state } = useContext(UserContext);
  const [isModalVisible, setModalVisibilty] = useState(true);

  return (
    <View>
      <View>
        <Text type='header'>Use hooks everywhere</Text>
        <Text type='body'>Hello {state.name}, click on the different tabs to see implementation options.</Text>
      </View>
      <Tabs tabs={tabs} />
      <Router>
        <MouseCoords path='/mouse-coords' />
        <Counter path='/counter' />
        <ClassesView path='/classes/*' />
      </Router>
      {/* <AskName isVisible={isModalVisible} onHide={useCallback(() => setModalVisibilty(false), [])} /> */}
    </View>
  );
};
