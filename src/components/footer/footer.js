const style = `
  h1 {
    color: green;
    text-align: center;
  }
`

const $template = document.createElement('template')
$template.innerHTML = `
  <style>
    ${style}
  </style>
  <h1>Footer</h1>
`

export default class Counter extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
    this.root.appendChild($template.content.cloneNode(true));
  }
}