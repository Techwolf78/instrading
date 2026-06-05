import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  return (
    <div className="bg-navy-mid border-t border-b border-teal/20 py-8 px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="text-center px-5 border-r border-teal/15 max-md:border-r max-md:even:border-r-0">
        <div className="font-serif text-[38px] font-bold text-teal-light leading-none">
          15+
        </div>
        <div className="text-[11px] text-white/50 tracking-[1px] uppercase mt-1.5">
          {t("statsYears")}
        </div>
      </div>
      <div className="text-center px-5 border-r border-teal/15 max-md:border-r-0">
        <div className="font-serif text-[38px] font-bold text-teal-light leading-none">
          3
        </div>
        <div className="text-[11px] text-white/50 tracking-[1px] uppercase mt-1.5">
          {t("statsSectors")}
        </div>
      </div>
      <div className="text-center px-5 border-r border-teal/15 max-md:border-r max-md:even:border-r-0">
        <div className="font-serif text-[38px] font-bold text-teal-light leading-none">
          80+
        </div>
        <div className="text-[11px] text-white/50 tracking-[1px] uppercase mt-1.5">
          {t("statsExperience")}
        </div>
      </div>
      <div className="text-center px-5 border-none">
        <div className="font-serif text-[38px] font-bold text-teal-light leading-none">
          5+
        </div>
        <div className="text-[11px] text-white/50 tracking-[1px] uppercase mt-1.5">
          {t("statsNations")}
        </div>
      </div>
    </div>
  );
}
