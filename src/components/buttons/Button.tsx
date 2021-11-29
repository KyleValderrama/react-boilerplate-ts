import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children || "Button"}</button>;
};
