import React, { Suspense, ImgHTMLAttributes } from 'react';
import { unstable_createResource } from 'react-cache';
import styled from '../styled-components';
import { blurInCss } from '../styles';

const StyledImg = styled.img`
  ${blurInCss}
`;

const ImageResource = unstable_createResource((url: string) => {
  return new Promise((res) => {
    //  @ts-ignore
    const img = new Image();
    img.src = url;
    img.onload = res;
  });
});

type Props = {
  src: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const InternalImg: React.SFC<Props> = (props) => {
  ImageResource.read(props.src);
  return <StyledImg {...props} />;
};

const fallbackStyle = {
  width: '100%',
  height: '250px',
  backgroundColor: 'whitesmoke',
};

export const Img: React.SFC<Props> = (props) => {
  return (
    <Suspense fallback={<div style={fallbackStyle} />}>
      <InternalImg {...props} />
    </Suspense>
  );
};
