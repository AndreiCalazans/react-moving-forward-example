import * as React from 'react';
import { InterpolationValue } from 'styled-components';
import styled, { css } from '../styled-components';

export const TextTypes = {
  header: css`
    font-size: 44px;
    font-weight: bold;
  `,
  subHeader: css`
    font-size: 28px;
  `,
  title: css`
    font-size: 34px;
    font-weight: bold;
  `,
  body: css`
    font-size: 21px;
  `,
  warning: css`
    font-size: 16px;
    color: lightpink;
  `,
  info: css`
    font-size: 16px;
    color: darkgray;
  `,
};

type TextKeyTypes = keyof typeof TextTypes;

const StyledText = styled.p<Props>`
 ${(p) => TextTypes[p.type]}
 ${(p) => p.customStyles ? p.customStyles : undefined}
`;

type Props = {
  type: TextKeyTypes;
  customStyles?: InterpolationValue[],
};

export const Text: React.SFC<Props> = (props) => <StyledText { ...props} >{props.children}</StyledText>;

Text.defaultProps = {
  type: 'body',
};
