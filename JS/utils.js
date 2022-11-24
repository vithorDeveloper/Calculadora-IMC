export function calcIMC(valueWeight, valueHeight) {
  return (valueWeight/ ((valueHeight / 100) ** 2)).toFixed(1)
}

export function notNumber(value) {
return isNaN(value) || value == ""
}

// export const inputClose = {
//   input: document.querySelector(".input-wapper"),

//   close(){
//     inputClose.input.onkeypress = (event) =>{
//       if(event.returnValue == true){
//         error.close()
//       }
//     }
//   },
  
// }
