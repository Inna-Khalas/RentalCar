import type { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={s.button}>
      {children}
    </button>
  );
};

export default Button;
