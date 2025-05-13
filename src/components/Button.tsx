import type { ButtonProps } from "../types/types";
import s from "./Button.module.css";

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
