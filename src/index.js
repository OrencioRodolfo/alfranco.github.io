import menu from "./data/menu";
import translations from "./data/translations";
import webcomponents from "./components";
let selectedLang = navigator.language === "pt" ? "pt" : "en";

customElements.define("alfranco-header", webcomponents.header);
customElements.define("alfranco-menu", webcomponents.menu);
customElements.define("alfranco-footer", webcomponents.footer);

function render(lang = "pt") {
  document.getElementById("swith-lang-btn").innerText = lang.toUpperCase();
  document.getElementById("root").innerHTML = `<alfranco-menu data-menu='${JSON.stringify(menu[lang])}'></alfranco-menu>`
};

document.getElementById("swith-lang-btn").addEventListener("click", function eventHandler(e) {
  selectedLang = selectedLang === "pt" ? "en" : "pt";
  render(selectedLang);
});

render(selectedLang);