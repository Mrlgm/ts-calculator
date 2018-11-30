
class Calculator{
  public container:HTMLDivElement;
  private output:HTMLDivElement;
  private span:HTMLSpanElement
  public keys
  constructor(){}
  createButton(){}
  createButtons(){}
  createContainer(){}
  createOutpput(){}
  bindEvents(){}
}

function createButton(text: string, container: HTMLElement, className: string) {
  let button: HTMLButtonElement = document.createElement('button')
  button.textContent = text
  if (className) { button.className = className }
  container.appendChild(button)
}

let container = document.createElement('div')
container.classList.add('calculator')
document.body.appendChild(container)

let output: HTMLDivElement = document.createElement('div')
output.classList.add('output')
let span: HTMLSpanElement = document.createElement('span')
span.textContent = '0'
output.appendChild(span)
container.appendChild(output)

let n1:number
let n2:number
let operator:string

container.addEventListener('click', function (event) {
  if(event.target instanceof HTMLButtonElement){
    let text = event.target.textContent
    if('0123456789'.indexOf(text)>=0){

    }
  }
})

let keys: Array<Array<string>> = [
  ["Clear", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]]

keys.forEach((keysList: Array<string>) => {
  let div: HTMLDivElement = document.createElement('div')
  keysList.forEach((key: string) => {
    createButton(key, div, `button text-${key}`)
  })
  container.appendChild(div)
})