import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/home/Homepage';
import Layout from './pages/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import SinglePage from './pages/singlePage/SinglePage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
