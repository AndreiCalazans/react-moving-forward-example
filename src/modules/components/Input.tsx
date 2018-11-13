import React, { AllHTMLAttributes } from 'react';
import { Omit } from '../../types/globals';

type Props = {
  title: string;
  value: string | number;
  onChange: (value: string) => void;
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const Input: React.SFC<Props> = ({ title, value, onChange, ...props }) => {
  return <input placeholder={title} value={value} onChange={(evt) => onChange(evt.target.value)} {...props} />;
};
