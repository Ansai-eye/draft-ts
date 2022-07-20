<<<<<<< HEAD
import { Home2, Jiemi, ReactSourceCode, CSSWorld, CSSNewWorld } from '../pages';
=======
import { Home2, Jiemi, ReactSourceCode, CSSWorld, JsAdvanced } from '../pages';
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29

export const baseUrl = {
  home2: '/home2',
  jiemi: '/jiemi',
  sourceCode: '/sourceCode',
  cssworld: '/cssworld',
<<<<<<< HEAD
  cssNewWorld: '/cssnewworld'
=======
  jsAdvanced: '/js'
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29
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
<<<<<<< HEAD
    path: baseUrl.cssNewWorld,
    component: CSSNewWorld,
=======
    path: baseUrl.jsAdvanced,
    component: JsAdvanced,
>>>>>>> 1f048d6a77acc2575efa005357a02ae4ea11cd29
    root: []
  }
];

export default baseRouters;
