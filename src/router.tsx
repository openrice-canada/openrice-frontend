import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUpPage from "./pages/sign-up/page";
import LoginPage from "./pages/login/page";
import ErrorPage from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  }
],{ basename: process.env.PUBLIC_URL });

export default router;