import list from "./list";

const style = `
  #container {
  }

  ul, li {
    list-style: none;
  }

  p {
    margin: 5px;
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