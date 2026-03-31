import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WeatherProvider } from "./context/weatherContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>,
);
