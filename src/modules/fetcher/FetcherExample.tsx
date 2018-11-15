import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Text, View } from '../components';
import { googleNewsUrl } from '../configs/api';
import { NewsList } from '../google-news';
import { Fetcher } from './Fetcher';

export const FetcherExample: React.SFC<RouteComponentProps> = () => {
  return (
    <View>
      <Text type='body'>Fetcher example</Text>
      <Fetcher
        url={googleNewsUrl}
        mapData={(dt) => dt.articles}
        onRender={({ data }: any) => <NewsList news={data} />}
        onFallback={<p>Loading...</p>}
        onFailure={<p>Failure</p>}
        maxDuration={1000}
        saveData={(dt) => null}
      />
    </View>
  );
};
