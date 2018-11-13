import React, { useCallback } from 'react';
import { View, Text } from '../components';
import styled from '../styled-components';
import equals from 'ramda/es/equals';

const Button = styled.button<{ isActive: boolean }>`
  background-color: lightblue;
  border: ${(p) => (p.isActive ? '3px solid lightgreen' : 'none')};
  margin: 10px;
  width: 130px;
  height: 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export enum ListOrder {
  Asc = 'Ascending',
  Des = 'Descending',
}

type Props = {
  selectedListOrder: ListOrder;
  setListOrder: (val: ListOrder) => void;
};

export const OrderOptions: React.SFC<Props> = ({ setListOrder, selectedListOrder }) => {
  return (
    <View customStyles={{ flexDirection: 'row' }}>
      <Button
        isActive={equals(selectedListOrder, ListOrder.Asc)}
        onClick={useCallback(() => setListOrder(ListOrder.Asc), [])}
      >
        Ascending
      </Button>
      |
      <Button
        isActive={equals(selectedListOrder, ListOrder.Des)}
        onClick={useCallback(() => setListOrder(ListOrder.Des), [])}
      >
        Descending
      </Button>
    </View>
  );
};
