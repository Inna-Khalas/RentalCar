import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import s from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};

export default Button;
