import Nav from "@/components/nav";
import { roboto } from "./fonts";
import "./globals.css";

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
      <body>
        <div className="container mx-auto">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
