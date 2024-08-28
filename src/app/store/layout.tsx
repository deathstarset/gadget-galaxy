import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
