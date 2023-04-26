import { Fragment } from "react";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <Fragment>
      <Navigation/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default MainHeader;
