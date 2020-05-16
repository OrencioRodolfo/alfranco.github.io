import menu from "./data/menu";
import translations from "./data/translations";
import webcomponents from "./components";


customElements.define("alfranco-header", webcomponents.header);
customElements.define("alfranco-menu", webcomponents.menu);
customElements.define("alfranco-footer", webcomponents.footer);

function render(lang = "pt") {
  document.getElementById("root").innerHTML = `<alfranco-menu data-menu='${JSON.stringify(menu[lang])}'></alfranco-menu>`
};

document.addEventListener("switch-language", function eventHandler(e) {
  render(e.detail.lang);
});

render();