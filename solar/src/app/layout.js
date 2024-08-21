import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Awesun Solar Visualiser",
  description: "Visualising UK solar energy power production",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      {/* For some reason this icon doesnt show in development */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
