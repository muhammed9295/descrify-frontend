import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Descrify | Amazon Title Generator",
  description:
    "An AI tool to generate title and description for amazon products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-12">
          <section className="col-span-2">
          <Sidebar />
          </section>
          <section className="col-span-10">
            <Navbar />
            {children}
            <p className="text-center text-gray-400 text-sm mt-10">© 2024 Descrify Brand Performance. All rights reserved</p>
          </section>
        </div>
      </body>
    </html>
  );
}
