import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Hi I'm a Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="layout">{children}</body>
    </html>
  );
}
