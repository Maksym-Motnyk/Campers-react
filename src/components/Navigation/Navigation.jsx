import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
export default function Navigation() {
  const makeNavLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <NavLink className={makeNavLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink className={makeNavLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
