import React, { useContext, useEffect } from 'react';
import styled from '../styled-components';
import { centeredFlex } from '../styles';
import { View, Text, Input } from '../components';
import { UserContext } from '../user';

type Props = {
  isVisible: boolean;
  onHide: () => void;
};

type ModalProps = Pick<Props, 'isVisible'>;

const ModalWrapper = styled.div<ModalProps>`
  background-color: #f44336f2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  ${centeredFlex}
  > div {
    width: 400px;
    height: 200px;
    background-color: #ffebee;
    box-shadow: 3px 6px 12px 3px rgba(0, 0, 0, 0.2);
    ${centeredFlex}
    > p {
      color: #20556f;
      font-weight: bold;
      margin: 20px;
    }
    > button {
      width: 80px;
      height: 20px;
      margin: 20px;
    }
  }
`;

export const AskName: React.SFC<Props> = ({ isVisible, onHide }) => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <ModalWrapper isVisible={isVisible}>
      <View>
        <Text type='body'>Hey there!, What's your name?</Text>
        <Input value={state.name} title='Your name' onChange={(value: string) => dispatch({ name: value })} />
        <button onClick={onHide}>save</button>
      </View>
    </ModalWrapper>
  );
};
