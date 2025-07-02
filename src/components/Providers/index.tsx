"use client";

import React from "react";
import TanstackClientProvider from "./TanstackClientProvider";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackClientProvider>
      <MantineProvider theme={theme}>
        <ThemeProvider>
          <Toaster />
          {children}
        </ThemeProvider>
      </MantineProvider>
    </TanstackClientProvider>
  );
};

export default Providers;
