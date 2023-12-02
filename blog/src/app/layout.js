import { Inter } from "next/font/google";
import Header from "./components/Header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professor Zoom Blog",
  description: "Tech and games blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <hr className="border-1 border-solid border-gray-700"></hr>
        {children}
      </body>
    </html>
  );
}
