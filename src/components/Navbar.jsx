import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LOGO_SRC } from "../constants";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
    { code: "ps", label: "پښتو" },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: t("navAbout"), href: "#about" },
    { label: t("navHeritage"), href: "#heritage" },
    { label: t("navWhyUs"), href: "#why" },
    { label: t("navTeam"), href: "/team" },
    { label: t("navContact"), href: "#contact" },
  ];

  const sectorSubLinks = [
    { label: t("navPharma"), path: "/pharmaceuticals", icon: "💊" },
    { label: t("navDryFruits"), path: "/dry-fruits-export", icon: "🍇" },
    { label: t("navDehydration"), path: "/dehydration-plant", icon: "🏭" },
  ];

  const isHomePage = location.pathname === "/";

  const scrollToSection = (id) => {
    if (!isHomePage) {
      navigate("/#" + id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
    setSectorsOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  const handleSectorNav = (path) => {
    navigate(path);
    setIsOpen(false);
    setSectorsOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-teal/25 px-6 md:px-12 flex items-center justify-between h-[96px]">
      <button
        onClick={handleLogoClick}
        className="flex items-center gap-3 no-underline bg-transparent border-none cursor-pointer"
      >
        <img
          src={LOGO_SRC}
          className="w-[84px] h-[84px] object-contain"
          alt="INS Logo"
        />
        <div className="text-left">
          <strong className="block text-white text-[17px] font-semibold tracking-[1.5px] leading-tight">
            {t("navInsGroup")}
          </strong>
          <span className="text-teal-light text-[10px] tracking-[1.5px] uppercase block">
            {t("navSubtitle")}
          </span>
        </div>
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-7 list-none m-0 p-0 items-center flex-1 justify-center">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => {
                if (link.href.startsWith("/")) {
                  navigate(link.href);
                  setIsOpen(false);
                } else {
                  scrollToSection(link.href.replace("#", ""));
                }
              }}
              className="text-white/70 no-underline text-xs tracking-[0.3px] transition-colors hover:text-teal-light bg-transparent border-none cursor-pointer font-sans"
            >
              {link.label}
            </button>
          </li>
        ))}

        {/* Sectors Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setSectorsOpen(true)}
          onMouseLeave={() => setSectorsOpen(false)}
        >
          <button
            onClick={() => setSectorsOpen((prev) => !prev)}
            className="text-white/70 no-underline text-xs tracking-[0.3px] transition-colors hover:text-teal-light bg-transparent border-none cursor-pointer font-sans flex items-center gap-1"
          >
            {t("navSectors")}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${sectorsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {sectorsOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <div className="bg-navy border border-teal/25 rounded-xl shadow-xl overflow-hidden min-w-[200px]">
                {sectorSubLinks.map((sub) => (
                  <button
                    key={sub.path}
                    onClick={() => handleSectorNav(sub.path)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.06] text-xs tracking-[0.3px] transition-colors bg-transparent border-none cursor-pointer font-sans"
                  >
                    <span className="text-base">{sub.icon}</span>
                    {sub.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </li>
        {/* Language Pills */}
        <li>
          <div className="flex gap-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[11px] font-semibold tracking-[0.5px] px-2.5 py-1 rounded-full cursor-pointer font-sans transition-all duration-200 border ${
                  lang === l.code
                    ? "bg-teal text-white border-teal"
                    : "bg-transparent text-white/60 border-white/25 hover:text-white hover:border-white/50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </li>
      </ul>

      <button
        onClick={scrollToContact}
        className="hidden md:block bg-teal border-none text-white px-[22px] py-[9px] rounded font-medium text-xs cursor-pointer transition-colors hover:bg-teal-light tracking-[0.3px] ml-auto"
      >
        {t("navPartner")}
      </button>

      {/* Mobile Hamburger menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[96px] left-0 right-0 bg-navy border-b border-teal/25 flex flex-col items-center py-4 gap-4 md:hidden shadow-lg animate-fadeIn">
          <button
            onClick={() => {
              scrollToSection("sectors");
              setSectorsOpen(!sectorsOpen);
            }}
            className="text-white/70 no-underline text-sm tracking-[0.3px] hover:text-teal-light bg-transparent border-none cursor-pointer font-sans flex items-center gap-1"
          >
            {t("navSectors")}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${sectorsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {sectorsOpen && (
            <div className="flex flex-col items-center gap-3 w-full px-8">
              {sectorSubLinks.map((sub) => (
                <button
                  key={sub.path}
                  onClick={() => handleSectorNav(sub.path)}
                  className="text-white/60 hover:text-teal-light text-xs tracking-[0.3px] bg-transparent border-none cursor-pointer font-sans flex items-center gap-2"
                >
                  <span>{sub.icon}</span>
                  {sub.label}
                </button>
              ))}
            </div>
          )}
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                if (link.href.startsWith("/")) {
                  navigate(link.href);
                  setIsOpen(false);
                } else {
                  scrollToSection(link.href.replace("#", ""));
                }
              }}
              className="text-white/70 no-underline text-sm tracking-[0.3px] hover:text-teal-light bg-transparent border-none cursor-pointer font-sans"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={scrollToContact}
            className="bg-teal border-none text-white px-6 py-2.5 rounded font-medium text-xs cursor-pointer transition-colors hover:bg-teal-light tracking-[0.3px] w-[80%]"
          >
            {t("navPartner")}
          </button>
          <div className="flex gap-1.5 w-[80%] justify-center">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`text-xs font-semibold tracking-[0.5px] px-3 py-1.5 rounded-full cursor-pointer font-sans transition-all duration-200 border ${
                  lang === l.code
                    ? "bg-teal text-white border-teal"
                    : "bg-transparent text-white/60 border-white/25 hover:text-white hover:border-white/50"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
