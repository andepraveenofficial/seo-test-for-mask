import { createBrowserRouter } from "react-router-dom";
import { HeaderLayout } from "../layouts";
import { FirstPage, SecondPage, ThirdPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HeaderLayout,
    children: [
      {
        index: true,
        Component: FirstPage,
      },
      {
        path: "first-page",
        Component: FirstPage,
      },
      {
        path: "second-page",
        Component: SecondPage,
      },
      {
        path: "third-page",
        Component: ThirdPage,
      },
    ],
  },
]);

export default router;
