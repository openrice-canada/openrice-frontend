import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUp/SignUpPage";
import MapPage from "./pages/map/MapPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/map",
          element: <MapPage />,
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
