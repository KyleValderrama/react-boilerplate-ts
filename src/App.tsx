import "./App.css";
import { Providers } from "./providers/Providers";
import { Router } from "./router";

export const App = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};
