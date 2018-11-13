import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { View, Text, Tabs } from '../components';

const tabs = [
  {
    name: 'Hooks Everywhere',
    path: 'hooks-everywhere',
  },
];

export const HomeView: React.SFC<RouteComponentProps> = () => {
  return (
    <View>
      <Text type='header'>Welcome to React Moving Forward</Text>
      <Text type='subHeader'>An example of app of what new patterns will emerge in React 16.7+</Text>
      <Tabs tabs={tabs} />
    </View>
  );
};
