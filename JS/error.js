export const error = {
  screenError: document.querySelector(".notificationBar"),

  open(){
    error.screenError.classList.add("open")
  },
  close(){
    error.screenError.classList.remove("open")
  },
}