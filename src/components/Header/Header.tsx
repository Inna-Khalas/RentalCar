import Navigation from "../Navigation/Nav";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.inner}>
        <h1 className={s.logo}>
          Rental<span>Car</span>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
