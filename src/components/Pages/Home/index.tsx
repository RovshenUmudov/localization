import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from 'antd/es/layout/layout';

const HomePage: FC = () => {
  const { t } = useTranslation();

  return (
    <Content>
      {t('home_description')}
    </Content>
  );
};

export default HomePage;
