import React, { useContext, useState, SetStateAction, Dispatch } from 'react';
import { RouteComponentProps } from '@reach/router';
import { View, Text, Input } from '../components';
import styled from '../styled-components';
import { centeredFlex } from '../styles';
import { ClassesContext, Class, addClass } from './ProvideClasses';
import { oneDay } from './mockData';

const ModalStyle = styled.div`
  background-color: #f44336f2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  ${centeredFlex}
  > form {
    display: flex;
    flex-direction: column;
    > input {
      width: 230px;
    }
    > label {
      margin: 20px 0 10px 0;
    }
    > button {
      margin-top: 20px;
      height: 25px;
    }
  }
`;

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
    window.history.back(); // = /
  };

  return (
    <ModalStyle>
      <Text type='subHeader'>Add a class</Text>
        <form onSubmit={onSubmit}>
          <Input title='name' value={klass.name} onChange={setInputValue('name', setKlass)} />
          <Input title='image' value={klass.image} onChange={setInputValue('image', setKlass)} />
          <Input type='number' title='duration' value={klass.duration} onChange={setInputValue('duration', setKlass)} />
          <button onClick={onSubmit}>Submit</button>
        </form>
    </ModalStyle>
  );
};
