import React, { Suspense, useEffect, ReactNode, useState } from 'react';
import { unstable_createResource } from 'react-cache';

const requestData = async (saveData: any, apiUrl: string, mapData: any) => {
  const res = await fetch(apiUrl);
  if (res && res.ok) {
    const data = await res.json();
    saveData(mapData(data));
  }
};

type Props = {
  url: string;
  mapData: (data: any) => any;
  onRender: NonNullable<ReactNode>;
  onFailure: NonNullable<ReactNode>;
  onFallback: NonNullable<ReactNode>;
  maxDuration?: number;
  shouldRefetch?: boolean;
  saveData: (data: any) => void;
};

const Internal = ({ dataResource, onRender }: any) => {
  const data = dataResource.read();
  const Render = onRender;
  return <Render data={data} />;
};

const getDataResource = (url: string, mapData: any, saveData: (val: any) => void) =>
  unstable_createResource(() =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const mapped = mapData(data);
        saveData(mapped);
        return mapped;
      }),
  );

let dataResource: any;

export const Fetcher: React.SFC<Props> = ({ url, mapData, onRender, onFailure, onFallback, maxDuration, saveData }) => {
  const [isReady, setReady] = useState(false);
  useEffect(() => {
    dataResource = getDataResource(url, mapData, saveData);
    setReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <Suspense maxDuration={maxDuration} fallback={onFallback}>
      <Internal dataResource={dataResource} onRender={onRender} />
    </Suspense>
  );
};

Fetcher.defaultProps = {
  saveData: (val: any) => null,
  mapData: (val: any) => val,
  shouldRefetch: false,
};
