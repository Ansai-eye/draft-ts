import { Home2, Jiemi, ReactSourceCode } from '../pages';

export const baseUrl = {
  home2: '/home2',
  jiemi: '/jiemi',
  sourceCode: '/sourceCode'
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
  }
];

export default baseRouters;
