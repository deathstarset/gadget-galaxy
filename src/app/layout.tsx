import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gadget Galaxy",
  description:
    "Gadget Galaxy is your one-stop shop for all things computers. Explore our vast selection of laptops, desktops, peripherals, accessories, and more. Discover the latest technology and unbeatable prices at Gadget Galaxy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
