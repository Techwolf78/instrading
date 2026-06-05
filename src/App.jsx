import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Sectors from "./components/Sectors";
import Heritage from "./components/Heritage";
import WhyUs from "./components/WhyUs";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import DryFruitsExport from "./pages/DryFruitsExport";
import DehydrationPlant from "./pages/DehydrationPlant";
import TeamPage from "./pages/TeamPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Banner />
      <About />
      <Sectors />
      <Heritage />
      <WhyUs />
      <Contact />
    </>
  );
}

function App() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    document.documentElement.lang =
      lang === "en" ? "en" : lang === "fa" ? "prs" : "ps";
  }, [lang]);

  return (
    <div className="min-h-screen bg-cream text-text-dark font-sans overflow-x-hidden antialiased">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <HomePage />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/pharmaceuticals" element={<Pharmaceuticals />} />
        <Route path="/dry-fruits-export" element={<DryFruitsExport />} />
        <Route path="/dehydration-plant" element={<DehydrationPlant />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
