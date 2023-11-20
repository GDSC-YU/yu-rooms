import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yu Rooms",
  description:
    "Need a quiet room at Al Yamamah University? Look no further! With Yu Rooms, you can take advantage of your free time in a space of your choice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
