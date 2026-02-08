import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Componentes
import ErrorBoundary from "./components/ErrorBoundary";

// Páginas
import Home from "./pages/home";

import "./main.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00e08e",
      contrastText: "#fff",
      error: "#E53935",
    },
    secondary: {
      main: "#e9e9e9",
      contrastText: "#000",
    },
    background: {
      default: "#eeeeee",
      paper: "#ffffff",
    },
    text: {
      primary: "#00e08e",
      secondary: "#555555",
      tertiary: "#ffffff",
      error: "#E53935",
      warning: "#FFB300",
    },
  },
  typography: {
    allVariants: {
      textAlign: "center",
      fontFamily: "Roboto, sans-serif",
      fontSize: "1rem",
      lineHeight: 1.4,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App;
