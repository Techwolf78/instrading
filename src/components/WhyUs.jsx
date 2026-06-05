import React from "react";
import { useLanguage } from "../LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    { num: "01", title: t("why1Title"), desc: t("why1Desc") },
    { num: "02", title: t("why2Title"), desc: t("why2Desc") },
    { num: "03", title: t("why3Title"), desc: t("why3Desc") },
    { num: "04", title: t("why4Title"), desc: t("why4Desc") },
    { num: "05", title: t("why5Title"), desc: t("why5Desc") },
    { num: "06", title: t("why6Title"), desc: t("why6Desc") },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12" id="why">
      <div className="text-center max-w-[580px] m-auto mb-[52px]">
        <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold">
          <div className="w-6 h-[1px] bg-teal" />
          {t("whyLabel")}
        </div>
        <h2 className="font-serif text-3xl sm:text-[46px] font-bold leading-tight mb-4 text-navy">
          {t("whyTitle")}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid">
          {t("whyDesc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[52px] max-w-6xl m-auto">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="bg-cream rounded-xl p-7 border border-teal/18 border-l-[3px] border-l-teal flex gap-3.5 items-start text-left"
          >
            <div className="font-serif text-3xl text-teal leading-none shrink-0 -mt-0.5">
              {r.num}
            </div>
            <div>
              <h4 className="text-[15px] font-semibold mb-1 text-navy">
                {r.title}
              </h4>
              <p className="text-[13px] leading-relaxed text-text-mid">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
