import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

export default function DryFruitsExport() {
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
            <div className="text-[56px] mb-4">🍇</div>
            <h1 className="font-serif text-4xl sm:text-[52px] font-bold text-white leading-tight mb-4">
              {t("dryTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("drySubtitle")}
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
                Premium Afghan Produce for the World
              </h2>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                Afghanistan produces some of the world's finest dry fruits —
                renowned for their exceptional taste, quality, and nutritional
                value. INS exports these premium agricultural products to India
                and international markets.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                By connecting Afghan farmers directly with global buyers, we
                create sustainable income for rural communities while delivering
                world-class products to consumers worldwide.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid">
                Our export operations adhere to international food safety and
                quality standards, ensuring that every shipment meets the
                expectations of discerning buyers.
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
                      Direct Farm Sourcing
                    </strong>
                    <span className="text-xs text-text-light">
                      Ethically sourced from Afghan farming communities
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Export to India &amp; Beyond
                    </strong>
                    <span className="text-xs text-text-light">
                      Established trade routes to major international markets
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Quality Certified
                    </strong>
                    <span className="text-xs text-text-light">
                      Meeting international food safety and grading standards
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Sustainable Impact
                    </strong>
                    <span className="text-xs text-text-light">
                      Creating livelihoods for Afghan farmers and communities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold">
              <div className="w-6 h-[1px] bg-teal" />
              PRODUCT RANGE
            </div>
            <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-4 text-navy">
              {t("dryCatTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: "🍇",
                name: "Raisins",
                desc: "Premium sun-dried grapes from the vineyards of northern Afghanistan.",
              },
              {
                icon: "🥜",
                name: "Pistachios",
                desc: "Rich, flavourful pistachios with the signature Afghan taste.",
              },
              {
                icon: "🌰",
                name: "Almonds",
                desc: "High-quality almonds with superior texture and nutritional value.",
              },
              {
                icon: "🍑",
                name: "Apricots",
                desc: "Sun-dried apricots with intense natural sweetness.",
              },
              {
                icon: "🫐",
                name: "Figs",
                desc: "Tender, flavourful dried figs from Afghan orchards.",
              },
              {
                icon: "🥥",
                name: "Walnuts",
                desc: "Whole and shelled walnuts with premium oil content.",
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
              {t("dryCTA")}
            </h2>
            <p className="text-[15px] text-white/60 mb-8 max-w-lg mx-auto">
              Interested in importing premium Afghan dry fruits? Get in touch
              with our export team.
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
