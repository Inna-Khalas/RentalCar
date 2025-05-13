import Button from "./Button";
import Header from "./Header";
import s from "../pages/Home/HomePage.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={s.background}>
        <h1>Find your perfect rental car</h1>
        <p>Reliable and budget-friendly rentals for any journey</p>
        <Button>View Catalog</Button>
      </div>
    </>
  );
};

export default Home;
