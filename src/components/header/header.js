import img from "../../assets/img/alfranco.png";

const style = `
  section {
    text-align: center;
    padding: 40px 0;
    position: relative;
  }

  button {
    position: absolute;
    right: -26px;
    background: whitesmoke;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    padding: 0;
    font-size: 12px;
    text-transform: uppercase;
  }
`

const $template = document.createElement('template')
$template.innerHTML = `
  <style>
    ${style}
  </style>
  <section>
    <button id="swith-lang-btn">EN</button>
    <img src="${img}" />
  </section>
`

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    this.root.appendChild($template.content.cloneNode(true));
    this.$langBtn = this.root.querySelector('#swith-lang-btn')
    this.selectedLang = navigator.language === "pt" ? "pt" : "en";
  }

  swtichLanguage() {
    this.selectedLang = this.selectedLang === "pt" ? "en" : "pt";
    this.update();

    const event = new CustomEvent("switch-language", { detail: { lang: this.selectedLang } });
    document.dispatchEvent(event);
  }

  update() {
    this.$langBtn.innerText = this.selectedLang;
  }

  connectedCallback() {
    this.$langBtn.addEventListener("click", this.swtichLanguage.bind(this));
  }
}