import { Header } from "./header";
import { Outlet } from "@tanstack/react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
