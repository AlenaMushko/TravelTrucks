import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.tsx";
import { theme } from "@/mui";
import { store } from "@/store";
import { injectCSSVariables } from "@/styles/utils/injectCSSVariables";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

injectCSSVariables();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
