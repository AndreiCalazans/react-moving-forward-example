import React, { useState, SFC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { View } from '../components';

export const Counter: SFC<RouteComponentProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <h3>Counter</h3>
      <p>Counter: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
      </div>
    </View>
  );
};
