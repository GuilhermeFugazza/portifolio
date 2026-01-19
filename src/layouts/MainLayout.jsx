import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShaderBackground from "../components/ShaderBackground.jsx";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <ShaderBackground />
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 px-6 pb-16 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
