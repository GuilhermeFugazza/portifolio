import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShaderBackground from "../components/ShaderBackground.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen flex-col text-ink">
      <ShaderBackground />
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl flex-1 min-h-0 overflow-hidden px-6 pb-20 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
