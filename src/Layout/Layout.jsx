import { Fragment } from "react";
import Navigation from "./Navigation";
import classes from "../style/Layout.module.css"
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation/>
      <Outlet/>
    </Fragment>
  );
};

export default Layout;
