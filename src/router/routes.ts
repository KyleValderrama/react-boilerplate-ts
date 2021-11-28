import { Route, ReactLocation } from "react-location";

export const routes: Route[] = [
  {
    path: "login",
    import: () => import("@/modules/Login").then(({ route }) => route),
  },
  {
    path: "register",
    import: () => import("@/modules/Register").then(({ route }) => route),
  },
  {
    path: "/",
    import: () => import("@/modules/Landing").then(({ route }) => route),
  },
];

export const location = new ReactLocation();
