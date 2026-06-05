import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Heritage() {
  const { t } = useLanguage();
  return (
    <section
      className="bg-navy text-white py-24 px-6 md:px-12 text-left"
      id="heritage"
    >
      <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 font-semibold">
        <div className="w-6 h-[1px] bg-teal" />
        {t("heritageLabel")}
      </div>
      <h2 className="font-serif text-3xl sm:text-[46px] font-bold leading-tight mb-4 text-white">
        {t("heritageTitle")}
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-white/60 max-w-[620px] mb-12">
        {t("heritageDesc")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
        {/* Left Column (Paragraphs + SMAR Grid) */}
        <div>
          <p className="text-base leading-relaxed text-white/70 mb-5">
            {t("heritageP1")}
          </p>
          <p className="text-base leading-relaxed text-white/70 mb-9">
            {t("heritageP2")}
          </p>

          {/* SMAR 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-teal/15 rounded-xl p-5">
              <div className="font-serif text-[42px] font-bold text-teal-light leading-none mb-1">
                {t("smartS")}
              </div>
              <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-white/80 mb-1">
                {t("smartSTitle")}
              </div>
              <div className="text-xs text-white/50 leading-relaxed">
                {t("smartSDesc")}
              </div>
            </div>
            <div className="bg-white/5 border border-teal/15 rounded-xl p-5">
              <div className="font-serif text-[42px] font-bold text-teal-light leading-none mb-1">
                {t("smartM")}
              </div>
              <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-white/80 mb-1">
                {t("smartMTitle")}
              </div>
              <div className="text-xs text-white/50 leading-relaxed">
                {t("smartMDesc")}
              </div>
            </div>
            <div className="bg-white/5 border border-teal/15 rounded-xl p-5">
              <div className="font-serif text-[42px] font-bold text-teal-light leading-none mb-1">
                {t("smartA")}
              </div>
              <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-white/80 mb-1">
                {t("smartATitle")}
              </div>
              <div className="text-xs text-white/50 leading-relaxed">
                {t("smartADesc")}
              </div>
            </div>
            <div className="bg-white/5 border border-teal/15 rounded-xl p-5">
              <div className="font-serif text-[42px] font-bold text-teal-light leading-none mb-1">
                {t("smartR")}
              </div>
              <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-white/80 mb-1">
                {t("smartRTitle")}
              </div>
              <div className="text-xs text-white/50 leading-relaxed">
                {t("smartRDesc")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Timeline) */}
        <div>
          <div className="flex flex-col">
            {/* Timeline Item 1 */}
            <div className="flex gap-4.5">
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-3 h-3 rounded-full bg-teal-light shrink-0 mt-1" />
                <div
                  className="w-[1px] flex-1 mt-1.5"
                  style={{ backgroundColor: "rgba(26, 138, 117, 0.2)" }}
                />
              </div>
              <div className="pb-7">
                <div className="text-[10px] text-teal-light tracking-[1px] font-semibold mb-1">
                  {t("tl1Year")}
                </div>
                <div className="text-sm text-white font-semibold mb-1">
                  {t("tl1Title")}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {t("tl1Desc")}
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-4.5">
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-3 h-3 rounded-full bg-teal-light shrink-0 mt-1" />
                <div
                  className="w-[1px] flex-1 mt-1.5"
                  style={{ backgroundColor: "rgba(26, 138, 117, 0.2)" }}
                />
              </div>
              <div className="pb-7">
                <div className="text-[10px] text-teal-light tracking-[1px] font-semibold mb-1">
                  {t("tl2Year")}
                </div>
                <div className="text-sm text-white font-semibold mb-1">
                  {t("tl2Title")}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {t("tl2Desc")}
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-4.5">
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-3 h-3 rounded-full bg-teal-light shrink-0 mt-1" />
                <div
                  className="w-[1px] flex-1 mt-1.5"
                  style={{ backgroundColor: "rgba(26, 138, 117, 0.2)" }}
                />
              </div>
              <div className="pb-7">
                <div className="text-[10px] text-teal-light tracking-[1px] font-semibold mb-1">
                  {t("tl3Year")}
                </div>
                <div className="text-sm text-white font-semibold mb-1">
                  {t("tl3Title")}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {t("tl3Desc")}
                </div>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex gap-4.5">
              <div className="flex flex-col items-center shrink-0 w-4">
                <div className="w-3 h-3 rounded-full bg-teal-light shrink-0 mt-1" />
              </div>
              <div>
                <div className="text-[10px] text-teal-light tracking-[1px] font-semibold mb-1">
                  {t("tl4Year")}
                </div>
                <div className="text-sm text-white font-semibold mb-1">
                  {t("tl4Title")}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">
                  {t("tl4Desc")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-teal/15 mt-[52px] rounded-xl overflow-hidden">
        <div className="bg-white/[0.04] p-7 text-center">
          <div className="text-[26px] mb-2">🎯</div>
          <div className="text-xs font-semibold text-teal-light mb-1">
            {t("val1Title")}
          </div>
          <div className="text-xs text-white/50">{t("val1Desc")}</div>
        </div>
        <div className="bg-white/[0.04] p-7 text-center">
          <div className="text-[26px] mb-2">🤝</div>
          <div className="text-xs font-semibold text-teal-light mb-1">
            {t("val2Title")}
          </div>
          <div className="text-xs text-white/50">{t("val2Desc")}</div>
        </div>
        <div className="bg-white/[0.04] p-7 text-center">
          <div className="text-[26px] mb-2">⚡</div>
          <div className="text-xs font-semibold text-teal-light mb-1">
            {t("val3Title")}
          </div>
          <div className="text-xs text-white/50">{t("val3Desc")}</div>
        </div>
      </div>
    </section>
  );
}
