import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-cream text-text-dark font-sans overflow-x-hidden antialiased">
      <Navbar />
      <main className="pt-[96px]">
        <Team />
      </main>
      <Footer />
    </div>
  );
}
