import { Home2, Jiemi } from '../pages';

export const baseUrl = {
  home2: '/home2',
  jiemi: '/jiemi',
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
];

export default baseRouters;
