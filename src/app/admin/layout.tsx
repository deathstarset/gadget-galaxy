import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex h-screen">
      <SideBar />
      <div className="w-4/5 bg-slate-100">
        <NavBar />
        {children}
      </div>
    </main>
  );
}
