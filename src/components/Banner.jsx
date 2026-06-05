import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Banner() {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden h-[420px] bg-navy flex items-center justify-center">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1400 420"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bg1" cx="30%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1A8A75" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0D2137" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg2" cx="80%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#2BB89A" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0D2137" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* deep navy base */}
        <rect width="1400" height="420" fill="#0D2137" />
        {/* glow blobs */}
        <ellipse cx="380" cy="210" rx="420" ry="280" fill="url(#bg1)" />
        <ellipse cx="1050" cy="140" rx="380" ry="240" fill="url(#bg2)" />
        {/* grid lines */}
        <g stroke="#1A8A75" strokeOpacity="0.07" strokeWidth="1">
          <line x1="0" y1="70" x2="1400" y2="70" />
          <line x1="0" y1="140" x2="1400" y2="140" />
          <line x1="0" y1="210" x2="1400" y2="210" />
          <line x1="0" y1="280" x2="1400" y2="280" />
          <line x1="0" y1="350" x2="1400" y2="350" />
          <line x1="175" y1="0" x2="175" y2="420" />
          <line x1="350" y1="0" x2="350" y2="420" />
          <line x1="525" y1="0" x2="525" y2="420" />
          <line x1="700" y1="0" x2="700" y2="420" />
          <line x1="875" y1="0" x2="875" y2="420" />
          <line x1="1050" y1="0" x2="1050" y2="420" />
          <line x1="1225" y1="0" x2="1225" y2="420" />
        </g>
        {/* Mountain silhouette */}
        <g opacity="0.06" fill="#2BB89A">
          <polygon points="600,320 680,180 760,320" />
          <polygon points="680,320 780,140 880,320" />
          <polygon points="760,320 840,200 920,320" />
          <polygon points="520,320 600,220 680,320" />
        </g>
        {/* Decorative circle arcs */}
        <circle
          cx="700"
          cy="210"
          r="170"
          fill="none"
          stroke="#1A8A75"
          strokeWidth="1"
          strokeOpacity="0.12"
          strokeDasharray="8 6"
        />
        <circle
          cx="700"
          cy="210"
          r="210"
          fill="none"
          stroke="#2BB89A"
          strokeWidth="1"
          strokeOpacity="0.08"
          strokeDasharray="4 8"
        />
        {/* Upward arrow accent */}
        <g
          opacity="0.12"
          stroke="#2BB89A"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1180,300 1220,200 1260,300" />
          <line x1="1220" y1="200" x2="1220" y2="340" />
        </g>
        {/* Left side accent lines */}
        <g stroke="#1A8A75" strokeOpacity="0.15" strokeWidth="1.5">
          <line x1="80" y1="160" x2="160" y2="160" />
          <line x1="60" y1="180" x2="180" y2="180" />
          <line x1="80" y1="200" x2="160" y2="200" />
        </g>
        {/* Right side accent lines */}
        <g stroke="#1A8A75" strokeOpacity="0.15" strokeWidth="1.5">
          <line x1="1240" y1="240" x2="1320" y2="240" />
          <line x1="1220" y1="260" x2="1340" y2="260" />
          <line x1="1240" y1="280" x2="1320" y2="280" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="font-serif text-2xl sm:text-[40px] md:text-[52px] text-white font-bold leading-tight mb-3.5">
          {t("bannerTitle1")}{" "}
          <em className="not-italic text-teal-light">{t("bannerTitle2")}</em>
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-[580px] m-auto mb-7 leading-relaxed">
          {t("bannerDesc")}
        </p>
        <div className="flex flex-wrap gap-2.5 justify-center max-w-xl m-auto">
          <div className="flex items-center gap-1.5 bg-white/[0.08] border border-teal/35 rounded-full px-4 py-2 text-xs sm:text-[13px] text-white/85">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-light" />
            💊 {t("bannerPharma")}
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.08] border border-teal/35 rounded-full px-4 py-2 text-xs sm:text-[13px] text-white/85">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-light" />
            🍇 {t("bannerDry")}
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.08] border border-teal/35 rounded-full px-4 py-2 text-xs sm:text-[13px] text-white/85">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-light" />
            🏭 {t("bannerDehy")}
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.08] border border-teal/35 rounded-full px-4 py-2 text-xs sm:text-[13px] text-white/85">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-light" />
            🤝 {t("bannerBio")}
          </div>
        </div>
      </div>
    </div>
  );
}
