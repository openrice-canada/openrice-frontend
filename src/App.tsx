import Layout from "./components/layout/Layout";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <ScrollRestoration />
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
