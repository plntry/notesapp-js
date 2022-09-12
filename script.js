let modal = document.getElementById("myModal");
let openModalbtn = document.getElementById("myBtn");
let closeModalspan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
openModalbtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModalspan.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}