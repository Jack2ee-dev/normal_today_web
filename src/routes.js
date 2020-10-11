import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AUTH_PAGE from './pages/auth/page';
import HOME_PAGE from './pages/home/page';
import CALENDAR_PAGE from './pages/calendar/page';
import PLAN_PAGE from './pages/plan/page';
import TODAY_PAGE from './pages/today/page';
import MY_PAGE from './pages/my/page';

const routes = [
  {
    path: '/auth',
    name: '로그인',
    container: AUTH_PAGE,
    exact: true,
  },
  {
    path: '/',
    name: '서비스',
    container: HOME_PAGE,
    exact: true,
  },
  {
    path: '/calendar',
    name: '캘린더',
    container: CALENDAR_PAGE,
    exact: true,
  },
  {
    path: '/plan',
    name: '플랜',
    container: PLAN_PAGE,
    exact: true,
  },
  {
    path: '/today',
    name: '오늘하루',
    container: TODAY_PAGE,
    exact: false,
  },
  {
    path: '/my',
    name: '나',
    container: MY_PAGE,
    exact: true,
  },
];

const SwitchRoutes = () => (
  <Switch>
    {routes.map(({ path, container, exact }, key) => (
      <Route
        key={key}
        path={path}
        component={container}
        exact={exact}
      />
    ))}
  </Switch>
);

export default SwitchRoutes;
