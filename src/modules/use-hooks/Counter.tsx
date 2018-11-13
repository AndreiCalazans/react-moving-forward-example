import React, { useState, SFC, useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';
import { View } from '../components';

export const Counter: SFC<RouteComponentProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <h3>Counter</h3>
      <p>Counter: {count}</p>
      <div>
        <button onClick={useCallback(() => setCount(count + 1), [count])}>Add</button>
        <button onClick={useCallback(() => setCount(count - 1), [count])}>Subtract</button>
      </div>
    </View>
  );
};
