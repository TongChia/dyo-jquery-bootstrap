import universalRouter from 'universal-router';
import {createHashHistory} from 'history';

export const history = createHashHistory();

export const router = new universalRouter([
  {
    path: '/',
    action: () => import('./pages/Home')
  },
  {
    path: '/page1',
    action: () => import('./pages/Page1')
  },
  {
    path: '/page2',
    action: () => import('./pages/Page2')
  },
])
