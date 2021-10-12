// 路由懒加载
import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Game = lazy(() => import('../index_game'));

export { Home, Game };
