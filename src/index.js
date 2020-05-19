import data from "./database";
import webcomponents from "./components";
import { defaultLang } from "./lang";

customElements.define("alfranco-header", webcomponents.header);
customElements.define("alfranco-menu", webcomponents.menu);
customElements.define("alfranco-footer", webcomponents.footer);



function render(lang = defaultLang) {
  document.getElementById("root").innerHTML = `
    <alfranco-menu data-menu='${JSON.stringify(data[lang].menu)}'></alfranco-menu>
    <alfranco-footer data-lang='${lang}'></alfranco-footer>
  `;
};

document.addEventListener("switch-language", function eventHandler(e) {
  render(e.detail.lang);
});

render();