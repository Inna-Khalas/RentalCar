import Button from "../Button/Button";
import s from "../../pages/Home/HomePage.module.css";

const Home = () => {
  return (
    <>
      <div className={s.background}>
        <div className={s.title}>
          <h1 className={s.titleText}>Find your perfect rental car</h1>
          <p className={s.text}>
            Reliable and budget-friendly rentals for any journey
          </p>

          <Button className={s.button}>View Catalog</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
