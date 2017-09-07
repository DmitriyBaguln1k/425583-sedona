var link = document.querySelector(".search-hotels-btn");
var modal = document.querySelector(".popup");
modal.classList.add("modal-content-opened")
link.addEventListener("click", function(event){
event.preventDefault();
  modal.classList.toggle("modal-content-closed")
});