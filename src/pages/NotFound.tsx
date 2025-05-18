import { Link } from "react-router-dom";
import s from "./NotFoud.module.css";
const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404</h1>
      <p className={s.message}>Ой! Сторінку не знайдено.</p>
      <Link to="/" className={s.homeLink}>
        На головну
      </Link>
    </div>
  );
};

export default NotFound;
