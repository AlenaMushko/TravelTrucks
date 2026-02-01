import { Outlet } from "react-router-dom";

import Header from "./Header";
import { NotificationContainer } from "@/shared/components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NotificationContainer />
    </>
  );
};

export default Layout;
