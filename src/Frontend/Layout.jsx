import React from "react";
import { MenuBar } from "./MenuBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "../Components/ScrollToTop";

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
};
