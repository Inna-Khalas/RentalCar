import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Navigation() {
  const getNavLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
  }) =>
    classNames("text-lg text-neutral hover:text-primary", {
      "text-primary": isActive,
    });
  return (
    <nav className="menu menu-horizontal px-1 space-x-4">
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
