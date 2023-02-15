import React, { FC, useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { HomeOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import SelectLanguage from '../../../Common/SelectLanguage';

const SideMenu: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(pathname.split('/').find((item) => !!item) || 'home');
  }, [pathname]);

  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link to="/home">{t('menu_item_home')}</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: 'news',
      label: <Link to="/news">{t('menu_item_news')}</Link>,
      icon: <ProfileOutlined />,
    },
  ];

  return (
    <div className="sidebar">
      <Menu
        mode="vertical"
        selectedKeys={[current]}
        items={items}
      />
      <SelectLanguage defaultValue={i18next.language} />
    </div>
  );
};

export default SideMenu;
