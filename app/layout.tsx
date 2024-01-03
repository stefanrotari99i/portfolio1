import "./globals.css";

import Loading from "./loading";
import type { Metadata } from "next";
import { Suspense } from "react";
import { neptune } from "./fonts";

export const metadata: Metadata = {
  title: "Stefan Rotari - Portfolio",
  description: "Hi! This is the portfolio of Stefan Rotari.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${neptune.className} bg-black min-h-screen w-screen overflow-x-hidden relative`}
      >
        <Suspense fallback={<Loading />}>
          <div className="overlay" />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
