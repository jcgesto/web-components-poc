customElements.define('jc-button',
  class extends HTMLElement {

    button

    constructor() {
      super()

      const shadowRoot = this.attachShadow({ mode: 'open' })

      this.button = document.createElement('button')
      this.updateText()

      const linkElem = document.createElement('link')
      linkElem.setAttribute('rel', 'stylesheet')
      linkElem.setAttribute('href', 'button.css')
      shadowRoot.appendChild(linkElem)
      shadowRoot.appendChild(this.button)
    }

    static get observedAttributes() {
      return ['data-text']
    }

    connectedCallback(input) {
      console.log('connectedCallback', input)
    }

    attributeChangedCallback(input) {
      console.log('attributeChangedCallback', input)
      this.updateText()
    }

    updateText() {
      this.button.textContent = this.getAttribute('data-text')
    }
  }
)
