import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../presentation/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
