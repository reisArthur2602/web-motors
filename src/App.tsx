import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components';
import { Home } from './pages';

export const routes = createBrowserRouter([
  { element: <Layout />, children: [{ path: '/', element: <Home /> }] },
]);
