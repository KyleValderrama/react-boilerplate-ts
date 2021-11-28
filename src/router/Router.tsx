import React from "react";
import { Router as ReactRouter } from "react-location";
import { routes, location } from "./routes";

interface RouterProps {}

export const Router: React.FC<RouterProps> = ({}) => {
  return <ReactRouter routes={routes} location={location}></ReactRouter>;
};
