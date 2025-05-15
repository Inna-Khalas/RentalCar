import Navigation from "../Navigation/Nav";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <h1>
        Rental<span>Car</span>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
