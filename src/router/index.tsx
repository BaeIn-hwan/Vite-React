import { useRoutes } from 'react-router-dom';

import Main from '@/pages/main';

import SampleForm from '@/pages/sample/form';
import SampleLayouts from '@/pages/sample/layouts';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/sample/form',
      element: <SampleForm />,
    },
    {
      path: '/sample/layouts',
      element: <SampleLayouts />,
    },
  ]);
};

export default Router;
