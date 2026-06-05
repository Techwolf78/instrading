import React from "react";
import { useLanguage } from "../LanguageContext";
import shyamImg from "../assets/shyam.jpg";
import ganeshImg from "../assets/team_ganesh.png";
import imranImg from "../assets/Imran.jpg";
import nazirImg from "../assets/Nazir.jpeg";
import ummeaimanImg from "../assets/Ummi.png";
import shashiImg from "../assets/Shashi.jpeg";
import femalePlaceholderImg from "../assets/femaleplaceholder.png";

const leadershipMembers = [
  {
    name: "Mohammad Imran Nazari",
    role: "Chairman",
    roleKey: "roleChairman",
    titleKey: "titleChairman",
    image: imranImg,
    pillClass: "bg-teal/15 text-teal-dark border border-teal/30",
    gradient:
      "linear-gradient(135deg, rgba(26,138,117,0.1) 0%, rgba(13,33,55,0.12) 100%)",
    title: "Chairman, INS Group of Companies · Kabul, Afghanistan",
    bioKey: "bioChairman",
    bio: "Mohammad Imran Nazari is the founding Chairman of INS Group of Companies, registered in Afghanistan. With deep roots in Afghan business and trade, he leads the company's strategic direction and on-ground operations across pharmaceutical imports, dry fruits export, and industrial dehydration. His vision is to build sustainable trade bridges between Afghanistan and the world, creating economic opportunities for Afghan communities while meeting the nation's critical import needs.",
    tags: ["Afghan Trade", "Strategic Leadership", "Business Development"],
    tagKeys: ["tagAfghanTrade", "tagStrategicLeadership", "tagBusinessDev"],
    wide: true,
  },
  {
    name: "Mr. Shyam Kumraj",
    role: "Vice Chairman",
    roleKey: "roleViceChairman",
    titleKey: "titleViceChairman",
    image: shyamImg,
    wide: true,
    pillClass: "bg-navy/8 text-navy border border-navy/20",
    gradient:
      "linear-gradient(135deg, rgba(13,33,55,0.08) 0%, rgba(26,138,117,0.06) 100%)",
    title: "Vice Chairman, INS · Director Finance & Operations, BioBridge",
    bioKey: "bioViceChairman",
    bio: "A Finance, Legal, Export-Import and Supply Chain professional with formal education in Commerce, Management, Foreign Trade, Law and Supply Chain Management. He brings over 26 years of experience with prior assignments at Kinetic Engineering, Godrej Group and Reliance Industries. At BioBridge since 2011, he has overseen Business Development, Finance, HR, Legal, Admin and Commercial functions. At INS, he guides financial strategy and international trade operations.",
    tags: ["Finance & Legal", "Export-Import", "Supply Chain", "26+ Yrs"],
    tagKeys: [
      "tagFinanceLegal",
      "tagExportImport",
      "tagSupplyChain",
      "tag26Yrs",
    ],
    wide: true,
  },
  {
    name: "Dr. Ganesh Kumraj",
    role: "Director",
    roleKey: "roleDirector",
    titleKey: "titleDirector",
    image: ganeshImg,
    pillClass: "bg-[#0f5c4e]/10 text-teal-dark border border-[#0f5c4e]/25",
    gradient:
      "linear-gradient(135deg, rgba(15,92,78,0.08) 0%, rgba(26,138,117,0.06) 100%)",
    title: "Director, INS · Founder & CEO, BioBridge Healthcare",
    qual: "M.Sc. Industrial Microbiology · Ph.D",
    qualKey: "qualDirector",
    bioKey: "bioDirector",
    bio: "Quality and operations management professional with 37+ years in the biotechnology industry. Former President of Operations at Bharat Serums & Vaccines Ltd., with roles at Panacea Biotec, Bharat Immunologicals, NEERI and National Cell Culture Sciences. Enlisted by WHO Geneva on their NRA expert panel; conducted cGMP training under the Global Training Network. Has faced audits from WHO, USFDA, EMEA and NAFDAC.",
    tags: ["Pharma & Biotech", "WHO Expert", "Quality Management", "37+ Yrs"],
    tagKeys: ["tagPharmaBiotech", "tagWHOExpert", "tagQualityMgmt", "tag37Yrs"],
    wide: true,
  },
];

