/**
 * i18n.js — Internationalization engine for DARION-NORD
 * Supports: RO (default), EN, RU
 * Translations stored in translations.json
 */
const I18n = (function () {
  let translations = {};
  let currentLang = localStorage.getItem("lang") || "ro";

  // Load translations.json and initialise
  async function init() {
    try {
      const res = await fetch("translations.json");
      if (!res.ok) throw new Error("HTTP " + res.status);
      translations = await res.json();
    } catch (e) {
      console.warn(
        "i18n: could not load translations.json, falling back to RO only.",
        e,
      );
      translations = {};
    }
    applyLanguage(currentLang);
  }

  // Translate a single key; fallback chain: currentLang → ro → key itself
  function t(key) {
    return (
      (translations[currentLang] && translations[currentLang][key]) ||
      (translations["ro"] && translations["ro"][key]) ||
      key
    );
  }

  // Apply all [data-i18n*] attributes on the page
  function applyTranslations() {
    // textContent
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });

    // innerHTML (for content that contains HTML tags, e.g. <strong>)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (val) el.innerHTML = val;
    });

    // placeholder attributes
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const val = t(el.dataset.i18nPlaceholder);
      if (val) el.placeholder = val;
    });

    // aria-label attributes
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = t(el.dataset.i18nAria);
      if (val) el.setAttribute("aria-label", val);
    });
  }

  // Update the active state on the language switcher buttons
  function updateSwitcherUI() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
  }

  // Update the <html lang="..."> attribute
  function updateHtmlLang() {
    document.documentElement.lang = currentLang;
  }

  // Update the page <title>
  function updateTitle() {
    const val = t("page_title");
    if (val && val !== "page_title") document.title = val;
  }

  // Public: switch to a given language
  function setLanguage(lang) {
    if (!["ro", "en", "ru"].includes(lang)) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    updateHtmlLang();
    applyTranslations();
    updateSwitcherUI();
    updateTitle();
  }

  // Public: get current language
  function getLanguage() {
    return currentLang;
  }

  return { init, setLanguage, getLanguage, t };
})();

// Bootstrap after DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Wire up language switcher buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      I18n.setLanguage(this.dataset.lang);
    });
  });

  // Load translations and apply
  I18n.init();
});
