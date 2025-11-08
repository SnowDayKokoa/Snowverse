"use client";

import * as React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { PrimeReactProvider } from "primereact/api";
import { StyleProvider } from "@ant-design/cssinjs";

const muiTheme = createTheme({
  palette: { mode: "light" },
  shape: { borderRadius: 12 }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </MuiThemeProvider>
    </StyleProvider>
  );
}
