import Test from '../pages/test';

export const routesList = [
  {
    path: '/test',
    exact: true,
    component: Test,
  },
  {
    path: '/',
    exact: true,
    component: Test,
  },
]