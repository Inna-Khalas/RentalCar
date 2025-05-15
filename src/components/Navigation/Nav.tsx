import classNames from "classnames";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Nav.module.css";

function Navigation() {
  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
  }) =>
    classNames(s.link, {
      [s.active]: isActive,
    });
  return (
    <nav className={s.container}>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={getNavLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}

export default Navigation;
