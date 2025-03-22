import React from "react";
import "./index.sass";

type Props = {
  children: React.ReactNode;
  variant: "dark" | "light";
  className?: string;
};

const Button = ({ children, variant, className }: Props) => {
  return (
    <button className={`button ${variant} ${className}`}>{children}</button>
  );
};

export default Button;