const advisoryMembers = [
  {
    name: "Mr. Nazir Nazari",
    role: "",
    roleKey: "",
    hideBadge: true,
    titleKey: "",
    image: nazirImg,
    pillClass: "bg-[#2bb89a]/12 text-teal-dark border border-[#2bb89a]/30",
    gradient:
      "linear-gradient(135deg, rgba(13,33,55,0.07) 0%, rgba(43,184,154,0.06) 100%)",
    title: "Head of Business, Gryphon Academy",
    bioKey: "bioHeadOfBusiness",
    bio: "Mr. Nazir Nazari serves as Head of Business at Gryphon Academy, driving the company's commercial operations and client relationships across Afghanistan. With hands-on experience in business development and delivery management — including his role at Gryphon Academy — he brings a strong understanding of cross-sector project execution, institutional coordination, and operational management. At INS, he oversees business planning, partner engagement and day-to-day commercial activities.",
    tags: ["Business Development", "Operations", "Project Delivery"],
    tagKeys: ["tagBusinessDev", "tagOperations", "tagProjectDelivery"],
    wide: true,
  },
  {
    name: "Ms. Ummeaiman Ansari",
    role: "",
    roleKey: "",
    hideBadge: true,
    titleKey: "",
    image: femalePlaceholderImg,
    pillClass: "bg-teal/12 text-teal-dark border border-teal/25",
    gradient:
      "linear-gradient(135deg, rgba(26,138,117,0.09) 0%, rgba(13,33,55,0.07) 100%)",
    title: "Co-Founder, Gryphon Academy",
    bioKey: "bioDirectorSales",
    bio: "Ms. Ummeaiman Ansari is the Co-Founder of Gryphon Academy Pvt. Ltd., Pune — a corporate training firm bridging the gap between industry and academia. Known for her visionary leadership, exceptional time management and ability to guide teams through high-pressure environments, she has driven institutional outreach across leading colleges and corporates in India. At INS, she leads sales strategy, market development and brand partnerships — connecting Afghan trade with Indian and global buyers.",
    tags: [
      "Sales Strategy",
      "Market Development",
      "Corporate Training",
      "Leadership",
    ],
    tagKeys: [
      "tagSalesStrategy",
      "tagMarketDev",
      "tagCorporateTraining",
      "tagLeadership",
    ],
    wide: true,
  },
  {
    name: "Mr. Shashi Bhat",
    role: "",
    roleKey: "",
    hideBadge: true,
    titleKey: "",
    image: shashiImg,
    pillClass: "bg-navy/6 text-navy-light border border-navy/15",
    gradient:
      "linear-gradient(135deg, rgba(13,33,55,0.1) 0%, rgba(26,138,117,0.05) 100%)",
    title: "Founder, Gryphon Academy",
    bioKey: "bioAdvisor",
    bio: "Founder and Director of Gryphon Academy Pvt. Ltd., Pune, with a distinguished career spanning Cisco Systems (Senior Sales & Marketing), Vcustomer India Services, and Indira Group of Institutes (Director, Corporate Relations). He brings deep expertise in strategic planning, corporate relations, team management and business development. His advisory role at INS draws on his extensive network across Indian industry, academia and corporate sectors, supporting expansion and institutional partnerships in India.",
    tags: [
      "Strategic Planning",
      "Corporate Relations",
      "Cisco Alumni",
      "Advisor",
    ],
    tagKeys: [
      "tagStrategicPlanning",
      "tagCorporateRelations",
      "tagCiscoAlumni",
      "tagAdvisor",
    ],
    wide: true,
  },
];

