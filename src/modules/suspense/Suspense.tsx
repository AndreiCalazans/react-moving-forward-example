import React, { useEffect, useState, Suspense } from 'react';
import { length } from 'ramda';
import { unstable_createResource } from 'react-cache';
import { RouteComponentProps, Router } from '@reach/router';
import { Text, View, Spinner, Tabs } from '../components';
import { googleNewsUrl } from '../configs/api';
import { NewsList } from '../google-news';
const delay = (ms: number) => new Promise((res) => setTimeout(() => res(), ms));
const tabs = [
  {
    name: 'Without',
    path: 'without-suspense',
  },
  {
    name: 'With',
    path: 'with-suspense',
  },
  {
    name: 'With & Reload',
    path: 'with-suspense-reload',
  },
];

const useGoogleNewsData = () => {
  const [googleNews, setGoogleNews] = useState([]);
  useEffect(async () => {
    // await delay(3000);
    const res = await fetch(googleNewsUrl);
    if (res && res.ok) {
      const data = await res.json();
      setGoogleNews(data.articles);
    }
  }, []);

  return googleNews;
};

const WithoutSuspense: React.SFC<RouteComponentProps> = () => {
  const news = useGoogleNewsData();
  return (
    <React.Fragment>
      {!length(news) && <Spinner />}
      <NewsList news={news} />
    </React.Fragment>
  );
};

const getGoogleNewsResource = () =>
  unstable_createResource(() =>
    fetch(googleNewsUrl)
      .then((res) => res.json())
      .then((data) => data.articles),
  );

let GoogleNewsResource = getGoogleNewsResource();

const WithSuspenseReload: React.SFC<RouteComponentProps> = () => {
  const [shouldReload, setReload] = useState(false);
  useEffect(
    () => {
      if (shouldReload) {
        setReload(false);
        GoogleNewsResource = getGoogleNewsResource();
      }
    },
    [shouldReload],
  );

  const news = GoogleNewsResource.read();

  return (
    <React.Fragment>
      <button onClick={() => setReload(!shouldReload)}>Reload data</button>
      <NewsList news={news} />
    </React.Fragment>
  );
};

const WithSuspense: React.SFC<RouteComponentProps> = () => {
  const news = GoogleNewsResource.read();
  return <NewsList news={news} />;
};

export const SuspenseExample: React.SFC<RouteComponentProps> = (props) => {
  return (
    <View>
      <Text type='body'>Suspending</Text>
      <Tabs tabs={tabs} />
      <Suspense maxDuration={1000} fallback={<Spinner />}>
        <Router>
          <WithoutSuspense path='without-suspense' />
          <WithSuspense path='with-suspense' />
          <WithSuspenseReload path='with-suspense-reload' />
        </Router>
      </Suspense>
    </View>
  );
};
