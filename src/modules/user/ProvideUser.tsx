import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

// Minimalistic implementation of shared state using useState

const initialState = {
  name: 'Dude',
};

const mockedDispatch = (_: typeof initialState) => {
  return;
};

const initialiser = {
  state: initialState,
  // only neccesary so we can have correct type assertion.
  dispatch: mockedDispatch,
};

export const UserContext = createContext(initialiser);

export const UserContextProvider: React.SFC<{}> = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const UserContextConsumer = UserContext.Consumer;
