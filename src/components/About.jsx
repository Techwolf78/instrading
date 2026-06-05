import React from "react";
import { LOGO_SRC } from "../constants";
import partnerLogo from "../assets/bioBridgeLogo.jpg";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      className="bg-white grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center py-24 px-6 md:px-12"
      id="about"
    >
      {/* Visual Column */}
      <div className="relative">
        <div className="bg-navy rounded-2xl p-6 sm:p-10 relative overflow-hidden text-left">
          {/* Decorative radial gradient */}
          <div
            className="absolute -top-10 -right-10 w-[180px] h-[180px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(26,138,117,0.2) 0%, transparent 70%)",
            }}
          />

          <div className="flex items-center gap-4 mb-6">
            <img
              src={LOGO_SRC}
              className="w-[90px] h-[90px] object-contain rounded-full shadow-[0_4px_20px_rgba(26,138,117,0.25)]"
              alt="INS Logo"
            />
            <div>
              <div className="font-serif text-lg text-white leading-tight">
                {t("aboutCompany")}
                <span className="block text-sm font-sans mt-1 text-teal-light font-semibold uppercase tracking-wider">
                  {t("aboutCompanySub")}
                </span>
              </div>
              <div className="text-xs text-white/50 mt-1" dir="rtl">
                {t("heroDari")}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2.5 bg-teal/10 border border-teal/25 rounded-lg px-3.5 py-3 text-xs sm:text-sm text-white/85">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
              💊 {t("aboutPharma")}
            </div>
            <div className="flex items-center gap-2.5 bg-teal/10 border border-teal/25 rounded-lg px-3.5 py-3 text-xs sm:text-sm text-white/85">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
              🍇 {t("aboutDry")}
            </div>
            <div className="flex items-center gap-2.5 bg-teal/10 border border-teal/25 rounded-lg px-3.5 py-3 text-xs sm:text-sm text-white/85">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-light shrink-0" />
              🏭 {t("aboutDehy")}
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <div className="flex-1 bg-teal/20 border border-teal/30 rounded-xl p-3.5 text-center">
              <div className="font-serif text-[26px] font-bold text-teal-light">
                2026
              </div>
              <div className="text-[10px] text-white/50 tracking-[0.8px] uppercase mt-1 leading-tight">
                {t("aboutFounded")}
              </div>
            </div>
            <div className="flex-1 bg-teal/20 border border-teal/30 rounded-xl p-3.5 text-center">
              <div className="font-serif text-[26px] font-bold text-teal-light">
                3
              </div>
              <div className="text-[10px] text-white/50 tracking-[0.8px] uppercase mt-1 leading-tight">
                {t("aboutSectors")}
              </div>
            </div>
            <div className="flex-1 bg-teal/20 border border-teal/30 rounded-xl p-3.5 text-center">
              <div className="font-serif text-[26px] font-bold text-teal-light">
                AF
              </div>
              <div className="text-[10px] text-white/50 tracking-[0.8px] uppercase mt-1 leading-tight">
                {t("aboutRegistered")}
              </div>
            </div>
          </div>
        </div>

        {/* Partner Section — below the navy box */}
        <a
          href="https://biobridge.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-cream rounded-xl p-4 sm:p-5 border-l-[3px] border-teal mt-8 no-underline transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
        >
          <img
            src={partnerLogo}
            className="w-[90px] h-auto object-contain rounded-md"
            alt="BioBridge Logo"
          />
          <div className="text-left">
            <strong className="block text-[13px] text-text-dark font-bold leading-snug">
              {t("aboutSister")}
            </strong>
            <span className="text-[11px] text-text-light block mt-1">
              {t("aboutSisterDetail")}
            </span>
          </div>
        </a>
      </div>

      {/* Content Column */}
      <div className="text-left">
        <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 font-semibold">
          <div className="w-6 h-[1px] bg-teal" />
          {t("aboutWho")}
        </div>
        <h2 className="font-serif text-3xl sm:text-[46px] font-bold leading-tight mb-4 text-navy">
          {t("aboutTitle")}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid mb-6">
          {t("aboutP1")}
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid mb-6">
          {t("aboutP2")}
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid mb-8 font-medium italic">
          {t("aboutP3")}
        </p>
      </div>
    </section>
  );
}
