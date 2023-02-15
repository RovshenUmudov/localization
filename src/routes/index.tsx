import React, { FC, ReactNode } from 'react';
import { Navigate, RouteProps, Routes } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import News from '../pages/news';

export interface Route {
  bind: RouteProps;
}

export const routes: Route[] = [
  {
    bind: {
      path: '/',
      element: <Home />,
    },
  },
  {
    bind: {
      path: '/news',
      element: <News />,
    },
  },
  {
    bind: {
      path: '/*',
      element: <Home />,
    },
  },
];

const AppRoutes:FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ bind: { element, ...bind } }) => (
        <Route
          key={`${bind.path}`}
          {...bind}
          element={element}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
