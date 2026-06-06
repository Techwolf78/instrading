import React, { createContext, useContext, useState } from "react";

const translations = {
  en: {
    /* Navbar */
    navAbout: "About",
    navSectors: "Sectors",
    navHeritage: "Heritage",
    navWhyUs: "Why Us",
    navTeam: "Team",
    navContact: "Contact",
    navPharma: "Pharmaceuticals",
    navDryFruits: "Dry Fruits Export",
    navDehydration: "Dehydration Plant",
    navPartner: "Partner With Us",
    navInsGroup: "INS GROUP",
    navSubtitle: "Imran Nazir Shyam Trading Co.",
    langSwitch: "پښتو",

    /* Hero */
    heroBadge: "Registered in Afghanistan · Sister Concern of BioBridge India",
    heroTitle1: "Connecting Afghanistan",
    heroTitle2: "to the World again",
    heroDari: "شرکت تجارتی عمران نذیر شام",
    heroDesc:
      "INS Group — Imran Nazir Shyam Trading Company — is a registered Afghan enterprise operating across Pharmaceutical Imports, Dry Fruits Exports, and Industrial Dehydration, backed by BioBridge's 15+ years of global healthcare expertise.",
    heroExplore: "Explore Our Sectors",
    heroGetInTouch: "Get in Touch",
    heroAfg: "Afghanistan",
    heroRegHQ: "Registered HQ",
    heroPharma: "Pharma Import",
    heroEssential: "Essential Medicines",
    heroDry: "Dry Fruits",
    heroExport: "Export to India",
    heroDehy: "Dehydration",
    heroPlant: "Plant Operations",

    /* Stats */
    statsYears: "Years Combined Expertise",
    statsSectors: "Business Sectors",
    statsExperience: "Years Team Experience",
    statsNations: "Global Partner Nations",

    /* Banner */
    bannerTitle1: "Afghanistan's Gateway to",
    bannerTitle2: "Global Trade",
    bannerDesc:
      "Connecting essential medicines, premium dry fruits, and agricultural innovation — from the heart of Afghanistan to the world.",
    bannerPharma: "Pharmaceutical Import",
    bannerDry: "Dry Fruits Export",
    bannerDehy: "Dehydration Plant",
    bannerBio: "BioBridge Partnership",

    /* About */
    aboutWho: "WHO WE ARE",
    aboutTitle: "A New Force in Afghanistan's Trade Landscape",
    aboutP1:
      "INS Group of Companies — formally known as Imran Nazir Shyam Trading Company — was founded as a registered Afghan enterprise to bridge critical gaps in Afghanistan's import-export economy.",
    aboutP2:
      "We operate across three high-impact sectors — bringing essential medicines into the country, exporting Afghanistan's world-renowned dry fruits, and running modern dehydration infrastructure. Our team combines on-the-ground Afghan market knowledge with international trade standards inherited from our sister concern, BioBridge.",
    aboutP3:
      "Like mountains that stand firm and arrows that move forward, INS is built for lasting impact and upward momentum in Afghan trade.",
    aboutSister: "Sister Concern of BioBridge Healthcare Solutions Pvt. Ltd.",
    aboutSisterDetail:
      "Founded 2011 · Pune, India · 80+ years combined pharma expertise",
    aboutPharma: "Pharmaceutical Import — Afghanistan",
    aboutDry: "Dry Fruits Export — To India & Beyond",
    aboutDehy: "Industrial Dehydration Plant",
    aboutFounded: "FOUNDED",
    aboutSectors: "SECTORS",
    aboutRegistered: "REGISTERED",
    aboutCompany: "Imran Nazir Shyam",
    aboutCompanySub: "Trading Company",

    /* Sectors */
    sectorsLabel: "WHAT WE DO",
    sectorsTitle: "Three Sectors, One Vision",
    sectorsDesc:
      "INS operates across strategically chosen verticals that address Afghanistan's most pressing trade needs and global market opportunities.",
    sectorsPharma: "Pharmaceuticals",
    sectorsPharmaDesc:
      "We import and distribute high-quality medicines across Afghanistan, addressing critical shortages in antibiotics, cold & flu treatments, paediatric medicines, and essential OTC and prescription drugs. Backed by BioBridge's global pharma network.",
    sectorsDry: "Dry Fruits Export",
    sectorsDryDesc:
      "Afghanistan produces some of the world's finest dry fruits. INS exports these premium agricultural products to India and international markets, creating sustainable income for Afghan farmers and communities.",
    sectorsDehy: "Dehydration Plant",
    sectorsDehyDesc:
      "Our industrial dehydration plant processes fresh Afghan produce into shelf-stable, export-ready products — reducing waste, increasing shelf life, and unlocking premium global market access for Afghan agricultural output.",
    tagAntibiotics: "Antibiotics",
    tagColdFlu: "Cold & Flu",
    tagPaediatric: "Paediatric Care",
    tagOTC: "OTC Drugs",
    tagRx: "Rx Medicines",
    tagRaisins: "Raisins",
    tagPistachios: "Pistachios",
    tagAlmonds: "Almonds",
    tagApricots: "Apricots",
    tagFigs: "Figs",
    tagWalnuts: "Walnuts",
    tagFruitProcessing: "Fruit Processing",
    tagFoodPreservation: "Food Preservation",
    tagValueAddition: "Value Addition",
    tagExportPackaging: "Export Packaging",

    /* Heritage */
    heritageLabel: "OUR ROOTS",
    heritageTitle: "Backed by BioBridge's Proven Legacy",
    heritageDesc:
      "INS carries forward the expertise, values, and global network of BioBridge Healthcare Solutions — a name synonymous with pharmaceutical excellence since 2011.",
    heritageP1:
      "BioBridge was founded in 2011 by a highly competent team with a combined 80 years of experience across Manufacturing, Quality Control, Quality Assurance, and International Business Development. Headquartered in Pune, India, with offices in Chandigarh, Austria, and Iran, BioBridge has established itself as a trusted partner in the global pharmaceutical and biotechnology space.",
    heritageP2:
      "INS inherits this institutional knowledge, applying it to Afghanistan's unique trade environment to deliver solutions that are both world-class and locally grounded.",
    smartS: "S",
    smartSTitle: "SYSTEM",
    smartSDesc: "Integrated services and support for every client engagement",
    smartM: "M",
    smartMTitle: "MANAGEMENT",
    smartMDesc: "High-level responsiveness with early problem identification",
    smartA: "A",
    smartATitle: "ACCESSIBLE",
    smartADesc: "Strategic partners bringing complementary global strengths",
    smartR: "R",
    smartRTitle: "REPORTING",
    smartRDesc: "Professional, consistent, and documented processes",
    tl1Year: "2011",
    tl1Title: "BioBridge Founded",
    tl1Desc:
      "Founded in Pune, India by a team with 80+ years of combined pharma expertise across manufacturing, QC, QA, and international business development.",
    tl2Year: "2011–2024",
    tl2Title: "Global Expansion",
    tl2Desc:
      "Offices in Chandigarh, Austria, and Iran. BioBridge grows into a trusted full-service pharmaceutical consulting and distribution network spanning multiple continents.",
    tl3Year: "2026",
    tl3Title: "INS Group Established",
    tl3Desc:
      "Imran Nazir Shyam Trading Company registered in Afghanistan as BioBridge's sister concern — combining world-class pharma expertise with Afghan market knowledge.",
    tl4Year: "Today",
    tl4Title: "Active & Growing",
    tl4Desc:
      "INS is actively importing medicines, developing dry fruit export channels to India, and building dehydration infrastructure to serve Afghanistan and global markets.",
    val1Title: "Competence with Commitment",
    val1Desc: "Every service delivered with precision and dedication",
    val2Title: "Intelligence with Integrity",
    val2Desc: "Smart solutions grounded in ethical business practices",
    val3Title: "Discipline with Dedication",
    val3Desc: "Consistent execution, every time, without exception",

    /* Why Us */
    whyLabel: "Why Choose INS",
    whyTitle: "Your Trusted Afghan Trade Partner",
    whyDesc:
      "We combine international standards with deep local knowledge to deliver outcomes that matter.",
    why1Title: "Backed by 15+ Years of Pharmaceutical Excellence",
    why1Desc:
      "INS inherits BioBridge's deep expertise in pharmaceutical supply chains, quality assurance, and international business development — delivering unmatched compliance standards.",
    why2Title: "Registered Afghan Company — On-Ground Presence",
    why2Desc:
      "As a registered Afghan enterprise, INS has the local registrations, relationships, and market intelligence to navigate Afghanistan's regulatory and distribution landscape effectively.",
    why3Title: "End-to-End Supply Chain Management",
    why3Desc:
      "From sourcing and procurement to customs clearance, warehousing, and last-mile delivery — INS manages the complete supply chain for reliability and cost efficiency.",
    why4Title: "Multi-Sector Diversification",
    why4Desc:
      "Operating across pharma, agriculture, and food processing means INS can offer integrated partnerships creating synergies and opening multiple revenue streams for collaborators.",
    why5Title: "Global Strategic Network",
    why5Desc:
      "Through BioBridge's presence in India, Austria, Iran, and beyond — INS connects partners to a global network of pharma manufacturers, regulatory experts, and trade professionals.",
    why6Title: "Committed to Afghanistan's Growth",
    why6Desc:
      "INS is not just a business — it's a mission. Every transaction contributes to healthcare access, agricultural income, and industrial development within Afghanistan.",

    /* Team */
    teamLabel: "Leadership",
    teamTitle: "Meet Our Team",
    teamDesc:
      "A leadership team combining Afghan business expertise with decades of global pharmaceutical, finance, education and sales experience.",
    roleChairman: "Chairman",
    roleViceChairman: "Vice Chairman",
    roleDirector: "Director",
    roleHeadOfBusiness: "Head of Business",
    roleDirectorSales: "Director — Sales & Marketing",
    roleAdvisor: "Advisor",
    pharmaTitle: "Pharmaceutical Imports",
    pharmaSubtitle:
      "Delivering essential medicines to Afghanistan through a trusted global supply chain.",
    pharmaCatTitle: "Categories We Supply",
    pharmaCTA: "Partner with Us",
    dryTitle: "Dry Fruits Export",
    drySubtitle:
      "Bringing Afghanistan's finest premium dry fruits to India and global markets.",
    dryCatTitle: "Our Dry Fruit Selection",
    dryCTA: "Source the Finest Afghan Dry Fruits",
    dehyTitle: "Dehydration Plant",
    dehySubtitle:
      "Transforming fresh Afghan produce into shelf-stable, export-ready products.",
    dehyProcessTitle: "From Farm to Shelf",
    dehyCTA: "Explore Dehydration Partnerships",
    backToSectors: "← Back to Sectors",
    titleChairman: "Chairman, INS Group of Companies · Kabul, Afghanistan",
    titleViceChairman:
      "Vice Chairman, INS · Director Finance & Operations, BioBridge",
    titleDirector: "Director, INS · Founder & CEO, BioBridge Healthcare",
    titleHeadOfBusiness: "Head of Business, INS Group of Companies",
    titleDirectorSales: "Director Sales & Marketing, INS",
    titleAdvisor: "Advisor, INS",
    tagAfghanTrade: "Afghan Trade",
    tagStrategicLeadership: "Strategic Leadership",
    tagBusinessDev: "Business Development",
    tagFinanceLegal: "Finance & Legal",
    tagExportImport: "Export-Import",
    tagSupplyChain: "Supply Chain",
    tag26Yrs: "26+ Yrs",
    tagPharmaBiotech: "Pharma & Biotech",
    tagWHOExpert: "WHO Expert",
    tagQualityMgmt: "Quality Management",
    tag37Yrs: "37+ Yrs",
    tagOperations: "Operations",
    tagProjectDelivery: "Project Delivery",
    tagSalesStrategy: "Sales Strategy",
    tagMarketDev: "Market Development",
    tagCorporateTraining: "Corporate Training",
    tagLeadership: "Leadership",
    tagStrategicPlanning: "Strategic Planning",
    tagCorporateRelations: "Corporate Relations",
    tagCiscoAlumni: "Cisco Alumni",
    tagAdvisor: "Advisor",
    qualDirector: "M.Sc. Industrial Microbiology · Ph.D",
    bioChairman:
      "Mohammad Imran Nazari is the founding Chairman of INS Group of Companies, registered in Afghanistan. With deep roots in Afghan business and trade, he leads the company's strategic direction and on-ground operations across pharmaceutical imports, dry fruits export, and industrial dehydration. His vision is to build sustainable trade bridges between Afghanistan and the world, creating economic opportunities for Afghan communities while meeting the nation's critical import needs.",
    bioViceChairman:
      "A Finance, Legal, Export-Import and Supply Chain professional with formal education in Commerce, Management, Foreign Trade, Law and Supply Chain Management. He brings over 26 years of experience with prior assignments at Kinetic Engineering, Godrej Group and Reliance Industries. At BioBridge since 2011, he has overseen Business Development, Finance, HR, Legal, Admin and Commercial functions. At INS, he guides financial strategy and international trade operations.",
    bioDirector:
      "Quality and operations management professional with 37+ years in the biotechnology industry. Former President of Operations at Bharat Serums & Vaccines Ltd., with roles at Panacea Biotec, Bharat Immunologicals, NEERI and National Cell Culture Sciences. Enlisted by WHO Geneva on their NRA expert panel; conducted cGMP training under the Global Training Network. Has faced audits from WHO, USFDA, EMEA and NAFDAC.",
    bioHeadOfBusiness:
      "Mr. Nazir Nazari serves as Head of Business at INS Group, driving the company's commercial operations and client relationships across Afghanistan. With hands-on experience in business development and delivery management, he brings a strong understanding of cross-sector project execution, institutional coordination, and operational management. At INS, he oversees business planning, partner engagement and day-to-day commercial activities.",
    bioDirectorSales:
      "Ms. Ummeaiman Ansari is a seasoned sales and marketing professional with a proven track record in market development and brand strategy. Known for her visionary leadership, exceptional time management and ability to guide teams through high-pressure environments. At INS, she leads sales strategy, market development and brand partnerships — connecting Afghan trade with Indian and global buyers.",
    bioAdvisor:
      "A distinguished professional with a career spanning Cisco Systems (Senior Sales & Marketing), Vcustomer India Services, and Indira Group of Institutes (Director, Corporate Relations). He brings deep expertise in strategic planning, corporate relations, team management and business development. His advisory role at INS draws on his extensive network across Indian industry, academia and corporate sectors, supporting expansion and institutional partnerships in India.",

    /* Contact */
    contactLabel: "Get In Touch",
    contactTitle: "Let's Build Something Together",
    contactDesc:
      "Whether you are a pharmaceutical manufacturer, a buyer of premium dry fruits, or an investor — INS Group is ready to partner with you.",
    contactOffices: "Our Offices",
    contactAfgOffice: "Afghanistan Office",
    contactAfgAddr: "Kabul, Afghanistan (Registered)",
    contactIndiaOffice: "India Partner Office",
    contactIndiaAddr: "BioBridge, #13 Rachana Blossom, Aundh, Pune 411007",
    contactEmail: "Email",
    contactBusiness: "Business Enquiries",
    contactDirect: "Direct Contact",
    contactPhone: "Phone",
    contactAfgPhone: "Afghanistan Office",
    contactIndiaPhone: "India Office (INS)",
    contactBioPhone: "BioBridge India",
    contactFormTitle: "Send Us a Message",
    contactFormSub: "We respond within 48 business hours",
    contactFirstName: "First Name",
    contactFirstNamePH: "Ahmad",
    contactLastName: "Last Name",
    contactLastNamePH: "Khan",
    contactCompany: "Company",
    contactCompanyPH: "Your company name",
    contactEmailLabel: "Email",
    contactEmailPH: "email@company.com",
    contactPhoneLabel: "Phone / WhatsApp",
    contactPhonePH: "+93 or +91...",
    contactSector: "Sector of Interest",
    contactSectorDefault: "Select sector...",
    contactSector1: "Pharmaceutical Import — Afghanistan",
    contactSector2: "Dry Fruits Export — To India",
    contactSector3: "Dehydration Plant Partnership",
    contactSector4: "General Business Inquiry",
    contactMessage: "Message",
    contactMessagePH:
      "Tell us about your business and how you'd like to collaborate...",
    contactSend: "Send Message →",
    toastSending: "Sending your message...",
    toastSuccess: "Thank you! Your form was submitted successfully.",
    toastRateLimitLimit: "Too many message requests. Please wait a while before trying again.",
    toastRateLimitCooldown: "Please wait {seconds}s before sending another message.",

    /* Footer */
    footerTagline:
      "Transcending Borders, Transforming Lives. A registered Afghan company bridging Afghanistan's trade with the world — backed by BioBridge's global healthcare expertise.",
    footerSectors: "Sectors",
    footerPharma: "Pharmaceutical Import",
    footerDry: "Dry Fruits Export",
    footerDehy: "Dehydration Plant",
    footerCompany: "Company",
    footerAbout: "About INS",
    footerHeritage: "Our Heritage",
    footerWhy: "Why Choose Us",
    footerContact: "Contact",
    footerContactCol: "Contact",
    footerSister: "Sister concern of",
    footerCopy:
      "© 2026 INS Group — Imran Nazir Shyam Trading Company. Registered in Afghanistan.",
  },

  fa: {
    /* Navbar */
    navAbout: "درباره ما",
    navSectors: "بخش‌ها",
    navHeritage: "میراث",
    navWhyUs: "چرا ما",
    navTeam: "تیم",
    navContact: "تماس",
    navPharma: "داروسازی",
    navDryFruits: "صادرات میوه خشک",
    navDehydration: "کارخانه کم‌آبی",
    navPartner: "همکاری با ما",
    navInsGroup: "گروه INS",
    navSubtitle: "شرکت تجارتی عمران نذیر شام",
    langSwitch: "English",

    /* Hero */
    heroBadge: "ثبت شده در افغانستان · شرکت خواهر BioBridge هند",
    heroTitle1: "اتصال افغانستان",
    heroTitle2: "دوباره به جهان",
    heroDari: "شرکت تجارتی عمران نذیر شام",
    heroDesc:
      "گروه INS — شرکت تجارتی عمران نذیر شام — یک شرکت ثبت شده افغانی است که در زمینه واردات دارو، صادرات میوه خشک و کم‌آبی صنعتی فعالیت می‌کند، با پشتیبانی بیش از ۱۵ سال تخصص جهانی بهداشت و درمان BioBridge.",
    heroExplore: "بخش‌های ما را کاوش کنید",
    heroGetInTouch: "ارتباط با ما",
    heroAfg: "افغانستان",
    heroRegHQ: "مرکز ثبت شده",
    heroPharma: "واردات دارو",
    heroEssential: "داروهای ضروری",
    heroDry: "میوه خشک",
    heroExport: "صادرات به هند",
    heroDehy: "کم‌آبی",
    heroPlant: "عملیات کارخانه",

    /* Stats */
    statsYears: "سال تخصص ترکیبی",
    statsSectors: "بخش‌های تجاری",
    statsExperience: "سال تجربه تیم",
    statsNations: "کشورهای شریک جهانی",

    /* Banner */
    bannerTitle1: "دروازه افغانستان به",
    bannerTitle2: "تجارت جهانی",
    bannerDesc:
      "اتصال داروهای ضروری، میوه خشک با کیفیت و نوآوری کشاورزی — از قلب افغانستان به جهان.",
    bannerPharma: "واردات دارو",
    bannerDry: "صادرات میوه خشک",
    bannerDehy: "کارخانه کم‌آبی",
    bannerBio: "همکاری BioBridge",

    /* About */
    aboutWho: "ما کیستیم",
    aboutTitle: "نیرویی نوین در چشم‌انداز تجارت افغانستان",
    aboutP1:
      "گروه شرکت‌های INS — که به نام شرکت تجارتی عمران نذیر شام شناخته می‌شود — به عنوان یک شرکت ثبت شده افغانی برای پر کردن شکاف‌های حیاتی در اقتصاد واردات و صادرات افغانستان تأسیس شد.",
    aboutP2:
      "ما در سه بخش با تأثیر بالا فعالیت می‌کنیم — آوردن داروهای ضروری به کشور، صادرات میوه خشک مشهور جهانی افغانستان، و راه‌اندازی زیرساخت مدرن کم‌آبی. تیم ما دانش بازار محلی افغانستان را با استانداردهای تجارت بین‌المللی که از شرکت خواهر ما BioBridge به ارث رسیده، ترکیب می‌کند.",
    aboutP3:
      "مانند کوه‌هایی که استوارند و تیرهایی که به جلو حرکت می‌کنند، INS برای تأثیر ماندگار و شتاب رو به بالا در تجارت افغانستان ساخته شده است.",
    aboutSister: "شرکت خواهر BioBridge Healthcare Solutions Pvt. Ltd.",
    aboutSisterDetail:
      "تأسیس ۲۰۱۱ · پونه، هند · بیش از ۸۰ سال تخصص ترکیبی داروسازی",
    aboutPharma: "واردات دارو — افغانستان",
    aboutDry: "صادرات میوه خشک — به هند و فراتر",
    aboutDehy: "کارخانه کم‌آبی صنعتی",
    aboutFounded: "تأسیس",
    aboutSectors: "بخش‌ها",
    aboutRegistered: "ثبت شده",
    aboutCompany: "عمران نذیر شام",
    aboutCompanySub: "شرکت تجارتی",

    /* Sectors */
    sectorsLabel: "آنچه انجام می‌دهیم",
    sectorsTitle: "سه بخش، یک چشم‌انداز",
    sectorsDesc:
      "INS در حوزه‌های عمودی انتخاب شده استراتژیک فعالیت می‌کند که مهمترین نیازهای تجاری افغانستان و فرصت‌های بازار جهانی را پاسخ می‌دهد.",
    sectorsPharma: "داروسازی",
    sectorsPharmaDesc:
      "ما داروهای با کیفیت را در سراسر افغانستان وارد و توزیع می‌کنیم و کمبودهای حیاتی در آنتی‌بیوتیک‌ها، درمان سرماخوردگی و آنفولانزا، داروهای کودکان و داروهای OTC و نسخه‌ای را برطرف می‌کنیم.",
    sectorsDry: "صادرات میوه خشک",
    sectorsDryDesc:
      "افغانستان برخی از بهترین میوه‌های خشک جهان را تولید می‌کند. INS این محصولات کشاورزی با کیفیت را به هند و بازارهای بین‌المللی صادر می‌کند.",
    sectorsDehy: "کارخانه کم‌آبی",
    sectorsDehyDesc:
      "کارخانه کم‌آبی صنعتی ما محصولات تازه افغانستان را به محصولات پایدار و آماده صادرات تبدیل می‌کند — کاهش ضایعات، افزایش ماندگاری و دسترسی به بازارهای جهانی.",
    tagAntibiotics: "آنتی‌بیوتیک‌ها",
    tagColdFlu: "سرماخوردگی و آنفولانزا",
    tagPaediatric: "مراقبت کودکان",
    tagOTC: "داروهای OTC",
    tagRx: "داروهای نسخه‌ای",
    tagRaisins: "کشمش",
    tagPistachios: "پسته",
    tagAlmonds: "بادام",
    tagApricots: "زردآلو",
    tagFigs: "انجیر",
    tagWalnuts: "گردو",
    tagFruitProcessing: "فرآوری میوه",
    tagFoodPreservation: "نگهداری مواد غذایی",
    tagValueAddition: "افزایش ارزش",
    tagExportPackaging: "بسته‌بندی صادراتی",

    /* Heritage */
    heritageLabel: "ریشه‌های ما",
    heritageTitle: "با پشتیبانی میراث ثابت شده BioBridge",
    heritageDesc:
      "INS دانش، ارزش‌ها و شبکه جهانی BioBridge Healthcare Solutions را ادامه می‌دهد — نامی مترادف با برتری داروسازی از سال ۲۰۱۱.",
    heritageP1:
      "BioBridge در سال ۲۰۱۱ توسط یک تیم بسیار ماهر با ۸۰ سال تجربه ترکیبی در تولید، کنترل کیفیت، تضمین کیفیت و توسعه تجارت بین‌المللی تأسیس شد. با دفتر مرکزی در پونه، هند و دفاتر در چندیگر، اتریش و ایران.",
    heritageP2:
      "INS این دانش نهادی را به ارث می‌برد و آن را برای ارائه راه‌حل‌هایی که هم سطح جهانی و هم محلی هستند، در محیط تجاری منحصر به فرد افغانستان به کار می‌گیرد.",
    smartS: "S",
    smartSTitle: "سیستم",
    smartSDesc: "خدمات و پشتیبانی یکپارچه برای هر تعامل با مشتری",
    smartM: "M",
    smartMTitle: "مدیریت",
    smartMDesc: "پاسخگویی سطح بالا با شناسایی زودهنگام مشکلات",
    smartA: "A",
    smartATitle: "دسترس‌پذیر",
    smartADesc: "شرکای استراتژیک با قدرت‌های مکمل جهانی",
    smartR: "R",
    smartRTitle: "گزارش‌دهی",
    smartRDesc: "فرآیندهای حرفه‌ای، سازگار و مستند",
    tl1Year: "۲۰۱۱",
    tl1Title: "تأسیس BioBridge",
    tl1Desc:
      "تأسیس در پونه، هند توسط تیمی با بیش از ۸۰ سال تجربه ترکیبی داروسازی.",
    tl2Year: "۲۰۱۱–۲۰۲۴",
    tl2Title: "توسعه جهانی",
    tl2Desc:
      "دفاتر در چندیگر، اتریش و ایران. رشد BioBridge به یک شبکه مشاوره و توزیع داروسازی قابل اعتماد.",
    tl3Year: "۲۰۲۶",
    tl3Title: "تأسیس گروه INS",
    tl3Desc:
      "ثبت شرکت تجارتی عمران نذیر شام در افغانستان به عنوان شرکت خواهر BioBridge.",
    tl4Year: "امروز",
    tl4Title: "فعال و در حال رشد",
    tl4Desc:
      "INS به طور فعال در حال واردات دارو، توسعه کانال‌های صادرات میوه خشک به هند و ساخت زیرساخت کم‌آبی است.",
    val1Title: "شایستگی با تعهد",
    val1Desc: "هر خدمت با دقت و dedication ارائه می‌شود",
    val2Title: "هوش با صداقت",
    val2Desc: "راه‌حل‌های هوشمند مبتنی بر شیوه‌های تجاری اخلاقی",
    val3Title: "انضباط با تعهد",
    val3Desc: "اجرای سازگار، هر بار، بدون استثنا",

    /* Why Us */
    whyLabel: "چرا INS را انتخاب کنید",
    whyTitle: "شریک تجاری قابل اعتماد شما در افغانستان",
    whyDesc:
      "ما استانداردهای بین‌المللی را با دانش عمیق محلی ترکیب می‌کنیم تا نتایج مهم را ارائه دهیم.",
    why1Title: "پشتیبانی از ۱۵+ سال برتری داروسازی",
    why1Desc:
      "INS دانش عمیق BioBridge در زنجیره تأمین داروسازی، تضمین کیفیت و توسعه تجارت بین‌المللی را به ارث می‌برد.",
    why2Title: "شرکت ثبت شده افغانی — حضور در محل",
    why2Desc:
      "به عنوان یک شرکت ثبت شده افغانی، INS دارای ثبت‌های محلی، روابط و هوش بازار است.",
    why3Title: "مدیریت زنجیره تأمین کامل",
    why3Desc:
      "از تامین و خرید تا ترخیص گمرکی، انبارداری و تحویل نهایی — INS زنجیره تأمین کامل را مدیریت می‌کند.",
    why4Title: "تنوع چندبخشی",
    why4Desc:
      "فعالیت در داروسازی، کشاورزی و فرآوری مواد غذایی به این معنی است که INS می‌تواند مشارکت‌های یکپارچه ارائه دهد.",
    why5Title: "شبکه استراتژیک جهانی",
    why5Desc:
      "از طریق حضور BioBridge در هند، اتریش، ایران و فراتر — INS شرکا را به یک شبکه جهانی متصل می‌کند.",
    why6Title: "متعهد به رشد افغانستان",
    why6Desc:
      "INS فقط یک کسب و کار نیست — یک ماموریت است. هر معامله به دسترسی به بهداشت و درمان، درآمد کشاورزی و توسعه صنعتی در افغانستان کمک می‌کند.",

    /* Team */
    teamLabel: "رهبری",
    teamTitle: "تیم ما را ملاقات کنید",
    teamDesc:
      "یک تیم رهبری که تخصص تجاری افغانستان را با دهه‌ها تجربه جهانی داروسازی، مالی، آموزش و فروش ترکیب می‌کند.",
    roleChairman: "رئیس",
    roleViceChairman: "نایب رئیس",
    roleDirector: "مدیر",
    roleHeadOfBusiness: "رئیس تجارت",
    roleDirectorSales: "مدیر فروش و بازاریابی",
    roleAdvisor: "مشاور",
    pharmaTitle: "واردات دارو",
    pharmaSubtitle:
      "تحویل داروهای ضروری به افغانستان از طریق یک زنجیره تامین قابل اعتماد جهانی.",
    pharmaCatTitle: "دسته‌بندی محصولات ما",
    pharmaCTA: "همکاری با ما",
    dryTitle: "صادرات میوه خشک",
    drySubtitle: "آوردن بهترین میوه‌های خشک افغانستان به هند و بازارهای جهانی.",
    dryCatTitle: "انتخاب میوه خشک ما",
    dryCTA: "منبع بهترین میوه‌های خشک افغانستان",
    dehyTitle: "کارخانه کم‌آبی",
    dehySubtitle:
      "تبدیل محصولات تازه افغانستان به محصولات پایدار و آماده صادرات.",
    dehyProcessTitle: "از مزرعه تا قفسه",
    dehyCTA: "کاوش مشارکت‌های کم‌آبی",
    backToSectors: "← بازگشت به بخش‌ها",
    titleChairman: "رئیس، گروه شرکت‌های INS · کابل، افغانستان",
    titleViceChairman: "نایب رئیس، INS · مدیر مالی و عملیات، BioBridge",
    titleDirector: "مدیر، INS · بنیانگذار و مدیرعامل، BioBridge Healthcare",
    titleHeadOfBusiness: "رئیس تجارت، گروه شرکت‌های INS",
    titleDirectorSales: "مدیر فروش و بازاریابی، INS",
    titleAdvisor: "مشاور، INS",
    tagAfghanTrade: "تجارت افغانستان",
    tagStrategicLeadership: "رهبری استراتژیک",
    tagBusinessDev: "توسعه تجارت",
    tagFinanceLegal: "مالی و حقوقی",
    tagExportImport: "واردات و صادرات",
    tagSupplyChain: "زنجیره تامین",
    tag26Yrs: "۲۶+ سال",
    tagPharmaBiotech: "داروسازی و بیوتکنولوژی",
    tagWHOExpert: "کارشناس WHO",
    tagQualityMgmt: "مدیریت کیفیت",
    tag37Yrs: "۳۷+ سال",
    tagOperations: "عملیات",
    tagProjectDelivery: "تحویل پروژه",
    tagSalesStrategy: "استراتژی فروش",
    tagMarketDev: "توسعه بازار",
    tagCorporateTraining: "آموزش شرکتی",
    tagLeadership: "رهبری",
    tagStrategicPlanning: "برنامه‌ریزی استراتژیک",
    tagCorporateRelations: "روابط شرکتی",
    tagCiscoAlumni: "فارغ‌التحصیل Cisco",
    tagAdvisor: "مشاور",
    qualDirector: "M.Sc. میکروبیولوژی صنعتی · Ph.D",
    bioChairman:
      "محمد عمران ناظری بنیانگذار و رئیس گروه شرکت‌های INS است که در افغانستان ثبت شده است. با ریشه‌های عمیق در تجارت افغانستان، او جهت استراتژیک شرکت را در واردات دارو، صادرات میوه خشک و کم‌آبی صنعتی رهبری می‌کند.",
    bioViceChairman:
      "یک حرفه‌ای در امور مالی، حقوقی، واردات و صادرات و زنجیره تامین با تحصیلات رسمی در بازرگانی، مدیریت، تجارت خارجی، حقوق و مدیریت زنجیره تامین. او بیش از ۲۶ سال تجربه دارد.",
    bioDirector:
      "حرفه‌ای مدیریت کیفیت و عملیات با ۳۷+ سال تجربه در صنعت بیوتکنولوژی. رئیس سابق عملیات در Bharat Serums & Vaccines Ltd. عضو پانل کارشناسی WHO.",
    bioHeadOfBusiness:
      "آقای ناظر ناظری به عنوان رئیس تجارت در گروه INS فعالیت می‌کند و عملیات تجاری و روابط مشتریان را در سراسر افغانستان هدایت می‌کند.",
    bioDirectorSales:
      "خانم امیمان انصاری یک حرفه‌ای در زمینه فروش و بازاریابی با سابقه اثبات شده در توسعه بازار و استراتژی برند است. در INS، او استراتژی فروش، توسعه بازار و مشارکت‌های برند را رهبری می‌کند.",
    bioAdvisor:
      "یک حرفه‌ای برجسته با سابقه در Cisco Systems، Vcustomer India Services و Indira Group of Institutes. او تخصص عمیقی در برنامه‌ریزی استراتژیک، روابط شرکتی و توسعه تجارت دارد.",

    /* Contact */
    contactLabel: "ارتباط با ما",
    contactTitle: "بیایید با هم بسازیم",
    contactDesc:
      "چه تولیدکننده دارو باشید، چه خریدار میوه خشک یا سرمایه‌گذار — گروه INS آماده همکاری با شماست.",
    contactOffices: "دفاتر ما",
    contactAfgOffice: "دفتر افغانستان",
    contactAfgAddr: "کابل، افغانستان (ثبت شده)",
    contactIndiaOffice: "دفتر شریک هند",
    contactIndiaAddr: "BioBridge، #13 Rachana Blossom، Aundh، Pune 411007",
    contactEmail: "ایمیل",
    contactBusiness: "استعلامات تجاری",
    contactDirect: "تماس مستقیم",
    contactPhone: "تلفن",
    contactAfgPhone: "دفتر افغانستان",
    contactIndiaPhone: "دفتر هند (INS)",
    contactBioPhone: "BioBridge هند",
    contactFormTitle: "برای ما پیام بفرستید",
    contactFormSub: "ما ظرف ۴۸ ساعت پاسخ می‌دهیم",
    contactFirstName: "نام",
    contactFirstNamePH: "احمد",
    contactLastName: "نام خانوادگی",
    contactLastNamePH: "خان",
    contactCompany: "شرکت",
    contactCompanyPH: "نام شرکت شما",
    contactEmailLabel: "ایمیل",
    contactEmailPH: "email@company.com",
    contactPhoneLabel: "تلفن / واتساپ",
    contactPhonePH: "+۹۳ یا +۹۱...",
    contactSector: "بخش مورد نظر",
    contactSectorDefault: "بخش را انتخاب کنید...",
    contactSector1: "واردات دارو — افغانستان",
    contactSector2: "صادرات میوه خشک — به هند",
    contactSector3: "همکاری کارخانه کم‌آبی",
    contactSector4: "استعلام تجاری عمومی",
    contactMessage: "پیام",
    contactMessagePH: "در مورد کسب و کار خود و نحوه همکاری بگویید...",
    contactSend: "ارسال پیام →",
    toastSending: "در حال ارسال پیام شما...",
    toastSuccess: "متشکریم! فرم شما با موفقیت ارسال شد.",
    toastRateLimitLimit: "درخواست‌های پیام بسیار زیاد است. لطفاً قبل از تلاش مجدد کمی صبر کنید.",
    toastRateLimitCooldown: "لطفاً {seconds} ثانیه قبل از ارسال پیام دیگر صبر کنید.",

    /* Footer */
    footerTagline:
      "عبور از مرزها، تغییر زندگی‌ها. یک شرکت ثبت شده افغانی که تجارت افغانستان را با جهان پیوند می‌دهد — با پشتیبانی تخصص جهانی بهداشت و درمان BioBridge.",
    footerSectors: "بخش‌ها",
    footerPharma: "واردات دارو",
    footerDry: "صادرات میوه خشک",
    footerDehy: "کارخانه کم‌آبی",
    footerCompany: "شرکت",
    footerAbout: "درباره INS",
    footerHeritage: "میراث ما",
    footerWhy: "چرا ما را انتخاب کنید",
    footerContact: "تماس",
    footerContactCol: "تماس",
    footerSister: "شرکت خواهر",
    footerCopy:
      "© ۲۰۲۶ گروه INS — شرکت تجارتی عمران نذیر شام. ثبت شده در افغانستان.",
  },

  ps: {
    /* Navbar */
    navAbout: "زموږ په اړه",
    navSectors: "برخې",
    navHeritage: "میراث",
    navWhyUs: "ولې موږ",
    navTeam: "ټیم",
    navContact: "اړیکه",
    navPharma: "درملتون",
    navDryFruits: "وچې میوې صادرات",
    navDehydration: "د اوبو ایستلو فابریکه",
    navPartner: "زموږ سره همکاري",
    navInsGroup: "INS ګروپ",
    navSubtitle: "عمران نذیر شام سوداګریزه کمپنۍ",
    langSwitch: "English",

    /* Hero */
    heroBadge: "په افغانستان کې ثبت شوی · د BioBridge هند خور شرکت",
    heroTitle1: "افغانستان سره نښلول",
    heroTitle2: "بیا نړۍ ته",
    heroDari: "شرکت تجارتی عمران نذیر شام",
    heroDesc:
      "د INS ګروپ — د عمران نذیر شام سوداګریزه کمپنۍ — یوه ثبت شوې افغاني تصدۍ ده چې د درملو وارداتو، وچو میوو صادراتو او صنعتي اوبو ایستلو په برخو کې فعالیت کوي، د BioBridge د ۱۵+ کلونو نړیوال روغتیایی تخصص په ملاتړ.",
    heroExplore: "زموږ برخې وپلټئ",
    heroGetInTouch: "اړیکه ونیسئ",
    heroAfg: "افغانستان",
    heroRegHQ: "ثبت شوی مرکز",
    heroPharma: "د درملو واردات",
    heroEssential: "اړین درمل",
    heroDry: "وچې میوې",
    heroExport: "هند ته صادرات",
    heroDehy: "اوبه ایستل",
    heroPlant: "د فابریکې عملیات",

    /* Stats */
    statsYears: "کلونه ګډ تخصص",
    statsSectors: "سوداګریزې برخې",
    statsExperience: "کلونه د ټیم تجربه",
    statsNations: "نړیوال شریک هیوادونه",

    /* Banner */
    bannerTitle1: "افغانستان دروازه",
    bannerTitle2: "نړیوالې سوداګرۍ ته",
    bannerDesc:
      "د اړینو درملو، غوره وچو میوو او کرنیز نوښت نښلول — د افغانستان له زړه نړۍ ته.",
    bannerPharma: "د درملو واردات",
    bannerDry: "وچې میوې صادرات",
    bannerDehy: "د اوبو ایستلو فابریکه",
    bannerBio: "د BioBridge ملګرتیا",

    /* About */
    aboutWho: "موږ څوک یو",
    aboutTitle: "د افغانستان د سوداګرۍ په برخه کې یو نوی ځواک",
    aboutP1:
      "د INS ګروپ کمپنۍ — چې د عمران نذیر شام سوداګریزې کمپنۍ په نوم پیژندل کیږي — د افغانستان د وارداتو او صادراتو په اقتصاد کې د مهمو تشو ډکولو لپاره تاسیس شوه.",
    aboutP2:
      "موږ په دریو لوړ اغیزو برخو کې فعالیت کوو — هیواد ته اړین درمل راوړو، د افغانستان مشهورې وچې میوې صادروو، او د اوبو ایستلو عصري زیربنا چلوو.",
    aboutP3:
      "لکه غرونه چې کلک ولاړ وي او تیرونه چې مخ ته ځي، INS د افغانستان په سوداګرۍ کې د تلپاتې اغیزې او پورته حرکت لپاره جوړ شوی.",
    aboutSister: "د BioBridge Healthcare Solutions Pvt. Ltd. خور شرکت",
    aboutSisterDetail: "تاسیس ۲۰۱۱ · پونې، هند · د ۸۰+ کلونو ګډ درملتون تخصص",
    aboutPharma: "د درملو واردات — افغانستان",
    aboutDry: "وچې میوې صادرات — هند او نورو ته",
    aboutDehy: "صنعتي اوبه ایستلو فابریکه",
    aboutFounded: "تاسیس",
    aboutSectors: "برخې",
    aboutRegistered: "ثبت شوی",
    aboutCompany: "عمران نذیر شام",
    aboutCompanySub: "سوداګریزه کمپنۍ",

    /* Sectors */
    sectorsLabel: "موږ څه کوو",
    sectorsTitle: "درې برخې، یو لید",
    sectorsDesc:
      "INS په ستراتیژیک ډول غوره شوي عمودي برخو کې فعالیت کوي چې د افغانستان د سوداګرۍ مهمو اړتیاوو او نړیوالو بازار فرصتونو ته ځواب وايي.",
    sectorsPharma: "درملتون",
    sectorsPharmaDesc:
      "موږ د افغانستان په ټول هیواد کې د انټي بیوټیکونو، زکام او فلو درملنې، د ماشومانو درملو او اړینو OTC او نسخې درملو کې مهم کموالی ډکوو.",
    sectorsDry: "وچې میوې صادرات",
    sectorsDryDesc:
      "افغانستان د نړہ ځینې غوره وچې میوې تولیدوي. INS دا غوره کرنیز محصولات هند او نړیوالو بازارونو ته صادروي.",
    sectorsDehy: "د اوبو ایستلو فابریکه",
    sectorsDehyDesc:
      "زموږ صنعتي د اوبو ایستلو فابریکه د افغانستان تازه تولیداتو ته ارزښت اضافه کوي، ضایعات کموي او نړیوالو بازارونو ته لاسرسی برابروي.",
    tagAntibiotics: "انټي بیوټیکونه",
    tagColdFlu: "زکام او فلو",
    tagPaediatric: "د ماشومانو پاملرنه",
    tagOTC: "OTC درمل",
    tagRx: "نسخې درمل",
    tagRaisins: "کشمش",
    tagPistachios: "پسته",
    tagAlmonds: "بادام",
    tagApricots: "زردآلو",
    tagFigs: "انجیر",
    tagWalnuts: "ګیردو",
    tagFruitProcessing: "د میوو پروسس",
    tagFoodPreservation: "د خوړو ساتنه",
    tagValueAddition: "ارزښت اضافه کول",
    tagExportPackaging: "صادراتي بسته بندي",

    /* Heritage */
    heritageLabel: "زموږ ریښې",
    heritageTitle: "د BioBridge د ثابت شوي میراث ملاتړ",
    heritageDesc:
      "INS د BioBridge Healthcare Solutions تخصص، ارزښتونه او نړیواله شبکه مخ ته وړي — یو نوم چې له ۲۰۱۱ راهیسې د درملتون غوره والی سره مترادف دی.",
    heritageP1:
      "BioBridge په ۲۰۱۱ کال کې د یوې ډیرې وړ ټیم لخوا تاسیس شو چې د تولید، کیفیت کنټرول، کیفیت تضمین او نړیوال سوداګرۍ پراختیا کې ۸۰ کاله ګډه تجربه لري. مرکز یې په پونې، هند کې دی.",
    heritageP2:
      "INS دا اداري پوهه په میراث وړي، د افغانستان ځانګړي سوداګریز چاپیریال کې د نړیوالې کچې او محلي حل لارو وړاندې کولو لپاره.",
    smartS: "S",
    smartSTitle: "سیسټم",
    smartSDesc: "د هر پیرودونکي ښکیلتیا لپاره مدغم خدمتونه او ملاتړ",
    smartM: "M",
    smartMTitle: "مدیریت",
    smartMDesc: "د ستونزو دمخه پیژندلو سره لوړ کچه ځواب ویونکي",
    smartA: "A",
    smartATitle: "لاسرسی",
    smartADesc: "ستراتیژیک شریکان د تکمیلي نړیوال ځواک سره",
    smartR: "R",
    smartRTitle: "راپور ورکول",
    smartRDesc: "مسلکي، ثابت او مستند پروسې",
    tl1Year: "۲۰۱۱",
    tl1Title: "BioBridge تاسیس",
    tl1Desc: "په پونې، هند کې تاسیس شو د ۸۰+ کلونو ګډ درملتون تخصص سره.",
    tl2Year: "۲۰۱۱–۲۰۲۴",
    tl2Title: "نړیواله پراختیا",
    tl2Desc:
      "په چندیګر، اتریش او ایران کې دفترونه. BioBridge د باور وړ بشپړ خدمت درملتون مشورتي او ویش شبکې ته وده کړې.",
    tl3Year: "۲۰۲۶",
    tl3Title: "INS ګروپ تاسیس",
    tl3Desc:
      "د عمران نذیر شام سوداګریزه کمپنۍ د BioBridge د خور شرکت په توګه په افغانستان کې ثبت شوه.",
    tl4Year: "نن",
    tl4Title: "فعال او وده",
    tl4Desc:
      "INS په فعاله توګه درمل واردوي، هند ته د وچو میوو صادراتي چینلونه رامینځته کوي، او د اوبو ایستلو زیربنا جوړوي.",
    val1Title: "وړتیا د ژمنتیا سره",
    val1Desc: "هر خدمت د دقت او وقف سره وړاندې کیږي",
    val2Title: "هوش د صداقت سره",
    val2Desc: "هوښیار حل لارې په اخلاقي سوداګریزو کړنو ولاړې",
    val3Title: "ډسپلین د ژمنتیا سره",
    val3Desc: "ثابت اجرا، هر ځل، پرته له استثنا",

    /* Why Us */
    whyLabel: "ولې INS غوره کړئ",
    whyTitle: "ستاسو باوري افغان سوداګریز شریک",
    whyDesc:
      "موږ نړیوال معیارونه د ژورو محلي پوهې سره یوځای کوو ترڅو مهمې پایلې وړاندې کړو.",
    why1Title: "د ۱۵+ کلونو درملتون غوره والي ملاتړ",
    why1Desc:
      "INS د BioBridge ژوره پوهه د درملتون رسولو سلسلې، کیفیت تضمین او نړیوال سوداګرۍ پراختیا کې په میراث وړي.",
    why2Title: "ثبت شوې افغاني کمپنۍ — په ځای کې شتون",
    why2Desc:
      "د ثبت شوې افغاني تصدۍ په توګه، INS محلي ثبتونه، اړیکې او د بازار پوهه لري.",
    why3Title: "د رسولو سلسلې بشپړ مدیریت",
    why3Desc:
      "د سرچینې او پیرود څخه تر ګمرکي تصفیې، ذخیره کولو او وروستۍ رسولو پورې — INS د رسولو بشپړه سلسله مدیریت کوي.",
    why4Title: "څو برخې تنوع",
    why4Desc:
      "په درملتون، کرنه او خوړو پروسس کې فعالیت دې معنی لري چې INS کولی شي مدغم شراکتونه وړاندې کړي.",
    why5Title: "نړیوال ستراتیژیک شبکه",
    why5Desc:
      "د BioBridge د هند، اتریش، ایران او نورو کې د شتون له لارې — INS شریکان د نړیوالو درملتون جوړونکو، تنظیمي متخصصینو او سوداګریزو مسلکیانو شبکې سره نښلوي.",
    why6Title: "د افغانستان پرمختګ ته ژمن",
    why6Desc:
      "INS یوازې یو سوداګرۍ نه ده — دا یو ماموریت دی. هر راکړه ورکړه روغتیایی پاملرنې، کرنیز عاید او صنعتي پرمختګ کې مرسته کوي.",

    /* Team */
    teamLabel: "رهبري",
    teamTitle: "زموږ ټیم سره وګورئ",
    teamDesc:
      "د رهبرۍ یو ټیم چې د افغانستان سوداګریز تخصص د څو لسیزو نړیوال درملتون، مالي، زده کړې او پلور تجربې سره یوځای کوي.",
    roleChairman: "رئیس",
    roleViceChairman: "نایب رئیس",
    roleDirector: "مدیر",
    roleHeadOfBusiness: "د سوداګرۍ مشر",
    roleDirectorSales: "د پلور او بازارموندنې مدیر",
    roleAdvisor: "سلاکار",
    pharmaTitle: "د درملو واردات",
    pharmaSubtitle:
      "د باور وړ نړیوال رسولو سلسلې له لارې افغانستان ته اړین درمل رسول.",
    pharmaCatTitle: "زموږ د محصولاتو کټګورۍ",
    pharmaCTA: "زموږ سره همکاري",
    dryTitle: "وچې میوې صادرات",
    drySubtitle: "د افغانستان غوره وچې میوې هند او نړیوالو بازارونو ته راوړل.",
    dryCatTitle: "زموږ د وچو میوو انتخاب",
    dryCTA: "د افغانستان غوره وچې میوې سرچینه کړئ",
    dehyTitle: "د اوبو ایستلو فابریکه",
    dehySubtitle:
      "د افغانستان تازه تولیداتو د تل پاتې، صادراتو چمتو محصولاتو بدلول.",
    dehyProcessTitle: "له کروندې تر المارۍ",
    dehyCTA: "د اوبو ایستلو مشارکتونه وپلټئ",
    backToSectors: "← برخو ته راستنیدل",
    titleChairman: "رئیس، د INS ګروپ کمپنۍ · کابل، افغانستان",
    titleViceChairman: "نایب رئیس، INS · د مالیې او عملیاتو مدیر، BioBridge",
    titleDirector:
      "مدیر، INS · بنسټ ایښودونکی او اجراییه رییس، BioBridge Healthcare",
    titleHeadOfBusiness: "د سوداګرۍ مشر، د INS ګروپ کمپنۍ",
    titleDirectorSales: "د پلور او بازارموندنې مدیر، INS",
    titleAdvisor: "سلاکار، INS",
    tagAfghanTrade: "د افغانستان سوداګري",
    tagStrategicLeadership: "ستراتیژیکه رهبري",
    tagBusinessDev: "د سوداګرۍ پراختیا",
    tagFinanceLegal: "مالیه او قانون",
    tagExportImport: "صادرات او واردات",
    tagSupplyChain: "رسونې سلسله",
    tag26Yrs: "۲۶+ کاله",
    tagPharmaBiotech: "درملتون او بایوټیکنالوژي",
    tagWHOExpert: "د WHO ماهر",
    tagQualityMgmt: "د کیفیت مدیریت",
    tag37Yrs: "۳۷+ کاله",
    tagOperations: "عملیات",
    tagProjectDelivery: "د پروژې سپارل",
    tagSalesStrategy: "د پلور ستراتیژي",
    tagMarketDev: "د بازار پراختیا",
    tagCorporateTraining: "شرکتي روزنه",
    tagLeadership: "رهبري",
    tagStrategicPlanning: "ستراتیژیک پلان جوړونه",
    tagCorporateRelations: "شرکتي اړیکې",
    tagCiscoAlumni: "د Cisco پخوانی",
    tagAdvisor: "سلاکار",
    qualDirector: "M.Sc. صنعتي مایکروبیولوژي · Ph.D",
    bioChairman:
      "محمد عمران ناظري د INS ګروپ کمپنیو بنسټ ایښودونکی رییس دی، په افغانستان کې ثبت شوی. د افغانستان په سوداګرۍ کې د ژورو ریښو سره، هغه د شرکت ستراتیژیک لارښود او په ځای کې عملیات د درملو وارداتو، وچو میوو صادراتو او صنعتي اوبو ایستلو په برخو کې رهبري کوي.",
    bioViceChairman:
      "د مالیې، قانون، صادراتو او وارداتو او رسولو سلسلې یو مسلکی کس چې په سوداګرۍ، مدیریت، بهرنۍ سوداګرۍ، قانون او رسولو سلسلې مدیریت کې رسمي زده کړې لري. هغه له ۲۶ کلونو څخه ډیر تجربه لري.",
    bioDirector:
      "د کیفیت مدیریت او عملیاتو مسلکی کس د ۳۷+ کلونو تجربې سره په بایوټیکنالوژۍ صنعت کې. د Bharat Serums & Vaccines Ltd. پخوانی د عملیاتو رییس. د WHO د ماهرینو پینل غړی.",
    bioHeadOfBusiness:
      "ښاغلی ناظر ناظري د INS ګروپ د سوداګرۍ مشر په توګه کار کوي، د شرکت سوداګریز عملیات او د پیرودونکو اړیکې په ټول افغانستان کې پرمخ وړي.",
    bioDirectorSales:
      "اغلې امیمان انصاري د پلور او بازارموندنې یوه مسلکي کس ده چې د بازار پراختیا او برانډ ستراتیژۍ کې ثابت ریکارډ لري. په INS کې، هغه د پلور ستراتیژي، بازار پراختیا او برانډ مشارکتونه رهبري کوي.",
    bioAdvisor:
      "یو برجسته مسلکی کس د Cisco Systems، Vcustomer India Services او Indira Group of Institutes کې د دندې سره. هغه په ستراتیژیک پلان جوړونه، شرکتي اړیکو او سوداګرۍ پراختیا کې ژوره تخصص لري.",

    /* Contact */
    contactLabel: "اړیکه ونیسئ",
    contactTitle: "راځئ چې یوځای یو څه جوړ کړو",
    contactDesc:
      "که تاسو د درملو تولیدونکی یاست، د غوره وچو میوو پیرودونکی یاست یا پانګه اچوونکی — د INS ګروپ ستاسو سره د همکارۍ لپاره چمتو دی.",
    contactOffices: "زموږ دفترونه",
    contactAfgOffice: "د افغانستان دفتر",
    contactAfgAddr: "کابل، افغانستان (ثبت شوی)",
    contactIndiaOffice: "د هند شریک دفتر",
    contactIndiaAddr: "BioBridge، #13 Rachana Blossom، Aundh، Pune 411007",
    contactEmail: "ایمیل",
    contactBusiness: "سوداګریزې پوښتنې",
    contactDirect: "مستقیمه اړیکه",
    contactPhone: "تلیفون",
    contactAfgPhone: "د افغانستان دفتر",
    contactIndiaPhone: "د هند دفتر (INS)",
    contactBioPhone: "BioBridge هند",
    contactFormTitle: "موږ ته پیغام واستوئ",
    contactFormSub: "موږ د ۴۸ ساعتونو دننه ځواب ورکوو",
    contactFirstName: "نوم",
    contactFirstNamePH: "احمد",
    contactLastName: "تخلص",
    contactLastNamePH: "خان",
    contactCompany: "کمپنۍ",
    contactCompanyPH: "ستاسو د کمپنۍ نوم",
    contactEmailLabel: "ایمیل",
    contactEmailPH: "email@company.com",
    contactPhoneLabel: "تلیفون / واټساپ",
    contactPhonePH: "+۹۳ یا +۹۱...",
    contactSector: "د علاقې برخه",
    contactSectorDefault: "برخه غوره کړئ...",
    contactSector1: "د درملو واردات — افغانستان",
    contactSector2: "وچې میوې صادرات — هند ته",
    contactSector3: "د اوبو ایستلو فابریکه همکاري",
    contactSector4: "عمومي سوداګریز پوښتنه",
    contactMessage: "پیغام",
    contactMessagePH:
      "د خپل سوداګرۍ او همکارۍ د څرنګوالي په اړه موږ ته ووایاست...",
    contactSend: "پیغام واستوئ →",
    toastSending: "ستاسو پیغام لیږل کیږي...",
    toastSuccess: "مننه! ستاسو فورمه په بریالیتوب سره وسپارل شوه.",
    toastRateLimitLimit: "ډیرې غوښتنې. مهرباني وکړئ د بیا هڅه کولو دمخه لږ انتظار وکړئ.",
    toastRateLimitCooldown: "مهرباني وکړئ د بل پیغام لیږلو دمخه {seconds} ثانیې انتظار وکړئ.",

    /* Footer */
    footerTagline:
      "د سرحدونو تیریدل، د ژوند بدلول. یوه ثبت شوې افغاني کمپنۍ چې د افغانستان سوداګري له نړۍ سره نښلوي — د BioBridge نړیوال روغتیایی تخصص په ملاتړ.",
    footerSectors: "برخې",
    footerPharma: "د درملو واردات",
    footerDry: "وچې میوې صادرات",
    footerDehy: "د اوبو ایستلو فابریکه",
    footerCompany: "کمپنۍ",
    footerAbout: "د INS په اړه",
    footerHeritage: "زموږ میراث",
    footerWhy: "ولې موږ غوره کړئ",
    footerContact: "اړیکه",
    footerContactCol: "اړیکه",
    footerSister: "خور شرکت",
    footerCopy:
      "© ۲۰۲۶ د INS ګروپ — د عمران نذیر شام سوداګریزه کمپنۍ. په افغانستان کې ثبت شوی.",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fa" : prev === "fa" ? "ps" : "en"));
  };

  const t = (key) => translations[lang]?.[key] || translations.en[key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
