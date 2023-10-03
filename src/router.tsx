import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUpPage from "./pages/sign-up/page";
import LoginPage from "./pages/login/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

export default router;