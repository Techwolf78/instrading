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
    heroBadge: "REGISTERED IN AFGHANISTAN · SISTER CONCERN OF BIOBRIDGE INDIA",
    heroTitle1: "Connecting Afghanistan",
    heroTitle2: "to the World Again",
    heroDari: "شرکت تجارتی عمران نذیر شام",
    heroDesc:
      "INS Group — Imran Nazir Shyam Trading Company — is a registered Afghan enterprise operating across Pharmaceutical Imports, Dry Fruits Exports, and Industrial Dehydration, backed by BioBridge's 15+ years of global healthcare expertise.",
    heroExplore: "Explore our sectors",
    heroGetInTouch: "Get in touch",
    heroAfg: "Afghanistan",
    heroRegHQ: "Registered HQ",
    heroPharma: "Pharma Import",
    heroEssential: "Essential Medicines",
    heroDry: "Dry Fruits",
    heroExport: "Export to India",
    heroDehy: "Dehydration",
    heroPlant: "Plant Operations",

    /* Stats */
    statsYears: "YEARS COMBINED EXPERTISE",
    statsSectors: "BUSINESS SECTORS",
    statsExperience: "YEARS TEAM EXPERIENCE",
    statsNations: "GLOBAL PARTNER NATIONS",

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
    aboutSister: "Sister concern of biobridge healthcare solutions pvt.ltd",
    aboutSisterDetail:
      "Founded 2011 · Pune, India · 80+ years combined pharma expertise",
    aboutPharma: "💊 Pharmaceutical Import — to Afghanistan",
    aboutDry: "🍇 Dry Fruits Export — To India & Beyond",
    aboutDehy: "🏭 Industrial Dehydration Plant",
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
    teamTagline: "Connecting Afghanistan to the World Again",
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
    titleHeadOfBusiness: "Head of Business, Gryphon Academy",
    titleDirectorSales: "Co-Founder, Gryphon Academy",
    titleAdvisor: "Founder, Gryphon Academy",
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
      "Mr. Shashi Bhatt is a distinguished professional with a career spanning Cisco Systems (Senior Sales & Marketing), Vcustomer India Services, and Indira Group of Institutes (Director, Corporate Relations). He brings deep expertise in strategic planning, corporate relations, team management and business development. His advisory role at INS draws on his extensive network across Indian industry, academia and corporate sectors, supporting expansion and institutional partnerships in India.",

    /* Contact */
    contactLabel: "GET IN TOUCH",
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
    contactAfgPhoneNumber: "+93 764 529 206",
    contactIndiaPhone: "India Office",
    contactIndiaPhoneNumber: "+91 816 902 0598",
    contactBioPhone: "BioBridge India",
    contactBioPhoneNumber: "+91 900 434 9041",
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
    toastRateLimitLimit:
      "Too many message requests. Please wait a while before trying again.",
    toastRateLimitCooldown:
      "Please wait {seconds}s before sending another message.",

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
    footerAfgOffice: "Afghanistan Office",
    footerAfgPhone: "+93 764 529 206",
    footerIndiaOffice: "India Office",
    footerIndiaPhone: "+91 816 902 0598",
    footerBioBridgeIndia: "BioBridge India",
    footerBioBridgePhone: "+91 900 434 9041",
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
    heroBadge: "ثبت‌شده در افغانستان · شرکت هم‌گروه بایوبریج هند",
    heroTitle1: "اتصال دوبارهٔ",
    heroTitle2: "افغانستان به جهان",
    heroDari: "شرکت تجارتی عمران نذیر شام",
    heroDesc:
      "گروه INS (شرکت تجارتی عمران نذیر شیام) یک شرکت ثبت‌شده در افغانستان است که در زمینه‌های واردات محصولات دارویی، صادرات میوه‌های خشک و صنایع خشک‌سازی صنعتی فعالیت می‌کند. این مجموعه با بهره‌مندی از بیش از ۱۵ سال تجربه و تخصص جهانی بایوبریج در بخش مراقبت‌های صحی و خدمات درمانی، متعهد به ارائهٔ راهکارهای باکیفیت و پایدار در بازارهای داخلی و بین‌المللی است.",
    heroExplore: "بخش‌های کاری ما",
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
    statsYears: "۱۵+ سال تجربه و تخصص مشترک",
    statsSectors: "۳ حوزهٔ فعالیت تجاری",
    statsExperience: "۸۰+ سال تجربهٔ تیمی",
    statsNations: "۵+ کشور شریک بین‌المللی",

    /* Banner */
    bannerTitle1: "دروازهٔ افغانستان به",
    bannerTitle2: "تجارت جهانی",
    bannerDesc:
      "پیونددهندهٔ داروهای ضروری، میوه‌های خشک باکیفیت و نوآوری‌های زراعتی؛ از قلب افغانستان به بازارهای جهانی.",
    bannerPharma: "واردات ادویه جات",
    bannerDry: "صادرات میوه های خشک",
    bannerDehy: "خشک سازی محصولات زراعتی",
    bannerBio: "همکار با BioBridge",

    /* About */
    aboutWho: "در باره ما",
    aboutTitle: "نیرویی نوین در چشم‌انداز تجارت افغانستان",
    aboutP1:
      "گروپ شرکت‌های INS، که به‌صورت رسمی تحت نام شرکت تجارتی عمران نذیر شام فعالیت می‌کند، یک شرکت ثبت‌شده افغان است که با هدف پاسخ گویی به نیازهای اساسی در بخش واردات و صادرات کشور و ایجاد پیوند مؤثر میان بازارهای داخلی و بین‌المللی تأسیس شده است. این شرکت در راستای توسعه تجارت، تسهیل مبادلات بازرگانی و تقویت اقتصاد افغانستان فعالیت می‌نماید.",
    aboutP2:
      "ما در سه بخش راهبردی و تأثیرگذار فعالیت می‌کنیم: واردات داروهای ضروری به کشور، صادرات میوه‌های خشک باکیفیت و مشهور افغانستان به بازارهای جهانی، و مدیریت و بهره‌برداری از تأسیسات مدرن خشک‌سازی محصولات زراعتی.",
    aboutP3:
      "تیم ما با تلفیق دانش عمیق از بازار افغانستان و معیارهای بین‌المللی تجارت، توانسته است خدماتی حرفه‌ای و قابل اعتماد ارائه نماید. این معیارها و تجارب ارزشمند از شرکت همکار ما، BioBridge، ( بایو بریج )  به ما منتقل شده و پایه‌گذار رویکرد نوین ما در تجارت و بازرگانی بین‌المللی گردیده است.",
    aboutP4:
      "چنان‌که کوه‌ها استوار و پابرجا می‌ایستند و پیکان‌ها به سوی آینده پیش می‌روند، INS نیز با تکیه بر پایداری، نوآوری و حرکت رو به رشد، برای ایجاد تأثیری ماندگار در تجارت افغانستان شکل گرفته است.",
    aboutSister: "شرکت هم گروه/  biobridge healthcare solutions pvt.ltd",
    aboutSisterDetail:
      "تأسیس ۲۰۱۱ · پونه، هند · بیش از ۸۰ سال تخصص ترکیبی داروسازی",
    aboutPharma: "واردات ادویه جات — افغانستان",
    aboutDry: "صادرات میوه‌های خشک — به هند و سایر کشورها",
    aboutDehy: "خشک‌سازی محصولات زراعتی",
    aboutFounded: "تأسیس",
    aboutSectors: "بخش‌ها",
    aboutRegistered: "ثبت شده",
    aboutCompany: "عمران نذیر شام",
    aboutCompanySub: "شرکت تجارتی",

    /* Sectors */
    sectorsLabel: "آنچه ما انجام می‌دهیم",
    sectorsTitle: "سه بخش، یک چشم‌انداز",
    sectorsDesc:
      "گروپ شرکت‌های INS در سه بخش راهبردی و با دقت انتخاب‌شده فعالیت می‌کند؛ بخش‌هایی که هم پاسخگوی مهم‌ترین نیازهای تجارتی افغانستان هستند و هم از فرصت‌های موجود در بازارهای جهانی بهره می‌برند.\n\nبا تمرکز بر این حوزه‌ها، ما در راستای توسعه تجارت، ایجاد ارزش پایدار و تقویت حضور افغانستان در بازارهای بین‌المللی گام برمی‌داریم.",
    sectorsPharma: "داروسازی و محصولات طبی",
    sectorsPharmaDesc:
      "ما داروهای باکیفیت و مطابق با معیارهای بین‌المللی را وارد و در سراسر افغانستان توزیع می‌کنیم و در تأمین نیازهای اساسی بخش صحت، به‌ویژه در زمینه داروهای ضروری، نقش مؤثری ایفا می‌نماییم. فعالیت‌های ما با بهره‌گیری از شبکه جهانی دارویی BioBridge پشتیبانی می‌شود.\n\nحوزه‌های اصلی فعالیت ما شامل:\n\nآنتی‌بیوتیک‌ها\nداروهای سرماخوردگی و آنفلوانزا\nداروهای اطفال و مراقبت‌های صحی کودکان\nداروهای بدون نسخه (OTC)\nداروهای نسخه‌ای (Prescription Drugs)\n\nهدف ما تأمین داروهای مطمئن، مؤثر و قابل دسترس برای بهبود سلامت و رفاه جامعه افغانستان است.",
    sectorsDry: "صادرات میوه‌های خشک",
    sectorsDryDesc:
      "افغانستان یکی از تولیدکنندگان برتر و شناخته‌شده‌ی میوه‌های خشک باکیفیت در سطح جهان می‌باشد. شرکت INS این محصولات زراعتی ممتاز را به بازارهای هند و سایر بازارهای بین‌المللی صادر نموده و از این طریق زمینه‌ی ایجاد عواید پایدار برای دهقانان و جوامع روستایی افغانستان را فراهم می‌سازد.\n\nمحصولات میوه‌های خشک:\n\nکشمش\nپسته\nبادام\nزردآلو خشک\nانجیر خشک\nچهارمغز\n\nاین فعالیت تجارتی نقش مهمی در رشد اقتصادی، تقویت سکتور زراعت و حمایت از تولیدکنندگان داخلی در افغانستان ایفا می‌نماید.",
    sectorsDehy: "خشک سازی صنعتی ( دیهایدریشن )",
    sectorsDehyDesc:
      "کارخانه صنعتی خشک‌سازی ما، محصولات تازه زراعتی افغانستان را به محصولات آماده صادرات و با ماندگاری بالا تبدیل می‌نماید. این پروسه باعث کاهش ضایعات، افزایش مدت نگهداری، و فراهم‌سازی دسترسی به بازارهای جهانی با ارزش بلند برای محصولات زراعتی افغانستان می‌گردد.\n\nخدمات و فعالیت‌ها:\n\nپروسس میوه‌ها\nنگهداری و حفظ مواد غذایی\nارزش‌افزایی محصولات زراعتی\nبسته‌بندی صادراتی محصولات",
    tagAntibiotics: "آنتی‌بیوتیک‌ها",
    tagColdFlu: "داروهای سرماخوردگی و آنفلوانزا",
    tagPaediatric: "داروهای اطفال و مراقبت‌های صحی کودکان",
    tagOTC: "داروهای بدون نسخه (OTC)",
    tagRx: "داروهای نسخه‌ای (Prescription Drugs)",
    tagRaisins: "کشمش",
    tagPistachios: "پسته",
    tagAlmonds: "بادام",
    tagApricots: "زردآلو خشک",
    tagFigs: "انجیر خشک",
    tagWalnuts: "چهارمغز",
    tagFruitProcessing: "پروسس میوه‌ها",
    tagFoodPreservation: "نگهداری و حفظ مواد غذایی",
    tagValueAddition: "ارزش‌افزایی محصولات زراعتی",
    tagExportPackaging: "بسته‌بندی صادراتی محصولات",

    /* Heritage */
    heritageLabel: "ریشه های ما",
    heritageTitle: "با پشتوانه‌ تجربه‌ موفق BioBridge",
    heritageDesc:
      "شرکت INS با بهره‌گیری از تخصص و ارزش‌های کمپنی جهانی BioBridge Healthcare Solutions فعالیت می‌نماید؛ شرکتی که از سال 2011 به‌عنوان یک نام معتبر در عرصه‌ی برتری دارویی شناخته می‌شود و سابقه‌ی درخشان در ارائه خدمات و محصولات با کیفیت دارد.",
    heritageP1:
      "شرکت BioBridge در سال 2011 توسط یک تیم بسیار مجرب و متخصص تأسیس گردید که دارای مجموعاً بیش از 80 سال تجربه مشترک در بخش‌های مختلف صنعت بیوفارما می‌باشد، از جمله: تولید، کنترول کیفیت، تضمین کیفیت و توسعه تجارت و بازارهای بین‌المللی. دفتر مرکزی این شرکت در شهر پونه، هند موقعیت دارد و دفاتر نمایندگی آن در شهرهای چندیگر، اتریش و ایران فعالیت می‌نمایند. بایوبریج (BioBridge) به‌عنوان یک شریک قابل اعتماد در عرصه جهانی دوا سازی (Pharmaceutical) و بایو تکنالوژی (Biotechnology) خود را تثبیت نموده است",
    heritageP2:
      "INS با بهره‌گیری ازین سرمایه‌ی ارزشمند علمی و اندوخته‌های گسترده‌ی تجربه ای و سازمانی، این میراث گران‌بها را در راستای توسعه‌ی هدفمند فعالیت‌های خویش در بستر تجارت افغانستان به‌کار می‌گیرد. این نهاد می‌کوشد تا با ارائه‌ی راه‌حل‌های نوآورانه و مبتنی بر معیارهای جهانی، خدمات و محصولاتی را عرضه نماید که در عین برخورداری از کیفیت و استانداردهای بین‌المللی، با واقعیت‌ها، نیازها و مقتضیات بازار محلی نیز هم‌خوانی کامل داشته و به‌گونه‌ی مؤثر قابل تطبیق و اجرا باشند.",
    smartS: "S",
    smartSTitle: "سیستم",
    smartSDesc: "خدمات یکپارچه و پشتیبانی کامل از هر مشتری",
    smartM: "M",
    smartMTitle: "مدیریت",
    smartMDesc: "واکنش‌پذیری بلند و تشخیص زودهنگام مشکلات",
    smartA: "A",
    smartATitle: "قابل دسترس",
    smartADesc: "شرکای استراتژیک با توانمندی‌های مکمل در سطح جهانی.",
    smartR: "R",
    smartRTitle: "راپوردهی",
    smartRDesc: "حرفه‌ای، منظم و مستند",
    tl1Year: "2011",
    tl1Title: "تأسیس   BioBridge ( بایو بریج )",
    tl1Desc:
      "BioBridge ( بایو بریج ) در سال 2011 در شهر پونه، هند توسط تیمی از متخصصین مجرب تأسیس گردید که مجموعاً بیش از 80 سال تجربه در بخش‌های مختلف صنعت دوا سازی داشتند، از جمله تولید، کنترول کیفیت، تضمین کیفیت  و توسعه تجارت بین‌المللی.",
    tl2Year: "2011–2024",
    tl2Title: "گسترش جهانی",
    tl2Desc:
      "با ایجاد دفاتر در چندی‌گر، اتریش و ایران، BioBridge ( بایو بریج )  به یک شبکه‌ی قابل اعتماد بین‌المللی در بخش مشاوره و توزیع دوا‌سازی تبدیل گردید و فعالیت‌های خود را در چندین قاره گسترش داد.",
    tl3Year: "2026",
    tl3Title: "تأسیس گروه INS",
    tl3Desc:
      "شرکت تجارتی عمران نذیر شام  در افغانستان به‌عنوان شرکت همکار بایو بریج   (BioBridge )  ثبت گردید؛ با هدف ترکیب تخصص جهانی در بخش دوا‌سازی و دانش عمیق از بازار افغانستان، جهت ارائه راه‌حل‌های معیاری و قابل اعتماد در سطح منطقه.",
    tl4Year: "امروز",
    tl4Title: "فعال و در حال رشد",
    tl4Desc:
      "INS  در حال حاضر در واردات دوا، توسعه‌ی کانال‌های صادرات میوه‌های خشک به هند، و ایجاد زیرساخت‌های خشک‌سازی صنعتی محصولات زراعتی فعالیت دارد تا به بازارهای افغانستان و جهان خدمات پایدار و قابل اعتماد ارائه نماید.",
    val1Title: "شایستگی با تعهد",
    val1Desc: "هر خدمت با دقت کامل و تعهد حرفه‌ای ارائه می‌گردد.",
    val2Title: "هوشمندی با صداقت",
    val2Desc: "راه‌حل‌های هوشمند با تکیه بر اصول اخلاقی تجارت ارائه می‌گردد.",
    val3Title: "انضباط با تعهد",
    val3Desc: "اجرا به‌صورت منظم و پیوسته، بدون هیچ‌گونه استثنا.",

    /* Why Us */
    whyLabel: "چرا INS را انتخاب کنیم؟",
    whyTitle: "شریک قابل اعتماد تجارتی شما در افغانستان",
    whyDesc:
      "ما استانداردهای بین‌المللی را با دانش عمیق محلی ترکیب می‌کنیم تا نتایجی مؤثر و ارزشمند ارائه گردد.",
    why1Title: "با پشتوانه بیش از ۱۵ سال برتری در بخش دوا سازی",
    why1Desc:
      "INS  دانش و تجربه عمیق بایو ( BioBridge ) را در زنجیره تأمین دوا، تضمین کیفیت و توسعه تجارت بین‌المللی به ارث گرفته و معیارهای بالای تطبیق و کیفیت را ارائه می‌نماید.",
    why2Title: "شرکت ثبت‌شده در افغانستان — حضور عملی در میدان",
    why2Desc:
      "INS  به‌عنوان یک شرکت ثبت‌شده در افغانستان، دارای مجوزهای رسمی، روابط محلی و شناخت عمیق از بازار است که امکان مدیریت مؤثر روندهای قانونی و شبکه‌های توزیع را فراهم می‌سازد.",
    why3Title: "مدیریت کامل زنجیره تأمین",
    why3Desc:
      "از تهیه و خرید تا ترخیص گمرکی، نگهداری و تحویل نهایی. — INS تمام مراحل زنجیره تأمین را به‌صورت یکپارچه مدیریت می‌نماید تا شفافیت، اطمینان و صرفه‌جویی در هزینه‌ها تضمین گردد.",
    why4Title: "تنوع در چند سکتور",
    why4Desc:
      "INS  در بخش‌های دوا، زراعت و پروسس مواد غذایی فعالیت دارد و از طریق همکاری‌های یکپارچه، زمینه ایجاد هم‌افزایی و گسترش منابع عایداتی برای شرکا را فراهم می‌سازد.",
    why5Title: "شبکه استراتژیک جهانی",
    why5Desc:
      "از طریق حضور بایو بریج  (BioBridge )  در هند، اتریش، ایران و سایر بازارها، INS  شرکای تجارتی را به یک شبکه‌ی جهانی از تولیدکنندگان دوا، متخصصین امور نظارتی  و کارشناسان تجارت متصل می‌سازد.",
    why6Title: "متعهد به رشد افغانستان",
    why6Desc:
      "INS  تنها یک تجارت نیست، بلکه یک مأموریت است. هر معامله در جهت بهبود دسترسی به خدمات صحی، افزایش عواید زراعتی و توسعه صنعتی افغانستان نقش مستقیم دارد.",

    /* Team */
    teamLabel: "تیم ما",
    teamTitle: "آشنایی با رهبری",
    teamDesc:
      "تیمی متشکل از تجربه‌ی تجارتی افغانستان و دهه‌ها تجربه بین‌المللی در دوا‌سازی، مالی، آموزش و فروش",
    roleChairman: "رئیس هیئت مدیره",
    roleViceChairman: "معاون رئیس هیئت مدیره",
    roleDirector: "مدیر",
    roleHeadOfBusiness: "رئیس بخش تجارتی",
    roleDirectorSales: "بنیان گذار مشترک",
    roleAdvisor: "بنیان‌گذار",
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
    titleChairman: "رئیس هیئت مدیره، گروپ شرکت‌های INS · کابل، افغانستان",
    titleViceChairman:
      "معاون رئیس هیئت مدیره INS ، مدیر مالی و عملیات BioBridge",
    titleDirector: "مدیر INS · بنیان‌گذار و مدیرعامل BioBridge Healthcare",
    titleHeadOfBusiness: "رئیس بخش تجارتی، Gryphon Academy",
    titleDirectorSales: "بنیان گذار مشترک، Gryphon Academy",
    titleAdvisor: "بنیان‌گذار، Gryphon Academy",
    tagAfghanTrade: "تجارت افغانستان",
    tagStrategicLeadership: "رهبری استراتژیک",
    tagBusinessDev: "توسعه کسب‌وکار",
    tagFinanceLegal: "مدیریت مالی و حقوقی",
    tagExportImport: "صادرات و واردات بین‌المللی",
    tagSupplyChain: "مدیریت زنجیره تأمین",
    tag26Yrs: "بیش از ۲۶ سال تجربه اجرایی",
    tagPharmaBiotech: "دوا سازی و بایوتکنولوژی",
    tagWHOExpert: "کارشناس WHO",
    tagQualityMgmt: "مدیریت کیفیت",
    tag37Yrs: "بیش از ۳۷ سال تجربه",
    tagOperations: "مدیریت عملیات",
    tagProjectDelivery: "اجرای پروژه‌ها",
    tagSalesStrategy: "استراتژی فروش",
    tagMarketDev: "توسعه بازار",
    tagCorporateTraining: "آموزش‌های سازمانی",
    tagLeadership: "رهبری",
    tagStrategicPlanning: "برنامه‌ریزی استراتژیک",
    tagCorporateRelations: "روابط شرکتی",
    tagCiscoAlumni: "تجربه Cisco",
    tagAdvisor: "مشاور",
    qualDirector: "M.Sc در میکروبیولوژی صنعتی · دکتورا (Ph.D)",
    bioChairman:
      "محمد عمران نظری بنیان‌گذار و رئیس هیئت مدیره گروپ شرکت‌های INS می‌باشد که در افغانستان ثبت گردیده است. وی با تجربه عمیق در تجارت و کسب‌وکار افغانستان، رهبری ستراتیژیک و مدیریت عملیاتی شرکت را در بخش‌های واردات دوا، صادرات میوه‌های خشک و توسعه صنایع خشک‌سازی بر عهده دارد.\n\nدیدگاه ایشان ایجاد پل‌های پایدار تجارتی میان افغانستان و جهان است؛ به‌گونه‌ای که هم فرصت‌های اقتصادی برای جوامع افغان ایجاد گردد و هم نیازهای اساسی وارداتی کشور به‌طور مؤثر تأمین شود.\n\nحوزه‌های کلیدی:\n\nتجارت افغانستان\nرهبری استراتژیک\nتوسعه کسب‌وکار",
    bioViceChairman:
      "آقای شام کومراج یک مدیر ارشد و متخصص برجسته در حوزه‌های مالی، حقوقی، صادرات و واردات و مدیریت زنجیره تأمین می‌باشد. وی دارای تحصیلات تخصصی در رشته‌های تجارت، مدیریت، تجارت خارجی، حقوق و مدیریت زنجیره تأمین است.\n\nبا بیش از ۲۶ سال تجربه حرفه‌ای، ایشان با شرکت‌های مطرحی همچون Kinetic Engineering، Godrej Group و Reliance Industries همکاری داشته و از سال 2011 تاکنون در BioBridge مسئولیت رهبری بخش‌های توسعه تجارت، مالی، منابع بشری، امور حقوقی، اداری و فعالیت‌های تجارتی را بر عهده داشته است.\n\nدر INS، ایشان رهبری استراتژیک امور مالی و عملیات تجارت بین‌المللی را هدایت می‌نماید و نقش کلیدی در ساختاردهی و توسعه پایدار فعالیت‌های شرکت ایفا می‌کند.\n\nحوزه‌های تخصصی:\n\nمدیریت مالی و حقوقی\nصادرات و واردات بین‌المللی\nمدیریت زنجیره تأمین\nبیش از ۲۶ سال تجربه اجرایی",
    bioDirector:
      "داکتر گنیش کومراج یک متخصص برجسته در مدیریت کیفیت و عملیات در صنعت بایوتکنالوژی با بیش از ۳۷ سال تجربه حرفه‌ای می‌باشد. ایشان پیش‌تر به‌عنوان رئیس عملیات در شرکت Bharat Serums & Vaccines Ltd. فعالیت داشته و در شرکت‌های معتبر دیگری همچون Panacea Biotec، Bharat Immunologicals، NEERI و National Cell Culture Sciences نیز ایفای وظیفه نموده‌اند.\n\nوی به‌عنوان کارشناس ثبت‌شده در کمیته NRA سازمان صحی جهان (WHO) در جنیوا معرفی گردیده و در برنامه‌های آموزشی cGMP تحت شبکه جهانی آموزش (Global Training Network) نیز نقش داشته است. همچنین تحت بازرسی نهادهای بین‌المللی معیاری چون WHO، USFDA، EMEA و NAFDAC قرار گرفته است.\n\nدر INS، ایشان رهبری ستراتیژیک در بخش‌های کیفیت، عملیات و توسعه تخنیکی را بر عهده دارد.\n\nحوزه‌های کلیدی:\n\nدوا سازی و بایوتکنولوژی\nکارشناس WHO\nمدیریت کیفیت\nبیش از ۳۷ سال تجربه",
    bioHeadOfBusiness:
      "آقای نذیر نظری به‌عنوان رئیس بخش تجارتی در گروه INS فعالیت دارد و رهبری عملیات تجارتی و مدیریت روابط با مشتریان را در سراسر افغانستان بر عهده دارد.\n\nایشان با تجربه عملی در توسعه کسب‌وکار و مدیریت اجرایی پروژه‌ها، درک عمیقی از تطبیق پروژه‌های چندبخشی، هماهنگی نهادی و مدیریت عملیات دارد. در INS، مسئولیت برنامه‌ریزی تجارتی، ارتباط با شرکا و مدیریت فعالیت‌های روزمره تجارتی را بر عهده دارد.\n\nحوزه‌های کلیدی:\n\nتوسعه کسب‌وکار\nمدیریت عملیات\nاجرای پروژه‌ها",
    bioDirectorSales:
      "خانم اُمی ایمن انصاری یک متخصص با تجربه در حوزه فروش و بازاریابی است که سابقه موفق در توسعه بازار و ستراتیژی برند دارد. ایشان به‌عنوان یک رهبر توانمند شناخته می‌شوند که در مدیریت زمان، هدایت تیم‌ها و عملکرد مؤثر در محیط‌های پرفشار مهارت برجسته دارند.\n\nدر INS، ایشان رهبری ستراتیژی فروش، توسعه بازار و ایجاد مشارکت‌های برند را بر عهده داشته و نقش مهمی در اتصال تجارت افغانستان با خریداران در هند و بازارهای بین‌المللی ایفا می‌نماید.\n\nحوزه‌های کلیدی:\n\nاستراتژی فروش\nتوسعه بازار\nآموزش‌های سازمانی\nرهبری",
    bioAdvisor:
      "آقای شئشی بهات یک متخصص برجسته با سابقه حرفه‌ای در شرکت Cisco Systems در بخش فروش و بازاریابی ارشد، Vcustomer India Services و Indira Group of Institutes به‌عنوان مدیر روابط شرکتی می‌باشد.\n\nایشان دارای تجربه عمیق در برنامه‌ریزی ستراتیژیک، روابط شرکتی، مدیریت تیم و توسعه کسب‌وکار است. نقش مشورتی وی در INS بر اساس شبکه گسترده‌اش در صنعت، اکادمیا و سکتورهای شرکتی هند استوار بوده و در توسعه همکاری‌ها و گسترش ارتباطات نهادی در هند نقش مؤثر ایفا می‌نماید.\n\nحوزه‌های کلیدی:\n\nبرنامه‌ریزی استراتژیک\nروابط شرکتی\nتجربه Cisco\nمشاور",

    /* Contact */
    contactLabel: "تماس با ما",
    contactTitle: "بیایید با هم چیزی بسازیم",
    contactDesc:
      "چه یک تولیدکننده دوا باشید، چه خریدار میوه‌های خشک باکیفیت، یا یک سرمایه‌گذار — گروه INS آماده همکاری با شما است.",
    contactOffices: "دفاتر ما",
    contactAfgOffice: "دفتر افغانستان",
    contactAfgAddr: "کابل، افغانستان (ثبت شده)",
    contactIndiaOffice: "دفتر شریک هند",
    contactIndiaAddr: "BioBridge، #13 Rachana Blossom، Aundh، Pune 411007",
    contactEmail: "ایمیل",
    contactBusiness: "درخواست‌های تجارتی",
    contactDirect: "تماس مستقیم",
    contactPhone: "تلفن",
    contactAfgPhone: "دفتر افغانستان",
    contactAfgPhoneNumber: "۰۰۹۳ ۷۶۴۵۲۹۲۰۶",
    contactIndiaPhone: "دفتر هند",
    contactIndiaPhoneNumber: "۰۰۹۱ ۸۱۶۹۰۲۰۵۹۸",
    contactBioPhone: "بایوبریج هند",
    contactBioPhoneNumber: "۰۰۹۱ ۹۰۰۴۳۴۹۰۴۱",
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
    toastRateLimitLimit:
      "درخواست‌های پیام بسیار زیاد است. لطفاً قبل از تلاش مجدد کمی صبر کنید.",
    toastRateLimitCooldown:
      "لطفاً {seconds} ثانیه قبل از ارسال پیام دیگر صبر کنید.",

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
    footerAfgOffice: "دفتر افغانستان",
    footerAfgPhone: "۰۰۹۳ ۷۶۴۵۲۹۲۰۶",
    footerIndiaOffice: "دفتر هند",
    footerIndiaPhone: "۰۰۹۱ ۸۱۶۹۰۲۰۵۹۸",
    footerBioBridgeIndia: "بایوبریج هند",
    footerBioBridgePhone: "۰۰۹۱ ۹۰۰۴۳۴۹۰۴۱",
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
    contactAfgPhoneNumber: "۰۰۹۳ ۷۶۴۵۲۹۲۰۶",
    contactIndiaPhone: "د هند دفتر",
    contactIndiaPhoneNumber: "۰۰۹۱ ۸۱۶۹۰۲۰۵۹۸",
    contactBioPhone: "بایوبریج هند",
    contactBioPhoneNumber: "۰۰۹۱ ۹۰۰۴۳۴۹۰۴۱",
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
    toastRateLimitLimit:
      "ډیرې غوښتنې. مهرباني وکړئ د بیا هڅه کولو دمخه لږ انتظار وکړئ.",
    toastRateLimitCooldown:
      "مهرباني وکړئ د بل پیغام لیږلو دمخه {seconds} ثانیې انتظار وکړئ.",

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
    footerAfgOffice: "د افغانستان دفتر",
    footerAfgPhone: "۰۰۹۳ ۷۶۴۵۲۹۲۰۶",
    footerIndiaOffice: "د هند دفتر",
    footerIndiaPhone: "۰۰۹۱ ۸۱۶۹۰۲۰۵۹۸",
    footerBioBridgeIndia: "بایوبریج هند",
    footerBioBridgePhone: "۰۰۹۱ ۹۰۰۴۳۴۹۰۴۱",
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
