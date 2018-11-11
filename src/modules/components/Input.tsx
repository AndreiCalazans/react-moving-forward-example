import * as React from 'react';

type Props = {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.SFC<Props> = ({ title, value, onChange }) => {
  return <input placeholder={title} value={value} onChange={onChange} />;
};
