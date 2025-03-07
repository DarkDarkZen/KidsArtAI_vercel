"use client";

import { type PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "sonner";
import { cn } from "~/lib/utils";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <TRPCReactProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className={cn("flex min-h-screen flex-col")}>
          {children}
          <Toaster />
        </main>
      </ThemeProvider>
    </TRPCReactProvider>
  );
} 