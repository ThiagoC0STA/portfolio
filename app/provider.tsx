"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { Suspense } from "react";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black-100" />}>
      <NextThemesProvider {...props}>
        {children}
      </NextThemesProvider>
    </Suspense>
  );
};
