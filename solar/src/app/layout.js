import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Awesun Solar Visualiser",
  description: "Visualising UK solar energy power production",
  icons: {
    icon: '../favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
