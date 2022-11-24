import {Modal} from "./modal.js"
import {error} from "./error.js"
import {calcIMC, notNumber} from "./utils.js"

const form = document.querySelector("form")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")

//(event)//
form.onsubmit = event => {
  event.preventDefault()

  const valueWeight = weight.value
  const valueHeight = height.value
  const result = calcIMC(valueWeight, valueHeight)
  const errorNumber = notNumber(valueWeight) || notNumber(valueHeight)

  if(errorNumber == true){
    error.open()
    return;
  }
   error.close()

  Modal.open()
  Modal.text.innerText =`Seu IMC é de ${result}`
}

weight.oninput = () => error.close()
height.oninput = () => error.close()

// const input = document.querySelectorAll(".inputValue")

// weight.onkeypress = (event) =>{
//   if(event.returnValue == true){
//     error.close()
//   }
// }

// height.onkeypress = (event) =>{
//   if(event.returnValue == true){
//     error.close()
//   }
// }
