import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
// import VortexBackground from "../components/VortexBackground.jsx";
import ShaderBackground from "../components/ShaderBackground.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <ShaderBackground />
      {/* <VortexBackground /> */}
      <Navbar />
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-0 sm:px-6 sm:pb-32 md:pb-28 md:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
