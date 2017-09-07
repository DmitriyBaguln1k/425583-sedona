var link = document.querySelector(".search-hotels-btn");
var modal = document.querySelector(".popup");
modal.classList.add("modal-content-closed")
link.addEventListener("click", function(event){
event.preventDefault();
  modal.classList.toggle("modal-content-opened")
});