/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useState } from "react";
import Layout from "./components/layout/Layout";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { User } from "./api/auth/authType";

interface UserInfo {
  userInfo: User | null;
  setUserInfo: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserInfo | null>(null);

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(() => {
    if (!sessionStorage.getItem("userInfo")) return null;
    return JSON.parse(sessionStorage.getItem("userInfo")!);
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Layout>
        <ScrollRestoration />
        <Outlet />
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
