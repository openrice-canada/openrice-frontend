import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReviewPage from "./pages/review/page";
import UserInput from "./pages/review/userinput";
import MapPage from "./pages/map/MapPage";
import LoginPage from "./pages/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUp/SignUpPage";

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
          path: "/review",
          element: <ReviewPage />,
        },
        {
          path: "/userinput",
          element: <UserInput />,
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
