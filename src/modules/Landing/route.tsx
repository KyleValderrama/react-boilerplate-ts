import { Route } from "react-location";

export const route: Route = {
  element: () => import(".").then(({ Landing }) => <Landing />),
};
