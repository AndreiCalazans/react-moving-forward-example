import * as React from 'react';
import { InterpolationValue } from 'styled-components';
import styled from '../styled-components';
import { ViewStyle } from '../../types/styles';

const Div = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
 ${(p) => p.customStyles ? p.customStyles as InterpolationValue[] : undefined}
`;

type Props = {
  customStyles?: InterpolationValue[] | ViewStyle | any,
  [key: string]: any, // let use pass props to be handled by styled-components
};

export const View: React.SFC<Props> = ({ customStyles, children, ...props }) => (
  <Div customStyles={customStyles} {...props}>{children}</Div>
);
