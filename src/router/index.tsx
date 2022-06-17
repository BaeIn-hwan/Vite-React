import { useRoutes } from "react-router-dom";

import MainIndex from "@/views/main";
import AuthLayout from "@/layouts/AuthLayout";
import FormSample from "@/views/sample/FormSample";

const Router = () => {
  return useRoutes(
    [
      {
        path: "/",
        element: <MainIndex />
      },
      // 하위에 보여질 화면이 있으면 아래와 같이 사용
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/main",
            element: <FormSample />,
          },
        ]
      }
    ]
  );
}

export default Router;