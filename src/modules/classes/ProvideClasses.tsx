import React, { useReducer, createContext, Dispatch, SetStateAction } from 'react';
import filter from 'ramda/es/filter';
import { ActionGenPayload } from '../../types/actions';
import { mockClasses, mockTeachers } from './mockData';

// Implementation of shared state using useReducer

// Just a shortcut to ActionGenPayload
type A<S, P> = ActionGenPayload<S, P>;

export type Class = {
  name: string,
  duration: number,
  credits: number,
  image: string,
  created: Date,
};

export type Teacher = {
  name: string,
  title: string,
  image: string,
};

type ClassesState = {
  classes: Class[],
  teachers: Teacher[],
};

const initialState: ClassesState = {
  classes: mockClasses,
  teachers: mockTeachers,
};

const mockedDispatch = (_: ClassesAction) => {
  return;
};

const initialiser = {
  state: initialState,
  // only neccesary so we can have correct type assertion.
  dispatch: mockedDispatch,
};

export const ClassesContext = createContext(initialiser);

enum ClassType {
  Add = 'Add',
  Remove = 'Remove',
}

// name collision with class
export const addClass = (klass: Class): A<ClassType.Add, { class: Class }> => ({
  type: ClassType.Add,
  payload: {
    class: klass,
  },
});

export const removeClass = (name: string): A<ClassType.Remove, { name: string }> => ({
  type: ClassType.Remove,
  payload: {
    name,
  },
});

type ClassesAction =
  ReturnType<typeof addClass> |
  ReturnType<typeof removeClass>;

const matchClass = (name: string) => (klass: Class) => klass.name === name;

const reducer = (state: ClassesState, action: ClassesAction): ClassesState => {
  switch (action.type) {
    case ClassType.Add: {
      return {
        ...state,
        classes: [...state.classes, action.payload.class],
      };
    }
    case ClassType.Remove: {
      return {
        ...state,
        classes: filter(matchClass(action.payload.name) , state.classes),
      };
    }
    default: {
      return state;
    }
  }
};

export const ClassesContextProvider: React.SFC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return <ClassesContext.Provider value={value}>{children}</ClassesContext.Provider>;
};

export const ClassesContextConsumer = ClassesContext.Consumer;
