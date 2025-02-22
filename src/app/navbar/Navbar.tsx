import React from "react";
import {NavLink} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import * as styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              classNames(styles.link, { [styles['active-link']]: isActive })
            }
          >
            Все котики
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              classNames(styles.link, { [styles['active-link']]: isActive })
            }
          >
            Любимые котики
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
