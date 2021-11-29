import React from "react";

export interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children || "IconButton"}</button>;
};
