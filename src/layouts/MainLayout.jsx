import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShaderBackground from "../components/ShaderBackground.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <ShaderBackground />
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-32 pt-0 sm:px-6 sm:pb-36 md:pb-32 md:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
