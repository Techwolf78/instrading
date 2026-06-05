import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";

export default function DehydrationPlant() {
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
            <div className="text-[56px] mb-4">🏭</div>
            <h1 className="font-serif text-4xl sm:text-[52px] font-bold text-white leading-tight mb-4">
              {t("dehyTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("dehySubtitle")}
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
                Adding Value Through Dehydration
              </h2>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                Our industrial dehydration plant processes fresh Afghan produce
                into high-quality, shelf-stable products — reducing post-harvest
                waste, extending shelf life, and unlocking premium market access
                for Afghan agricultural output.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                Using advanced drying technology, we preserve the natural
                nutrition, flavour, and colour of fresh fruits and vegetables,
                making them viable for export to demanding international
                markets.
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid">
                This operation represents a significant step in Afghanistan's
                agricultural value addition capabilities, creating new economic
                opportunities along the entire supply chain.
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
                      Modern Processing Technology
                    </strong>
                    <span className="text-xs text-text-light">
                      Advanced dehydration equipment for consistent quality
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Waste Reduction
                    </strong>
                    <span className="text-xs text-text-light">
                      Extending shelf life and minimizing post-harvest losses
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Export-Ready Processing
                    </strong>
                    <span className="text-xs text-text-light">
                      Products packaged to international export standards
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block">
                      Nutrition Preservation
                    </strong>
                    <span className="text-xs text-text-light">
                      Retaining natural flavour, colour, and nutritional value
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold">
              <div className="w-6 h-[1px] bg-teal" />
              OUR PROCESS
            </div>
            <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-4 text-navy">
              {t("dehyProcessTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                icon: "🌾",
                title: "Sourcing",
                desc: "Fresh produce sourced directly from Afghan farms at peak ripeness.",
              },
              {
                num: "02",
                icon: "🚿",
                title: "Cleaning & Sorting",
                desc: "Rigorous washing, grading, and sorting for quality consistency.",
              },
              {
                num: "03",
                icon: "🌡️",
                title: "Dehydration",
                desc: "Controlled drying using advanced temperature and airflow systems.",
              },
              {
                num: "04",
                icon: "📦",
                title: "Packaging",
                desc: "Hygienic packaging in export-ready, shelf-stable formats.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-6 border border-black/[0.04] text-left hover:-translate-y-1 transition-all duration-200 hover:shadow-lg relative"
              >
                <div className="absolute top-4 right-5 font-serif text-[40px] font-bold text-teal/[0.08] leading-none">
                  {step.num}
                </div>
                <div className="text-[28px] mb-3">{step.icon}</div>
                <h3 className="font-serif text-base font-bold text-navy mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-text-mid">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-white leading-tight mb-4">
              {t("dehyCTA")}
            </h2>
            <p className="text-[15px] text-white/60 mb-8 max-w-lg mx-auto">
              Interested in our dehydration capabilities or partnership
              opportunities? Reach out to us.
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
