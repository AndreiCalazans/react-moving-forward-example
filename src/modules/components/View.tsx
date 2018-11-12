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
  customStyles?: InterpolationValue[] | ViewStyle,
};

export const View: React.SFC<Props> = ({ customStyles, children }) => <Div customStyles={customStyles}>{children}</Div>;
