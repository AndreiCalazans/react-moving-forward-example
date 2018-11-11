import * as React from 'react';
import { InterpolationValue } from 'styled-components';
import styled from '../styled-components';

const Div = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 ${(p) => p.customStyles ? p.customStyles : undefined}
`;

type Props = {
  customStyles?: InterpolationValue[],
};

export const View: React.SFC<Props> = (props) => <Div { ...props} >{props.children}</Div>;
