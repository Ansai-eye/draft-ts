// 路由懒加载
import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Home2 = lazy(() => import('./home2'));

export { Home,Home2 };
