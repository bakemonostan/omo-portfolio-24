import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const playfair = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Omoh Portfolio",
  description: "An Omoh portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${openSans.className}`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
