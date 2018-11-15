import React, { Suspense, ImgHTMLAttributes } from 'react';
import { unstable_createResource } from 'react-cache';
import styled, { keyframes } from '../styled-components';

const blurIn = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opactiy: 1;
  }
`;

const StyledImg = styled.img`
  animation: ${blurIn} 0.6s 1 linear;
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
