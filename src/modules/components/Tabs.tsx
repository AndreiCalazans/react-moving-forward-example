import * as React from 'react';
import { Link } from '@reach/router';
import { css } from '../styled-components';
import { View } from './View';

type Tab = {
  name: string;
  path: string;
};

type Props = {
  tabs: Tab[],
};

const styles = css`
  flex-direction: row;
  justify-content: space-arround;
  text-align: center;
  > a {
    margin: 5px;
    width: 150px;
    height: 100px;
  }
`;

export const Tabs: React.SFC<Props> = ({ tabs }) => (
  <View customStyles={styles}>
    {tabs.map((each, idx) => <Link key={each.name + idx} to={each.path}>{each.name}</Link>)}
  </View>
);
