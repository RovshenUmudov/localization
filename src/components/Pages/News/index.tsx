import React, { FC, useEffect, useState } from 'react';
import i18next from 'i18next';
import { Content } from 'antd/es/layout/layout';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { News, useNewsGet } from '../../../hooks/news';
import Loading from '../../Common/Loading';

const NewsPage: FC = () => {
  const [news, setNews] = useState<News[]>();
  const getNews = useNewsGet();

  useEffect(() => {
    getNews.fetch('news', { lng: i18next.language });
  }, [i18next.language]);

  useEffect(() => {
    if (getNews.data) {
      setNews(getNews.data);
    }
  }, [getNews.data]);

  return (
    <Content>
      {
        getNews.loading ? <Loading visible={getNews.loading} absolute /> : (
          news?.map(({ id, title, date, content }) => (
            <Card
              key={id}
              style={{ width: 400, marginBottom: 30 }}
              title={title}
            >
              <Meta title={content} description={date} />
            </Card>
          ))
        )
      }
    </Content>
  );
};

export default NewsPage;
