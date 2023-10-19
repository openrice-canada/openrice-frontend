import { createBrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import LoginPage from "./pages/login/page";
import ErrorPage from "./pages/error/Error";
import { HomePage } from "./pages/HomePage";
import SignUpPage from "./pages/signUp/page";
import ReviewPage from "./pages/review/page";
import UserInput from "./pages/review/userinput";
=======
import LoginPage from "./pages/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/signUp/SignUpPage";
import MapPage from "./pages/map/MapPage";
>>>>>>> 6b014938ea0f2f355e665d7e8f44589f36c93669

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
<<<<<<< HEAD
          path: "/review",
          element: <ReviewPage />,
        },
        {
          path: "/userinput",
          element: <UserInput />,
=======
          path: "/map",
          element: <MapPage />,
>>>>>>> 6b014938ea0f2f355e665d7e8f44589f36c93669
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
