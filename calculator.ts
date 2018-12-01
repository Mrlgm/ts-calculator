
class Calculator {
  public container: HTMLDivElement;
  private output: HTMLDivElement;
  private span: HTMLSpanElement
  public n1: string = null
  public n2: string = null
  public operator: string
  public result: string
  public keys: Array<Array<string>> = [
    ["Clear", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]]
  constructor() {
    this.createContainer()
    this.createOutpput()
    this.createButtons()
    this.bindEvents()
  }
  createButton(text: string, container: HTMLElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    if (className) { button.className = className }
    container.appendChild(button)
  }
  createButtons() {
    this.keys.forEach((keysList: Array<string>) => {
      let div: HTMLDivElement = document.createElement('div')
      div.className = 'row'
      keysList.forEach((key: string) => {
        this.createButton(key, div, `button text-${key}`)
      })
      this.container.appendChild(div)
    })
  }
  createContainer() {
    let container = document.createElement('div')
    container.classList.add('calculator')
    document.body.appendChild(container)
    this.container = container
  }
  createOutpput() {
    let output: HTMLDivElement = document.createElement('div')
    output.classList.add('output')
    let span: HTMLSpanElement = document.createElement('span')
    span.textContent = '0'
    this.span = span
    output.appendChild(span)
    this.output = output
    this.container.appendChild(output)
  }
  bindEvents() {
    this.container.addEventListener('click', (event) => {
      if (event.target instanceof HTMLButtonElement) {
        let text = event.target.textContent
        this.updateInput(text)
      }
    })
  }
  updateNumber(name: string, text: string) {
    if (this[name]) {
      this[name] += text
    } else {
      this[name] = text
    }
    this.span.textContent = this[name].toString()
  }
  updateNumbers(text) {
    if (this.operator) {
      this.updateNumber('n2', text)
    } else {
      this.updateNumber('n1', text)
    }
  }
  updateResult() {
    let result;
    let n1: number = parseFloat(this.n1)
    let n2: number = parseFloat(this.n2)
    if (this.operator === '+') {
      result = n1 + n2
    } else if (this.operator === '-') {
      result = n1 - n2
    } else if (this.operator === '×') {
      result = n1 * n2
    } else if (this.operator === '÷') {
      result = n1 / n2
    }
    result = result.toPrecision(12).replace(/.0+$/g, '').replace(/0+e/g, 'e')
    if (n2 === 0) {
      result = '不是数字'
    }
    this.span.textContent = result.toString()
    this.n1 = null
    this.n2 = null
    this.operator = null
    this.result = result
  }
  updateOperator(text) {
    if (this.n1 === null) {
      this.n1 = this.result
    }
    this.operator = text
  }
  updateInput(text) {
    if ('0123456789.'.indexOf(text) >= 0) {
      this.updateNumbers(text)
    } else if ('+-×÷'.indexOf(text) >= 0) {
      this.updateOperator(text)
    } else if ('='.indexOf(text) >= 0) {
      this.updateResult()
    } else if (text === 'Clear') {
      this.n1 = null
      this.n2 = null
      this.operator = null
      this.result = null
      this.span.textContent = '0'
    }
  }
}

new Calculator()