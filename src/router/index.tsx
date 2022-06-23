import { useRoutes } from 'react-router-dom';

import Main from '@/pages/main/Main';
import List from '@/pages/board/List';
import Write from '@/pages/board/Write';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/:boardType/list',
      element: <List />,
    },
    {
      path: '/:boardType/write',
      element: <Write />,
    },
  ]);
};

export default Router;
