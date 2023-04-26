import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header >
        <Link to="/">
          <div >Tenders APP</div>
        </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/tenders">Tenders</NavLink>
          </li>
          <li>
            <NavLink to="/breweries">Breweries</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

//className={classes.header}
//className={classes.logo}