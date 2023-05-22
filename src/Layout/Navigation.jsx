import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Tenders APP</div>
        </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/tenders">Tenders</NavLink>
          </li>
          <li>
            <NavLink to="/tender">Tender</NavLink>
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