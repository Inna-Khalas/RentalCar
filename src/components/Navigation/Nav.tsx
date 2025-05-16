import { NavLink } from "react-router-dom";
import s from "../Navigation/Nav.module.css";
import clsx from "clsx";

function Navigation() {
  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
  }) =>
    clsx(s.link, {
      [s.active]: isActive,
    });
  return (
    <nav className={s.container}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/cars" className={getNavLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}

export default Navigation;
