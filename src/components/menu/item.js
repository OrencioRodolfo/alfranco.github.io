const style = `
  .container {
    display: flex;
    justify-content: space-between;
  }

  .potential-returns-container, input {
    text-align: right;
  }

  .potential-returns-container, .runner-section {
    font-weight: bold;
  }

  .potential-returns-container {
    margin-top: 5px;
  }

  input {
    border: 1px solid #303030;
    border-radius: 3px;
    width: 70px;
    padding: 4px;
  }
`

const $element = document.createElement('template')
$element.innerHTML = `
  <style>
    ${style}
  </style>
  <div class="container">
    <div class="runner-section">
      <div id="runner-name"></div>
      <div>@<span id="odd"></span></div>
    </div>
    <div class="stake-returns-section">
      <div class="stake-input-container">
        <input type="number" name="stake" value="0"/>
      </div>
      <div class="potential-returns-container">
        €<span id="potential-return">0.00</span>
      </div>
    </div>
  </div>
`

export default class Counter extends HTMLElement {
  constructor() {
    super()
    this.root = this.attachShadow({ mode: 'closed' })
    this.root.appendChild($element.content.cloneNode(true))

    this.$runnerNameEl = this.root.querySelector('#runner-name')
    this.$oddEl = this.root.querySelector('#odd')
  }

  // lifecycle callbacks
  connectedCallback() {
    const { name, odd } = this.dataset
    this.render(name, odd)
  }

  render(name, odd) {
    this.$runnerNameEl.innerText = name
    this.$oddEl.innerText = odd
  }
}