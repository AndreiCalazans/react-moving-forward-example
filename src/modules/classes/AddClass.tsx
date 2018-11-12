import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { View, Text } from '../components';
import { ClassesContext, Class } from './ProvideClasses';

// make this a modal route render on top
export const AddClass: React.SFC<RouteComponentProps> = () => {
  const classState = useContext(ClassesContext);

  return (
    <View customStyles={{ backgroundColor: 'lightgreen' }}>
      <Text type='title'>Add a class</Text>
    </View>
  );
};
