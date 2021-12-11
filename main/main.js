menu = document.querySelector(".menu")
modal = document.querySelector(".modal")
modalClose = document.querySelector(".content__close")
modalContent = document.querySelector(".content__modal")
modalbackground = document.querySelector(".add__background")
function openModal(){
  modal.classList.add("open")
  modalContent.classList.add("open2")
  modalbackground.classList.add("open2")
}
function closeModal(){
   modal.classList.remove("open")
   modalContent.classList.remove("open2")
   modalbackground.classList.remove("open2")
}
// add more background
menu.addEventListener("click",openModal)
modalClose.addEventListener("click",closeModal)

// open modal user

users = document.querySelectorAll(".user")
modalUser = document.querySelector(".modal__user")
closeUser = document.querySelector(".close__2")
function openModal2(){
  modalUser.classList.add("open")
}
function closeModal2(){
  modalUser.classList.remove("open")
}
for (const user of users){
  user.addEventListener("click",openModal2)
}
closeUser.addEventListener("click",closeModal2)