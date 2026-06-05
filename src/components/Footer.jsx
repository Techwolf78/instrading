import React from "react";
import { LOGO_SRC } from "../constants";
import signatureImg from "../assets/SignatureINS.jpg";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy py-12 px-6 md:px-12 border-t border-teal/15 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-9">
        {/* Brand Column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-3.5">
            <img
              src={LOGO_SRC}
              className="w-[64px] h-[64px] object-contain rounded-full"
              alt="INS Logo"
            />
            <div>
              <strong className="block text-white text-sm tracking-[1.5px] font-semibold uppercase">
                INS GROUP
              </strong>
              <span className="text-teal-light text-[9px] tracking-[1.5px] uppercase block">
                Imran Nazir Shyam Trading Company
              </span>
            </div>
          </div>
          <p className="text-[13px] text-white/40 leading-relaxed max-w-[280px]">
            Transcending Borders, Transforming Lives. A registered Afghan
            company bridging Afghanistan's trade with the world — backed by
            BioBridge's global healthcare expertise.
          </p>
          <p className="text-[11px] text-white/30 mt-3">
            شرکت تجارتی عمران نذیر شام
          </p>
          <div className="mt-4">
            <img
              src={signatureImg}
              className="h-[40px] w-auto opacity-80"
              alt="INS Signature"
            />
          </div>
        </div>

        {/* Sectors */}
        <div>
          <h5 className="text-[10px] tracking-[2px] uppercase text-teal-light mb-3.5 font-bold">
            {t("footerSectors")}
          </h5>
          <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#sectors"
              >
                {t("footerPharma")}
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#sectors"
              >
                {t("footerDry")}
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#sectors"
              >
                {t("footerDehy")}
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-[10px] tracking-[2px] uppercase text-teal-light mb-3.5 font-bold">
            {t("footerCompany")}
          </h5>
          <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#about"
              >
                {t("footerAbout")}
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#heritage"
              >
                {t("footerHeritage")}
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#why"
              >
                {t("footerWhy")}
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="#contact"
              >
                {t("footerContact")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-[10px] tracking-[2px] uppercase text-teal-light mb-3.5 font-bold">
            {t("footerContactCol")}
          </h5>
          <ul className="list-none flex flex-col gap-2.5 p-0 m-0">
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="mailto:Business@insgroupco.com"
              >
                Business@insgroupco.com
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="mailto:shyam@insgroupco.com"
              >
                shyam@insgroupco.com
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="tel:+93764529206"
              >
                +93 764 529 206 (AF)
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="tel:+918169020598"
              >
                +91 816 902 0598 (IN)
              </a>
            </li>
            <li>
              <a
                className="text-white/50 no-underline text-xs transition-colors hover:text-teal-light"
                href="https://biobridge.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                BioBridge India ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center flex-wrap gap-2.5">
        <p className="text-[11px] text-white/28 m-0">{t("footerCopy")}</p>
        <div className="text-[11px] text-white/28 flex items-center gap-1.5">
          <span>{t("footerSister")}</span>
          <a
            className="text-teal-light no-underline hover:underline font-medium inline-flex items-center gap-1.5"
            href="https://biobridge.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            biobridge.in
          </a>
        </div>
      </div>
    </footer>
  );
}
