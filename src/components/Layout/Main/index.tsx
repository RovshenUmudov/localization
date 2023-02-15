import React, { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';

import './index.scss';

const MainLayout:FC<PropsWithChildren> = ({ children }): JSX.Element => (
  <Layout className="layout">
    <SideMenu />
    <div className="content-wrap">{children}</div>
  </Layout>
);

export default MainLayout;
