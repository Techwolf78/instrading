import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";
import clientImage1 from "../assets/ClientImage1.webp";
import clientImage2 from "../assets/ClinetImage2.webp";

const localTranslations = {
  en: {
    overview: "OVERVIEW",
    overviewTitle: "Addressing Critical Medicine Shortages",
    overviewP1: "INS Group imports and distributes high-quality pharmaceutical products across Afghanistan, addressing critical shortages in antibiotics, cold & flu treatments, paediatric medicines, and essential OTC and prescription drugs.",
    overviewP2: "Backed by BioBridge's 15+ years of global pharma expertise, we ensure that every product meets international quality standards before reaching Afghan patients and healthcare providers.",
    overviewP3: "Our supply chain spans from WHO-GMP certified manufacturers to last-mile delivery in Afghanistan, ensuring medicine availability even in remote areas.",
    keyHighlights: "Key Highlights",
    highlight1Title: "WHO-GMP Certified Sourcing",
    highlight1Desc: "Products sourced from internationally audited manufacturers",
    highlight2Title: "End-to-End Distribution",
    highlight2Desc: "From customs clearance to last-mile delivery across Afghanistan",
    highlight3Title: "Broad Therapeutic Range",
    highlight3Desc: "Antibiotics, paediatrics, respiratory, OTC & more",
    highlight4Title: "Cold Chain Capable",
    highlight4Desc: "Temperature-controlled logistics for sensitive products",
    productRange: "PRODUCT RANGE",
    domesticClients: "DOMESTIC CLIENTS",
    globalClients: "GLOBAL CLIENTS",
    ctaDesc: "Looking for reliable pharmaceutical distribution in Afghanistan? Let's talk.",
    // Categories
    catAntibioticsName: "Antibiotics",
    catAntibioticsDesc: "Broad-spectrum antibiotics for common and severe infections.",
    catColdFluName: "Cold & Flu",
    catColdFluDesc: "Seasonal relief medications, antivirals, and immune support.",
    catPaediatricName: "Paediatric Care",
    catPaediatricDesc: "Child-safe formulations for fever, cough, and nutrition.",
    catOtcName: "OTC Drugs",
    catOtcDesc: "Over-the-counter medicines for everyday health needs.",
    catRxName: "Rx Medicines",
    catRxDesc: "Prescription drugs for chronic and acute conditions.",
    catHospitalName: "Hospital Supplies",
    catHospitalDesc: "Medical consumables and institutional healthcare products.",
  },
  fa: {
    overview: "بررسی اجمالی",
    overviewTitle: "برطرف کردن کمبودهای حیاتی دارو",
    overviewP1: "گروه INS محصولات دارویی با کیفیت بالا را در سراسر افغانستان وارد و توزیع می‌کند و کمبودهای حیاتی در زمینه آنتی‌بیوتیک‌ها، درمان‌های سرماخوردگی و آنفولانزا، داروهای کودکان و داروهای ضروری بدون نسخه (OTC) و نسخه‌ای را برطرف می‌سازد.",
    overviewP2: "با پشتیبانی بیش از ۱۵ سال تخصص دارویی جهانی BioBridge، ما اطمینان حاصل می‌کنیم که هر محصول قبل از رسیدن به بیماران و ارائه‌دهندگان خدمات بهداشتی افغانستان، استانداردهای بین‌المللی کیفیت را دارا باشد.",
    overviewP3: "زنجیره تامین ما از تولیدکنندگان دارای گواهی WHO-GMP تا تحویل در آخرین مایل در افغانستان را شامل می‌شود و دسترسی به دارو را حتی در مناطق دوردست تضمین می‌کند.",
    keyHighlights: "نکات کلیدی",
    highlight1Title: "تامین از منابع دارای گواهی WHO-GMP",
    highlight1Desc: "محصولات تهیه شده از تولیدکنندگانی که به صورت بین‌المللی حسابرسی شده‌اند",
    highlight2Title: "توزیع سرتاسری",
    highlight2Desc: "از ترخیص گمرکی تا تحویل در آخرین مایل در سراسر افغانستان",
    highlight3Title: "طیف درمانی گسترده",
    highlight3Desc: "آنتی‌بیوتیک‌ها، داروهای کودکان، تنفسی، OTC و غیره",
    highlight4Title: "قابلیت زنجیره سرد",
    highlight4Desc: "لجستیک با دمای کنترل‌شده برای محصولات حساس",
    productRange: "طیف محصولات",
    domesticClients: "مشتریان داخلی",
    globalClients: "مشتریان بین‌المللی",
    ctaDesc: "به دنبال توزیع دارویی قابل اعتماد در افغانستان هستید؟ با ما گفتگو کنید.",
    // Categories
    catAntibioticsName: "آنتی‌بیوتیک‌ها",
    catAntibioticsDesc: "آنتی‌بیوتیک‌های طیف گسترده برای عفونت‌های شایع و شدید.",
    catColdFluName: "سرماخوردگی و آنفولانزا",
    catColdFluDesc: "داروهای تسکین فصلی، ضد ویروس‌ها و تقویت‌کننده‌های سیستم ایمنی.",
    catPaediatricName: "مراقبت از کودکان",
    catPaediatricDesc: "فرمولاسیون‌های ایمن برای کودکان جهت تب، سرفه و تغذیه.",
    catOtcName: "داروهای OTC",
    catOtcDesc: "داروهای بدون نسخه برای نیازهای روزمره سلامتی.",
    catRxName: "داروهای نسخه‌ای",
    catRxDesc: "داروهای نسخه‌ای برای بیماری‌های مزمن و حاد.",
    catHospitalName: "لوازم بیمارستانی",
    catHospitalDesc: "ملزومات مصرفی پزشکی و محصولات مراقبت‌های بهداشتی نهادی.",
  },
  ps: {
    overview: "عمومي کتنه",
    overviewTitle: "د درملو د جدي کمښت حل کول",
    overviewP1: "د INS ګروپ په ټول افغانستان کې د لوړ کیفیت لرونکي درملو واردول او توزیع کوي، چې په انټي بیوټیکونو، د زکام او فلو په درملنه، د ماشومانو په درملو، او د اړینو OTC او نسخې لرونکو درملو کې جدي کمښتونه حل کوي.",
    overviewP2: "د BioBridge د ۱۵+ کلونو نړیوال روغتیایی تخصص په ملاتړ، موږ ډاډ ترلاسه کوو چې هر محصول افغان ناروغانو او روغتیایی خدمتونو وړاندې کونکو ته له رسیدو دمخه نړیوال کیفیت لرونکي معیارونه پوره کوي.",
    overviewP3: "زموږ د رسولو لړۍ د WHO-GMP تصدیق شوي جوړونکو څخه په افغانستان کې د وروستي مایل تحویل پورې غزیږي، چې حتی په لیرې پرتو سیمو کې د درملو شتون تضمینوي.",
    keyHighlights: "مهمې ځانګړتیاوې",
    highlight1Title: "د WHO-GMP تصدیق شوی سرچینه",
    highlight1Desc: "محصولات د نړیواله کچه ارزول شوي تولیدونکو څخه ترلاسه کیږي",
    highlight2Title: "پوره او سرتاسري توزیع",
    highlight2Desc: "له ګمرکي محصول خلاصون څخه نیولې په ټول افغانستان کې تر وروستي مایل تحویل پورې",
    highlight3Title: "پراخه درملنې لړۍ",
    highlight3Desc: "انټي بیوټیکونه، د ماشومانو پاملرنه، تنفسي ناروغۍ، OTC او نور",
    highlight4Title: "د سړې لړۍ وړتیا",
    highlight4Desc: "د حساسو محصولاتو لپاره د تودوخې کنټرول شوي لوژستیک",
    productRange: "د محصولاتو لړۍ",
    domesticClients: "کورني پیرودونکي",
    globalClients: "نړیوال پیرودونکي",
    ctaDesc: "په افغانستان کې د درملو د باوري توزیع په لټه کې یاست؟ راځئ خبرې وکړو.",
    // Categories
    catAntibioticsName: "انټي بیوټیکونه",
    catAntibioticsDesc: "د عامو او سختو انتاناتو لپاره پراخه سپیکٹرم انټي بیوټیکونه.",
    catColdFluName: "زکام او فلو",
    catColdFluDesc: "فصلي تسکین درمل، د ویروس ضد او معافیت ملاتړ کوونکي.",
    catPaediatricName: "د ماشومانو پاملرنه",
    catPaediatricDesc: "د تبې، ټوخي او تغذیې لپاره د ماشومانو لپاره خوندي فارمولیشنونه.",
    catOtcName: "OTC درمل",
    catOtcDesc: "د ورځني روغتیا اړتیاو لپاره د نسخې پرته درمل.",
    catRxName: "نسخې درمل",
    catRxDesc: "د اوږدمهاله او حادو شرایطو لپاره د نسخې درمل.",
    catHospitalName: "د روغتون توکي",
    catHospitalDesc: "طبي مصرفي توکي او د اداري روغتیا پاملرنې محصولات.",
  }
};

