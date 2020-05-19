import img from "../../assets/img/alfranco@2x.png";
import { fontSizes } from "../../theme/typography";
import { defaultLang } from "../../lang";

const style = `
  section {
    text-align: center;
    padding: 40px 0;
    position: relative;
  }

  img {
    height: 84px;
  }

  button {
    position: absolute;
    right: 0;
    background: whitesmoke;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    padding: 0;
    font-size: ${fontSizes.xs};
    text-transform: uppercase;
  }
`

const $template = document.createElement('template')
$template.innerHTML = `
  <style>
    ${style}
  </style>
  <section>
    <button id="swith-lang-btn"></button>
    <img src="${img}" />
  </section>
`

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    this.root.appendChild($template.content.cloneNode(true));
    this.$langBtn = this.root.querySelector('#swith-lang-btn')
    this.selectedLang = defaultLang;
    this.renderLangButton(this.selectedLang);
  }

  swtichLanguage() {
    this.selectedLang = this.selectedLang === "pt" ? "en" : "pt";
    this.renderLangButton(this.selectedLang);

    const event = new CustomEvent("switch-language", { detail: { lang: this.selectedLang } });
    document.dispatchEvent(event);
  }

  renderLangButton(lang) {
    this.$langBtn.innerText = lang;
  }

  connectedCallback() {
    this.$langBtn.addEventListener("click", this.swtichLanguage.bind(this));
  }
}