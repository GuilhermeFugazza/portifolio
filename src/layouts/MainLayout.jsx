import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
