import { fontSizes } from "../../theme/typography";
import entries from "../../assets/img/entradas@2x.png";
import meats from "../../assets/img/carnes@2x.png";
import fish from "../../assets/img/peixe@2x.png";
import pastas from "../../assets/img/massas@2x.png";
import omelets from "../../assets/img/omeletes@2x.png";
import pizzas from "../../assets/img/pizzas@2x.png";

const imgs = {
  entries,
  meats,
  fish,
  pastas,
  omelets,
  pizzas,
}

const style = `
  h2, h4 {
    margin: 0;
  }

  h2 {
    font-size: ${fontSizes.m};
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 14px 0;
    font-size: ${fontSizes.s};
  }

  section {
    margin-bottom: 50px;
  }

  img {
    height: 40px;
  }

  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
  }

  h4 {
    color: #BFB4A3;
  }

  p {
    margin: 0px;
  }

  .menu-item {
    display: flex;
    justify-content: space-between;
    font-style: italic;
  }

  .item-description {
    color: #BFB4A3;
    font-size: ${fontSizes.xs};
  }

  hr {
    height: 2px;
    background: #FFF2DE;
    border: 0;
  }
`

const $element = document.createElement('template')
$element.innerHTML = `
  <style>
    ${style}
  </style>
  <div id="container"></div>
`

export default class Counter extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'closed' })
    this.root.appendChild($element.content.cloneNode(true))

    this.$container = this.root.querySelector('#container')
  }

  connectedCallback() {
    this.render(JSON.parse(this.dataset.menu));
  }

  renderMenuItems(data) {
    return Object.keys(data).map((menuSection) => {
      return (`
        <section>
          <div class="section-header">
            <img src="${imgs[menuSection.toLocaleLowerCase()]}" />
            <div class="section-title">
              <h2>${data[menuSection].title}</h2>
              ${data[menuSection].subtitle ? `<h4>${data[menuSection].subtitle}</h4>` : ""}
            </div>
            <hr />
          </div>
          <ul class="section-body">
        ${data[menuSection].items.map(
          (item) => (`
              <li class="menu-item">
                <div>
                  <p class="item-title">${item.title}</p>
                  ${item.description ? `<p class="item-description">${item.description}</p>` : ""}
                </div>
                <span class="price">${item.price}€</span>
              </li>
            `)
        ).join('')}
          </ul>
          <hr />
        </section>
      `);
    }).join('');
  }

  render(menu) {
    this.$container.innerHTML = this.renderMenuItems(menu)
  }
}