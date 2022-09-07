import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | null;
}

export const Button = ({ variant = null, children, ...props }: IButton) => {
  return (
    <button
      className={` ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "secondary"
          ? "bg-secondary"
          : "any"
      } `}
      {...props}
    >
      {children}
    </button>
  );
};
