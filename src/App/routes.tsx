import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
