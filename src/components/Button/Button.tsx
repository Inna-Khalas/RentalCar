import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={clsx(className)}>
      {children}
    </button>
  );
};

export default Button;
