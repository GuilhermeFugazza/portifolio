import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShaderBackground from "../components/ShaderBackground.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <ShaderBackground />
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-24 pt-0 md:pb-28 md:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
