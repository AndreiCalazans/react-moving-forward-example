import React from 'react';
import { Text, Card, CardList, Img } from '../components';

export type NewsProps = {
  author?: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  index: number;
};

export const NewsList: React.SFC<{ news: NewsProps[] }> = ({ news }) => (
  <CardList>
    {news && news.map((each, index) => <News key={each.title + index + 'article'} index={index} {...each} />)}
  </CardList>
);

export const News: React.SFC<NewsProps> = ({ urlToImage, title, publishedAt, description, author, index }) => (
  <Card>
    <Img width='100%' src={urlToImage} />
    <div style={{ padding: 10 }}>
      <Text type='subHeader'>{title}</Text>
      <Text type='body'>{description}</Text>
      <Text type='info'>Author: {author || 'Anonymous'}</Text>
      <Text type='info'>{new Date(publishedAt).toLocaleDateString()}</Text>
    </div>
  </Card>
);
