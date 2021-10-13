import React from 'react';
import { Home } from '../pages';
import baseRouters from './base';

export type RouterType = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<any>;
  root: string[];
  notExect?: boolean;
};

const HomeRouter: RouterType = {
  path: '/home',
  component: Home,
  root: [],
};

// 总路由
const Routers: RouterType[] = [HomeRouter, ...baseRouters];

export { Routers };
