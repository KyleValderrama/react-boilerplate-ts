import React from "react";

interface HeaderProps {}
export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-gray-200 p-10">
      <h1 className={"text-3xl font-bold"}>Login</h1>
    </div>
  );
};
