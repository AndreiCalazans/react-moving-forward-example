import React, { useContext, useState } from 'react';
import { isEmpty, sort, last } from 'ramda';
import { RouteComponentProps, Link, Router } from '@reach/router';
import { View, Text, Card, CardList } from '../components';
import { ClassesContext, Class, ClassesContextProvider } from './ProvideClasses';
import { AddClass } from './AddClass';
import { ListOrder, OrderOptions } from './OrderOptions';

const EmptyState: React.SFC<{}> = () => (
  <View>
    <Text type='warning'>Hey mate, sorry but there are no classes = )</Text>
  </View>
);

const sortAsc = (a: Class, b: Class) => a.created.getMilliseconds() - b.created.getMilliseconds();
const sortDes = (a: Class, b: Class) => b.created.getMilliseconds() - a.created.getMilliseconds();

const sortBy = (direction: ListOrder, list: Class[]) => {
  const comparator = direction === ListOrder.Asc ? sortAsc : sortDes;
  return sort(comparator, list);
};

const ClassList: React.SFC<{}> = () => {
  const classState = useContext(ClassesContext);
  const { classes } = classState.state;
  const [selectedListOrder, setListOrder] = useState(ListOrder.Asc);
  const sortedData = sortBy(selectedListOrder, classes);

  if (isEmpty(classes)) {
    return <EmptyState />;
  }

  return (
    <View>
      <OrderOptions setListOrder={setListOrder} selectedListOrder={selectedListOrder} />
      <CardList>
        {sortedData.map((klass, idx) => (
          <Card key={klass.name + idx + 'card'}>
            <img width='100%' src={klass.image} />
            <div style={{ padding: 10 }}>
              <Text type='subHeader'>{klass.name}</Text>
              <Text type='info'>Duration: {klass.duration} minutes</Text>
              <Text type='body'>{new Date(klass.created).toDateString()}</Text>
              <Text type='info'>Credits: {klass.credits}</Text>
            </div>
          </Card>
        ))}
      </CardList>
    </View>
  );
};

export const ClassesView: React.SFC<RouteComponentProps> = () => {
  return (
    <ClassesContextProvider>
      <View>
        <Link to='add-class'>Add class</Link>
        <Text type='title'>Classes available to us</Text>
        <ClassList />
        <Router>
          <AddClass path='add-class' />
        </Router>
      </View>
    </ClassesContextProvider>
  );
};
