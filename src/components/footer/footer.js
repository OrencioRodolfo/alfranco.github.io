import flowers from "../../assets/img/flowers@3x.png";
import facebook from "../../assets/img/facebook@2x.png";
import { fontSizes } from "../../theme/typography";
import data from "../../database";

const style = `
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #container {
    margin-bottom: 55px;
  }

  .flowers {
    width: 100%;
  }

  h1 {
    color: green;
    text-align: center;
  }

  .banner {
    display: flex;
    justify-content: space-between;
  }

  .banner > li {
    flex-grow: 1;
    flex-basis: 0;
  }

  .thank-you {
    margin: 48px 0;
    text-align: center;
  }

  .contacts {
    text-align: right;
    font-size: ${fontSizes.s};
    text-transform: uppercase;
  }

  .contacts > li {
    padding: 8px 0;
  }
  
  .contacts .phone-number {
    font-size: ${fontSizes.xs}
  }
`

const $template = document.createElement('template')
$template.innerHTML = `
  <style>
    ${style}
  </style>
  <section id="container"></section>
`

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    this.root.appendChild($template.content.cloneNode(true));
    this.$container = this.root.querySelector("#container");
  }

  connectedCallback() {
    this.render(this.dataset.lang);
  }

  render(lang) {
    this.$container.innerHTML = `
      <p class="thank-you">${data[lang].thank_you}</p>
      <ul class="banner">
        <li>
          <img class="flowers" src="${flowers}" />
        </li>
        <li>
          <ul class="contacts">
            <li><span>${data[lang].contacts}</span></li>
            <li><span class="phone-number">${data.phoneNumber}</span></li>
            <li>
              <a href="${data.facebook}" target="_blank;"><img src="${facebook}" /></a>
            </li>  
          </ul>
        </li>
      <ul>
    `;
  }
}