import React from "react";
import { LOGO_SRC } from "../constants";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();
  return (
    <section className="relative min-h-screen bg-navy flex items-center px-6 md:px-12 py-[120px] overflow-hidden text-left hero">
      {/* Background Gradients */}
      <div
        className="absolute inset-0 pointer-events-none hero-bg"
        style={{
          background:
            "radial-gradient(ellipse at 75% 30%, rgba(26,138,117,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 75%, rgba(26,138,117,0.07) 0%, transparent 40%)",
        }}
      />
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none hero-grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,138,117,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,138,117,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 max-w-[580px] hero-content">
        <div className="inline-flex items-center gap-2 bg-teal/15 border border-teal/35 rounded-full px-4 py-1.5 mb-7 hero-badge">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-light animate-pulse hero-dot" />
          <span className="text-[11px] text-teal-light tracking-[1.2px] uppercase font-medium">
            {t("heroBadge")}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-[68px] font-bold text-white leading-[1.1] mb-2">
          {t("heroTitle1")}
          <em className="not-italic text-teal-light block mt-2">
            {t("heroTitle2")}
          </em>
        </h1>

        <p
          className="text-xl text-white/50 mb-2.5 italic text-left rtl hero-dari"
          dir="rtl"
        >
          {t("heroDari")}
        </p>

        <p className="text-[17px] leading-[1.85] text-white/70 mb-10 max-w-[560px] hero-desc">
          {t("heroDesc")}
        </p>

        <div className="flex gap-3.5 flex-wrap hero-actions">
          <a
            href="#sectors"
            className="bg-teal text-white py-3.5 px-8 rounded font-semibold hover:bg-teal-light transition-colors duration-200 text-center tracking-[0.3px] no-underline btn-primary"
          >
            {t("heroExplore")}
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white border border-white/28 py-3.5 px-8 rounded font-medium hover:border-teal-light hover:text-teal-light transition-all duration-200 text-center tracking-[0.3px] no-underline btn-outline"
          >
            {t("heroGetInTouch")}
          </a>
        </div>
      </div>
    </section>
  );
}
