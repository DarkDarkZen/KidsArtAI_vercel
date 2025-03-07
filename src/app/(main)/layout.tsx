"use client";

import { type PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return <div className="flex-1">{children}</div>;
} 