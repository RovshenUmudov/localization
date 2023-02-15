import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import i18next from 'i18next';
import MainLayout from '../../components/Layout/Main';
import NewsPage from '../../components/Pages/News';

const News: FC = () => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ lng: i18next.language });
  }, []);

  return (
    <MainLayout>
      <NewsPage />
    </MainLayout>
  );
};

export default News;
