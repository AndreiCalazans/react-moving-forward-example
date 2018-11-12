import React, { useContext } from 'react';
import { isEmpty } from 'ramda';
import { RouteComponentProps, Link, Router } from '@reach/router';
import { View, Text } from '../components';
import { ClassesContext, Class } from './ProvideClasses';
import { AddClass } from './AddClass';

const EmptyState: React.SFC<{}> = () => (
  <View>
    <Text type='warning'>Hey mate, sorry but there are no classes = )</Text>
  </View>
);

const ClassList: React.SFC<{ classes: Class[] }> = () => <Text type='warning'>Missing implementation</Text>;

export const ClassesView: React.SFC<RouteComponentProps> = () => {
  const classState = useContext(ClassesContext);

  return (
    <View>
      <Link to='add-class'>Add class</Link>
      <Text type='info'>See come classes here</Text>
      {isEmpty(classState.state.classes) ? <EmptyState /> : <ClassList classes={classState.state.classes}/>}
      <Router>
        <AddClass path='add-class' />
      </Router>
    </View>
  );
};
