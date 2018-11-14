import * as React from 'react';
import styled from '../styled-components';
import { ViewStyle } from '../../types/styles';

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  background-color: white;
  box-shadow: 5px 5px 16px 1px rgba(0, 0, 0, 0.3);
  min-height: 180px;
  min-width: 300px;
  margin: 5px;
  flex: 1;
`;

export const Card: React.SFC<ViewStyle> = ({ children, ...props }) => <Div {...props}>{children}</Div>;
