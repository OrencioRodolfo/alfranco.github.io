import list from "./list";

const style = `
  h2, h4 {
    margin: 0;
  }

  h2 {
    font-size: 14px;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 14px 0;
    font-size: 13px;
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
    font-size: 10px;
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

  render(menu) {
    this.$container.innerHTML = list(menu)
  }
}