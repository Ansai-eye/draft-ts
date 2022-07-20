// 路由懒加载
import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Home2 = lazy(() => import('./home2'));
const Jiemi = lazy(() => import('./jiemicss'));
const ReactSourceCode = lazy(() => import('./react-source-code'));
const CSSWorld = lazy(() => import('./css-world'));
<<<<<<< HEAD
const CSSNewWorld = lazy(() => import('./css-new-world'));

export { Home, Home2, Jiemi, ReactSourceCode, CSSWorld, CSSNewWorld };
=======
const JsAdvanced = lazy(() => import('./js-advanced-programming'));

export { Home, Home2, Jiemi, ReactSourceCode, CSSWorld, JsAdvanced };
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29