export default function Team() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream py-12 px-6 md:px-12" id="team">
      {/* Section Header */}
      <div className="text-center max-w-[640px] mx-auto mb-14">
        <h2 className="font-serif text-3xl sm:text-[46px] font-bold leading-tight text-navy">
          {t("teamTitle")}
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-text-mid mt-3">
          {t("teamDesc")}
        </p>
      </div>

      {/* INS Leadership */}
      <div className="mb-8 text-left max-w-6xl mx-auto">
        <div className="flex items-center gap-3 text-teal text-2xl tracking-[2px] uppercase font-bold">
          <div className="w-10 h-[2px] bg-teal" />
          INS Leadership
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl m-auto mb-16">
        {leadershipMembers.map((member, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-black/[0.07] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col text-left ${member.wide ? "md:col-span-2 md:flex-row" : ""}`}
          >
            {/* Photo Slot */}
            {member.image && (
              <div
                className={`shrink-0 ${member.wide ? "md:w-[240px] md:h-[300px]" : ""}`}
              >
                <div
                  className={`w-full h-full min-h-[220px] flex flex-col items-center justify-center gap-2 border-dashed border-teal/20 cursor-pointer transition-colors duration-200 hover:opacity-95 ${member.wide ? "md:border-r-2 md:border-t-0 md:border-b-0 md:border-l-0 rounded-none" : "border-b-2 rounded-none"}`}
                  style={{ background: member.gradient }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div
                  className={`inline-block text-[10px] font-semibold tracking-[1.5px] uppercase py-1 px-3 rounded-full mb-2.5 ${member.pillClass}`}
                >
                  {t(member.roleKey)}
                </div>
                <h3 className="font-serif text-[19px] text-navy mb-0.5 leading-tight font-bold">
                  {member.name}
                </h3>
                <p className="text-[11px] text-teal-dark font-semibold leading-tight mb-0.5">
                  {t(member.titleKey || member.title)}
                </p>
                {member.qual && (
                  <p className="text-[10px] text-text-light tracking-[0.5px] mb-0.5">
                    {t(member.qualKey || member.qual)}
                  </p>
                )}

                <div className="w-7 h-[2px] bg-teal rounded-sm my-3" />
                <p className="text-xs sm:text-[13px] leading-relaxed text-text-mid mb-4.5">
                  {t(member.bioKey || member.bio)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {(member.tagKeys || member.tags).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-pale border border-cream-dark text-teal-dark text-[10px] px-2 py-0.5 rounded-full font-medium"
                  >
                    {member.tagKeys ? t(tag) : tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advisory Board */}
      <div className="mt-20 mb-8 text-left max-w-6xl mx-auto">
        <div className="flex items-center gap-3 text-teal text-2xl tracking-[2px] uppercase font-bold">
          <div className="w-10 h-[2px] bg-teal" />
          Advisory Board
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl m-auto">
        {advisoryMembers.map((member, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-black/[0.07] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col text-left ${member.wide ? "md:col-span-2 md:flex-row" : ""}`}
          >
            {member.image && (
              <div
                className={`shrink-0 ${member.wide ? "md:w-[240px] md:h-[300px]" : ""}`}
              >
                <div
                  className={`w-full h-full min-h-[220px] flex flex-col items-center justify-center gap-2 border-dashed border-teal/20 cursor-pointer transition-colors duration-200 hover:opacity-95 ${member.wide ? "md:border-r-2 md:border-t-0 md:border-b-0 md:border-l-0 rounded-none" : "border-b-2 rounded-none"}`}
                  style={{ background: member.gradient }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                {!member.hideBadge && member.roleKey && (
                  <div
                    className={`inline-block text-[10px] font-semibold tracking-[1.5px] uppercase py-1 px-3 rounded-full mb-2.5 ${member.pillClass}`}
                  >
                    {t(member.roleKey)}
                  </div>
                )}
                <h3 className="font-serif text-[19px] text-navy mb-0.5 leading-tight font-bold">
                  {member.name}
                </h3>
                <p className="text-[11px] text-teal-dark font-semibold leading-tight mb-0.5">
                  {member.title}
                </p>
                {member.qual && (
                  <p className="text-[10px] text-text-light tracking-[0.5px] mb-0.5">
                    {t(member.qualKey || member.qual)}
                  </p>
                )}

                <div className="w-7 h-[2px] bg-teal rounded-sm my-3" />
                <p className="text-xs sm:text-[13px] leading-relaxed text-text-mid mb-4.5">
                  {t(member.bioKey || member.bio)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {(member.tagKeys || member.tags).map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-teal-pale border border-cream-dark text-teal-dark text-[10px] px-2 py-0.5 rounded-full font-medium"
                  >
                    {member.tagKeys ? t(tag) : tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
