import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

export default function Pharmaceuticals() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-cream text-text-dark font-sans overflow-x-hidden antialiased">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-navy pt-[96px] pb-20 px-6 md:px-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(26,138,117,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,138,117,0.3) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center pt-16">
            <Link
              to="/#sectors"
              className="inline-flex items-center gap-2 text-teal-light text-[11px] tracking-[2px] uppercase mb-6 hover:opacity-80 transition-opacity"
            >
              {t("backToSectors")}
            </Link>
            <div className="text-[56px] mb-4">💊</div>
            <h1 className="font-serif text-4xl sm:text-[52px] font-bold text-white leading-tight mb-4">
              Pharmaceutical Imports
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Delivering essential medicines to Afghanistan through a trusted
              global supply chain.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 font-semibold">
                <div className="w-6 h-[1px] bg-teal" />
                OVERVIEW
              </div>
              <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-5 text-navy">
                Addressing Critical Medicine Shortages
              </h2>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                INS Group imports and distributes high-quality pharmaceutical
                products across Afghanistan, addressing critical shortages in
                antibiotics, cold &amp; flu treatments, paediatric medicines,
                and essential OTC and prescription drugs.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                Backed by BioBridge's 15+ years of global pharma expertise, we
                ensure that every product meets international quality standards
                before reaching Afghan patients and healthcare providers.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid">
                Our supply chain spans from WHO-GMP certified manufacturers to
                last-mile delivery in Afghanistan, ensuring medicine
                availability even in remote areas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-black/[0.06] text-left">
              <h3 className="font-serif text-xl font-bold text-navy mb-5">
                Key Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      WHO-GMP Certified Sourcing
                    </strong>
                    <span className="text-xs text-text-light">
                      Products sourced from internationally audited
                      manufacturers
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      End-to-End Distribution
                    </strong>
                    <span className="text-xs text-text-light">
                      From customs clearance to last-mile delivery across
                      Afghanistan
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Broad Therapeutic Range
                    </strong>
                    <span className="text-xs text-text-light">
                      Antibiotics, paediatrics, respiratory, OTC &amp; more
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Cold Chain Capable
                    </strong>
                    <span className="text-xs text-text-light">
                      Temperature-controlled logistics for sensitive products
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold">
              <div className="w-6 h-[1px] bg-teal" />
              PRODUCT RANGE
            </div>
            <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-4 text-navy">
              {t("pharmaCatTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: "💊",
                name: "Antibiotics",
                desc: "Broad-spectrum antibiotics for common and severe infections.",
              },
              {
                icon: "🤧",
                name: "Cold & Flu",
                desc: "Seasonal relief medications, antivirals, and immune support.",
              },
              {
                icon: "👶",
                name: "Paediatric Care",
                desc: "Child-safe formulations for fever, cough, and nutrition.",
              },
              {
                icon: "🏪",
                name: "OTC Drugs",
                desc: "Over-the-counter medicines for everyday health needs.",
              },
              {
                icon: "💉",
                name: "Rx Medicines",
                desc: "Prescription drugs for chronic and acute conditions.",
              },
              {
                icon: "🩺",
                name: "Hospital Supplies",
                desc: "Medical consumables and institutional healthcare products.",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-6 border border-black/[0.04] text-left hover:-translate-y-1 transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-[32px] mb-3">{cat.icon}</div>
                <h3 className="font-serif text-lg font-bold text-navy mb-1.5">
                  {cat.name}
                </h3>
                <p className="text-xs leading-relaxed text-text-mid">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-white leading-tight mb-4">
              {t("pharmaCTA")}
            </h2>
            <p className="text-[15px] text-white/60 mb-8 max-w-lg mx-auto">
              Looking for reliable pharmaceutical distribution in Afghanistan?
              Let's talk.
            </p>
            <a
              href="mailto:Business@insgroupco.com"
              className="inline-block bg-teal text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-teal-light transition-colors"
            >
              Email Business@insgroupco.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
