import React from "react";
import { MenuBar } from "./MenuBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};
