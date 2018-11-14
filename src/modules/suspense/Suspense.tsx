import React, { useEffect, useState, Suspense } from 'react';
import { length } from 'ramda';
import { RouteComponentProps } from '@reach/router';
import { Text, View, Spinner } from '../components';
import { googleNewsUrl } from '../configs/api';
import { NewsList } from '../google-news';

const useGoogleNewsData = () => {
  const [googleNews, setGoogleNews] = useState([]);
  useEffect(async () => {
    const res = await fetch(googleNewsUrl);
    if (res && res.ok) {
      const data = await res.json();
      setGoogleNews(data.articles);
    }
  }, []);

  return googleNews;
};

export const SuspenseExample: React.SFC<RouteComponentProps> = (props) => {
  const news = useGoogleNewsData();

  return (
    <View>
      <Text type='title'>Suspense component</Text>
      {!length(news) && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <NewsList news={news} />
      </Suspense>
    </View>
  );
};
