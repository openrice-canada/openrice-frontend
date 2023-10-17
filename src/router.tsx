import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/page";
import ErrorPage from "./pages/error/Error";
import { HomePage } from "./pages/HomePage";
import SignUpPage from "./pages/signUp/page";
import ReviewPage from "./pages/review/page";

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
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default router;
