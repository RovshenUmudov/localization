import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import i18next from 'i18next';
import HomePage from '../../components/Pages/Home';
import MainLayout from '../../components/Layout/Main';

const Home: FC = () => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ lng: i18next.language });
  }, []);

  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default Home;
