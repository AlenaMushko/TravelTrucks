import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.tsx";
import { theme } from "@/mui";
import { injectCSSVariables } from "@/styles/utils/injectCSSVariables";
import "@/styles/reset.scss";
import "@/styles/globals.scss";

injectCSSVariables();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