export default function Pharmaceuticals() {
  const { lang, t } = useLanguage();
  const lt = (key) => localTranslations[lang]?.[key] || localTranslations.en[key] || key;

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
              className="inline-flex items-center gap-2 text-teal-light text-[11px] tracking-[2px] uppercase mb-6 hover:opacity-80 transition-opacity font-sans"
            >
              {t("backToSectors")}
            </Link>
            <div className="text-[56px] mb-4">💊</div>
            <h1 className="font-serif text-4xl sm:text-[52px] font-bold text-white leading-tight mb-4">
              {t("pharmaTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t("pharmaSubtitle")}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 font-semibold font-sans">
                <div className="w-6 h-[1px] bg-teal" />
                {lt("overview")}
              </div>
              <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-5 text-navy">
                {lt("overviewTitle")}
              </h2>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                {lt("overviewP1")}
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid mb-4">
                {lt("overviewP2")}
              </p>
              <p className="text-[15px] leading-relaxed text-text-mid">
                {lt("overviewP3")}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-black/[0.06] text-left">
              <h3 className="font-serif text-xl font-bold text-navy mb-5">
                {lt("keyHighlights")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block font-sans">
                      {lt("highlight1Title")}
                    </strong>
                    <span className="text-xs text-text-light font-sans">
                      {lt("highlight1Desc")}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block font-sans">
                      {lt("highlight2Title")}
                    </strong>
                    <span className="text-xs text-text-light font-sans">
                      {lt("highlight2Desc")}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block font-sans">
                      {lt("highlight3Title")}
                    </strong>
                    <span className="text-xs text-text-light font-sans">
                      {lt("highlight3Desc")}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center text-teal-dark text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-sm text-navy block font-sans">
                      {lt("highlight4Title")}
                    </strong>
                    <span className="text-xs text-text-light font-sans">
                      {lt("highlight4Desc")}
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
            <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold font-sans">
              <div className="w-6 h-[1px] bg-teal" />
              {lt("productRange")}
            </div>
            <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-4 text-navy">
              {t("pharmaCatTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: "💊",
                name: lt("catAntibioticsName"),
                desc: lt("catAntibioticsDesc"),
              },
              {
                icon: "🤧",
                name: lt("catColdFluName"),
                desc: lt("catColdFluDesc"),
              },
              {
                icon: "👶",
                name: lt("catPaediatricName"),
                desc: lt("catPaediatricDesc"),
              },
              {
                icon: "🏪",
                name: lt("catOtcName"),
                desc: lt("catOtcDesc"),
              },
              {
                icon: "💉",
                name: lt("catRxName"),
                desc: lt("catRxDesc"),
              },
              {
                icon: "🩺",
                name: lt("catHospitalName"),
                desc: lt("catHospitalDesc"),
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

        {/* Domestic Clients */}
        <section className="bg-cream py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sans text-3xl sm:text-[40px] font-normal tracking-wide text-navy mb-8">
                  {lt("domesticClients")}
                </h2>
                <ul className="space-y-4">
                  {[
                    "Lifenity Health Limited Nagpur, India",
                    "Genom Biotech Ltd, Sinnar, Nashik, India",
                    "Premium Serums and Vaccines Pvt Ltd, Narayangaon, Pune, India",
                    "Vigalife Pharmachem Pvt Ltd, Pune, India",
                    "Translational Health Science and technology Institute, Faridabad, India",
                    "Hilleman Laboratories, Delhi, India",
                    "Sartorius Stedim Ltd, Bangalore, India",
                    "HLL Lifecare Ltd, Chennai, India",
                    "BIBCOL, Bulandshahr, UP, India",
                    "Regenix Biosciences Ltd, Chennai, India",
                    "Vital Biologicals, Pune, India",
                  ].map((client, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] leading-relaxed text-[#2e4a5c]"
                    >
                      <svg
                        className="w-[18px] h-[18px] text-[#f5a623] shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-sans">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-gray-300 rounded-sm overflow-hidden p-1 bg-white shadow-sm">
                <img
                  src={clientImage1}
                  alt="Domestic Clients"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Clients */}
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 border border-gray-300 rounded-sm overflow-hidden p-1 bg-white shadow-sm">
                <img
                  src={clientImage2}
                  alt="Global Clients"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2 lg:pl-6">
                <h2 className="font-sans text-3xl sm:text-[40px] font-normal tracking-wide text-navy mb-8">
                  {lt("globalClients")}
                </h2>
                <ul className="space-y-4">
                  {[
                    { name: "INFARMA - Pharmaceutical Industry Ida, Mozambique", url: "https://infarma.co.mz/" },
                    { name: "BioHealth Baghdad,Iraq", url: null },
                    { name: "Incepta Vaccines Ltd, Dhaka, Bangladesh", url: null },
                    { name: "Bravovax Co. Ltd, Wuhan, China", url: null },
                    { name: "Innovations for Global Health, LLC, USA", url: null },
                    { name: "Egyvet, Cairo, Egypt", url: null },
                    { name: "Biovac, Institute, Cape town, South Africa", url: null },
                    { name: "Razi Institute, Tehran, Iran", url: null },
                    { name: "Sobhan Recombinant Protein Company, Tehran, Iran", url: null },
                    { name: "Turkilac, Turkey", url: null },
                    { name: "Vabiotech. Hanoi, Vietnam", url: null },
                  ].map((client, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[15px] leading-relaxed"
                    >
                      <svg
                        className="w-[18px] h-[18px] text-[#f5a623] shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {client.url ? (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2e4a5c] hover:text-teal transition-colors font-sans"
                        >
                          {client.name}
                        </a>
                      ) : (
                        <span className="text-[#2e4a5c] font-sans">
                          {client.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-16 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-white leading-tight mb-4">
              {t("pharmaCTA")}
            </h2>
            <p className="text-[15px] text-white/60 mb-8 max-w-lg mx-auto font-sans">
              {lt("ctaDesc")}
            </p>
            <a
              href="mailto:Business@insgroupco.com"
              className="inline-block bg-teal text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-teal-light transition-colors font-sans"
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
