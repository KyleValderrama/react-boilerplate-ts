import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  text = "Button",
  ...props
}) => {
  return <button {...props}>{text}</button>;
};
