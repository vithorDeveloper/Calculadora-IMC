export const Modal = {
  popup: document.querySelector(".containerPopup"),
  text: document.querySelector("h2"),
  button: document.querySelector(".popup button"),

  open(){
    Modal.popup.classList.add("open")
  },
  close(){
    Modal.popup.classList.remove("open")
  },
}

Modal.button.onclick = () => Modal.close()

window.addEventListener("keypress", popupEsc)

function popupEsc(event) {
  if(event.key === 'V'){
      Modal.close()
    }
}