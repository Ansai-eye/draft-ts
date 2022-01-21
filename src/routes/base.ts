import { Home2, Jiemi, ReactSourceCode, CSSWorld, JsAdvanced } from '../pages';

export const baseUrl = {
  home2: '/home2',
  jiemi: '/jiemi',
  sourceCode: '/sourceCode',
  cssworld: '/cssworld',
  jsAdvanced: '/js'
};

const baseRouters = [
  {
    path: baseUrl.home2,
    component: Home2,
    root: [],
  },
  {
    path: baseUrl.jiemi,
    component: Jiemi,
    root: [],
  },
  {
    path: baseUrl.sourceCode,
    component: ReactSourceCode,
    root: []
  },
  {
    path: baseUrl.cssworld,
    component: CSSWorld,
    root: []
  },
  {
    path: baseUrl.jsAdvanced,
    component: JsAdvanced,
    root: []
  }
];

export default baseRouters;
