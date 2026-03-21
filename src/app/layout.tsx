import type { Metadata } from "next";
import "./globals.scss";
import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "../../public/assets/fonts/montserrat/Montserrat-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/montserrat/Montserrat-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
