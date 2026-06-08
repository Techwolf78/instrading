import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const now = Date.now();
    const storageKey = "ins_contact_submissions";
    let submissions = [];
    try {
      submissions = JSON.parse(localStorage.getItem(storageKey) || "[]");
    } catch (err) {
      submissions = [];
    }

    // Filter out submissions older than 1 hour (3,600,000 ms)
    const oneHourAgo = now - 3600000;
    submissions = submissions.filter((ts) => ts > oneHourAgo);

    // Check 60-second cooldown from the last submission
    if (submissions.length > 0) {
      const lastSubmit = submissions[submissions.length - 1];
      const secondsPassed = Math.floor((now - lastSubmit) / 1000);
      if (secondsPassed < 60) {
        const remainingSeconds = 60 - secondsPassed;
        setToast({
          type: "error",
          message: t("toastRateLimitCooldown").replace("{seconds}", remainingSeconds),
        });
        setTimeout(() => setToast(null), 5000);
        return;
      }
    }

    // Check hourly limit (max 3 submissions)
    if (submissions.length >= 3) {
      setToast({
        type: "error",
        message: t("toastRateLimitLimit"),
      });
      setTimeout(() => setToast(null), 5000);
      return;
    }

    setToast({ type: "loading", message: t("toastSending") });

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/Business@insgroupco.com",
        {
          method: "POST",
          body: data,
        },
      );

      if (res.ok) {
        setToast({ type: "success", message: t("toastSuccess") });
        form.reset();
        // Record the new successful submission
        submissions.push(Date.now());
        localStorage.setItem(storageKey, JSON.stringify(submissions));
      } else {
        setToast({
          type: "error",
          message:
            "Something went wrong. Please email us directly at Business@insgroupco.com",
        });
      }
    } catch {
      setToast({
        type: "error",
        message:
          "Network error. Please email us directly at Business@insgroupco.com",
      });
    }

    setTimeout(() => setToast(null), 5000);
  };

  return (
    <section
      className="bg-cream py-24 px-6 md:px-12 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #1A8A75 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #0D2137 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[580px] mx-auto mb-14">
          <div className="flex items-center gap-2.5 text-teal text-[11px] tracking-[3px] uppercase mb-3 justify-center font-semibold">
            <div className="w-6 h-[1px] bg-teal" />
            {t("contactLabel")}
          </div>
          <h2 className="font-serif text-3xl sm:text-[42px] font-bold leading-tight mb-4 text-navy">
            {t("contactTitle")}
          </h2>
          <p className="text-[15px] leading-relaxed text-text-mid">
            Whether you are a pharmaceutical manufacturer, a buyer of premium
            dry fruits, or an investor — INS Group is ready to partner with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Information Column — takes 2/5 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.06] shadow-sm">
              {/* Offices */}
              <div className="mb-6">
                <h4 className="text-[10px] tracking-[2px] uppercase text-teal font-semibold mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-teal/50" />
                  {t("contactOffices")}
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-[40px] h-[40px] rounded-xl bg-navy flex items-center justify-center text-[18px] shrink-0 shadow-sm">
                      📍
                    </div>
                    <div className="pt-0.5">
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactAfgOffice")}
                      </strong>
                      <span className="text-xs text-text-light leading-relaxed">
                        {t("contactAfgAddr")}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-[40px] h-[40px] rounded-xl bg-navy flex items-center justify-center text-[18px] shrink-0 shadow-sm">
                      📍
                    </div>
                    <div className="pt-0.5">
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactIndiaOffice")}
                      </strong>
                      <span className="text-xs text-text-light leading-relaxed">
                        {t("contactIndiaAddr")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h4 className="text-[10px] tracking-[2px] uppercase text-teal font-semibold mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-teal/50" />
                  {t("contactEmail")}
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-[40px] h-[40px] rounded-xl bg-teal/15 flex items-center justify-center text-[18px] shrink-0">
                      ✉️
                    </div>
                    <div>
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactBusiness")}
                      </strong>
                      <a
                        className="text-teal no-underline text-xs hover:underline font-medium"
                        href="mailto:Business@insgroupco.com"
                      >
                        Business@insgroupco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-center">
                    <div className="w-[40px] h-[40px] rounded-xl bg-teal/15 flex items-center justify-center text-[18px] shrink-0">
                      ✉️
                    </div>
                    <div>
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactDirect")}
                      </strong>
                      <a
                        className="text-teal no-underline text-xs hover:underline font-medium"
                        href="mailto:shyam@insgroupco.com"
                      >
                        shyam@insgroupco.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h4 className="text-[10px] tracking-[2px] uppercase text-teal font-semibold mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-teal/50" />
                  {t("contactPhone")}
                </h4>
                <div className="space-y-3">
                  <div className="flex gap-3.5 items-center">
                    <div className="w-[40px] h-[40px] rounded-xl bg-teal/15 flex items-center justify-center text-[18px] shrink-0">
                      📞
                    </div>
                    <div>
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactAfgPhone")}
                      </strong>
                      <bdi className="text-xs text-text-light" dir="ltr">
                        {t("contactAfgPhoneNumber")}
                      </bdi>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-center">
                    <div className="w-[40px] h-[40px] rounded-xl bg-teal/15 flex items-center justify-center text-[18px] shrink-0">
                      📞
                    </div>
                    <div>
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactIndiaPhone")}
                      </strong>
                      <bdi className="text-xs text-text-light" dir="ltr">
                        {t("contactIndiaPhoneNumber")}
                      </bdi>
                    </div>
                  </div>
                  <div className="flex gap-3.5 items-center">
                    <div className="w-[40px] h-[40px] rounded-xl bg-teal/15 flex items-center justify-center text-[18px] shrink-0">
                      📞
                    </div>
                    <div>
                      <strong className="block text-[13px] text-navy font-semibold">
                        {t("contactBioPhone")}
                      </strong>
                      <bdi className="text-xs text-text-light" dir="ltr">
                        {t("contactBioPhoneNumber")}
                      </bdi>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column — takes 3/5 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-black/[0.06] shadow-sm h-full">
              <div className="mb-7">
                <h3 className="font-serif text-2xl font-bold text-navy">
                  Send Us a Message
                </h3>
                <p className="text-[13px] text-text-light mt-1">
                  We respond within 48 business hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative">
                {/* Toast notification */}
                {toast && (
                  <div
                    className={`fixed top-24 left-1/2 -translate-x-1/2 z-[999] px-5 py-3 rounded-xl shadow-xl text-sm font-medium transition-all duration-300 animate-fadeIn ${
                      toast.type === "loading"
                        ? "bg-navy text-white"
                        : toast.type === "success"
                          ? "bg-teal text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {toast.type === "loading" && (
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                      )}
                      {toast.type === "success" && "✓"}
                      {toast.type === "error" && "✕"}
                      <span>{toast.message}</span>
                    </div>
                  </div>
                )}

                <input type="hidden" name="_captcha" value="true" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New enquiry from INS Group website!"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                      {t("contactFirstName")}
                    </label>
                    <input
                      type="text"
                      name="First Name"
                      placeholder="Ahmad"
                      required
                      className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                      {t("contactLastName")}
                    </label>
                    <input
                      type="text"
                      name="Last Name"
                      placeholder="Khan"
                      required
                      className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                    {t("contactCompany")}
                  </label>
                  <input
                    type="text"
                    name="Company"
                    placeholder={t("contactCompanyPH")}
                    className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                      {t("contactEmailLabel")}
                    </label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="email@company.com"
                      required
                      className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                      {t("contactPhoneLabel")}
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      placeholder="+93 or +91..."
                      required
                      className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                    {t("contactSector")}
                  </label>
                  <select
                    name="Sector of Interest"
                    required
                    className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white"
                  >
                    <option value="">{t("contactSectorDefault")}</option>
                    <option value="Pharmaceutical Import">
                      {t("contactSector1")}
                    </option>
                    <option value="Dry Fruits Export">
                      {t("contactSector2")}
                    </option>
                    <option value="Dehydration Plant Partnership">
                      {t("contactSector3")}
                    </option>
                    <option value="General Inquiry">
                      {t("contactSector4")}
                    </option>
                  </select>
                </div>

                <div className="flex flex-col text-left">
                  <label className="block text-[11px] font-semibold tracking-[0.5px] text-text-mid mb-1.5">
                    {t("contactMessage")}
                  </label>
                  <textarea
                    name="Message"
                    rows="4"
                    placeholder={t("contactMessagePH")}
                    required
                    className="w-full bg-cream border border-cream-dark rounded-lg px-4 py-3 text-[13px] font-sans text-text-dark outline-none transition-all duration-200 focus:border-teal focus:ring-2 focus:ring-teal/10 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white border-none py-3.5 rounded-xl font-semibold cursor-pointer transition-all duration-200 hover:bg-teal hover:shadow-lg hover:shadow-teal/20 text-sm tracking-[0.3px] mt-1"
                >
                  {t("contactSend")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
