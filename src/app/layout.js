import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Providers from "./providers";
import { AppProvider } from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Emirates Delight",
  description: "Food Ordering Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en className='scroll-smooth">
      <body className={roboto.className}>
        <main className=" max-w-4xl mx-auto p-4 ">
          <AppProvider>
            <Toaster />{" "}
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
