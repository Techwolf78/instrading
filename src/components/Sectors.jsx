import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Sectors() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream py-24 px-6 md:px-12" id="sectors">
      <div className="text-left max-w-[620px] mb-[52px]">
        <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 font-semibold">
          <div className="w-6 h-[1px] bg-teal" />
          {t("sectorsLabel")}
        </div>
        <h2 className="font-serif text-3xl sm:text-[46px] font-bold leading-tight mb-4 text-navy">
          {t("sectorsTitle")}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid">
          {t("sectorsDesc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[52px]">
        <div className="bg-white rounded-2xl p-9 border border-black/[0.06] relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl text-left">
          <div className="absolute top-5 right-6 font-serif text-[52px] font-bold text-teal/[0.08] leading-none">
            01
          </div>
          <div className="w-[54px] h-[54px] bg-navy rounded-xl flex items-center justify-center text-[26px] mb-[22px]">
            💊
          </div>
          <h3 className="font-serif text-[21px] font-bold mb-2.5 text-navy">
            {t("sectorsPharma")}
          </h3>
          <p className="text-sm leading-relaxed text-text-mid mb-[18px]">
            {t("sectorsPharmaDesc")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagAntibiotics")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagColdFlu")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagPaediatric")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagOTC")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagRx")}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 border border-black/[0.06] relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl text-left">
          <div className="absolute top-5 right-6 font-serif text-[52px] font-bold text-teal/[0.08] leading-none">
            02
          </div>
          <div className="w-[54px] h-[54px] bg-navy rounded-xl flex items-center justify-center text-[26px] mb-[22px]">
            🍇
          </div>
          <h3 className="font-serif text-[21px] font-bold mb-2.5 text-navy">
            {t("sectorsDry")}
          </h3>
          <p className="text-sm leading-relaxed text-text-mid mb-[18px]">
            {t("sectorsDryDesc")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagRaisins")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagPistachios")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagAlmonds")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagApricots")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagFigs")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagWalnuts")}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-9 border border-black/[0.06] relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl text-left">
          <div className="absolute top-5 right-6 font-serif text-[52px] font-bold text-teal/[0.08] leading-none">
            03
          </div>
          <div className="w-[54px] h-[54px] bg-navy rounded-xl flex items-center justify-center text-[26px] mb-[22px]">
            🏭
          </div>
          <h3 className="font-serif text-[21px] font-bold mb-2.5 text-navy">
            {t("sectorsDehy")}
          </h3>
          <p className="text-sm leading-relaxed text-text-mid mb-[18px]">
            {t("sectorsDehyDesc")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagFruitProcessing")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagFoodPreservation")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagValueAddition")}
            </span>
            <span className="bg-teal-pale border border-cream-dark text-teal-dark text-[11px] px-2.5 py-1 rounded-full">
              {t("tagExportPackaging")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
