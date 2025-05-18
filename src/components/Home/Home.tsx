import Button from "../Button/Button";
import s from "../../pages/Home/HomePage.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={s.background}>
        <div className={s.title}>
          <h1 className={s.titleText}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link to="/cars">
            <Button className={s.button}>View Catalog</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
