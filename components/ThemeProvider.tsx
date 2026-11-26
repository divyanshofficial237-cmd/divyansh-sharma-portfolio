"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes injects an inline <script> for SSR theme detection, which
// triggers React 19's dev-only "script tag inside a component" warning.
// Known false positive (github.com/pacocoursey/next-themes/issues/387) —
// the script runs correctly during SSR. The patch must run at module scope
// (before render): the warning fires during render, before any useEffect.
if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag while rendering React component")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
