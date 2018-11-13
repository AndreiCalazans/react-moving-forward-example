import React, { useContext, useState, SetStateAction, Dispatch } from 'react';
import { RouteComponentProps } from '@reach/router';
import { View, Text, Input } from '../components';
import { ClassesContext, Class, addClass } from './ProvideClasses';
import { oneDay } from './mockData';

const initialValue = {
  name: '',
  image: '',
  credits: 0,
  duration: 0,
  created: 0,
};

const futureDate = () => new Date(Date.now() + 20 * oneDay);

type D = Dispatch<SetStateAction<typeof initialValue>>;

const setInputValue = (field: string, setValue: D) => (value: string) =>
  setValue((prevState) => ({ ...prevState, [field]: value }));

// make this a modal route render on top
export const AddClass: React.SFC<RouteComponentProps> = () => {
  const classState = useContext(ClassesContext);
  const [klass, setKlass] = useState(initialValue);
  const onSubmit = (e: any) => {
    e.preventDefault();
    classState.dispatch(addClass({ ...klass, created: futureDate() }));
  };

  return (
    <View customStyles={{ backgroundColor: 'lightgreen' }}>
      <Text type='title'>Add a class</Text>
      <form onSubmit={onSubmit}>
        <Input title='name' value={klass.name} onChange={setInputValue('name', setKlass)} />
        <Input title='image' value={klass.image} onChange={setInputValue('image', setKlass)} />
        <Input type='number' title='duration' value={klass.duration} onChange={setInputValue('duration', setKlass)} />
        <button onClick={onSubmit}>Submit</button>
      </form>
    </View>
  );
};
