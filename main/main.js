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
closeuser = document.querySelector(".close__2")
function openUser(){
  modalUser.classList.add("open")
}
function closeUser(){
  modalUser.classList.remove("open")
}
for (const user of users){
  user.addEventListener("click",openUser)
}
closeuser.addEventListener("click",closeUser)

// open modal search 


searchs = document.querySelectorAll(".search")
modalsearch = document.querySelector(".modal__search")
closesearch = document.querySelector(".close__3")
modalbackground = document.querySelector(".add__background")
function openSearch(){
  modalsearch.classList.add("open")
  modalbackground.classList.add("open2")
}
function closeSearch(){
  modalsearch.classList.remove("open")
  modalbackground.classList.remove("open2")
}
for (const search of searchs){
  search.addEventListener("click",openSearch)
}
closesearch.addEventListener("click",closeSearch)