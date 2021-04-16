// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
// Get the button that opens the modal
var btn = document.getElementById("regBtn");
var btn2 = document.getElementById("sigBtn");
var btn3 = document.getElementById("sigbtn1");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function openmodal() {
  modal2.style.display = "block";
}
btn3.onclick = function signin() {
modal.style.display = "none";
modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}
span1.onclick = function() {
  modal2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


 
function validateForm() {  
var pw1 = document.getElementById("psw");  
  var pw2 = document.getElementById("psw-repeat");  
  
  pw2.pattern = pw1.value;
  
 if(pw1.value != pw2.value)  
  {   
    document.getElementById("message").innerHTML = "Паролата не съвпада!";  
  } 
else    document.getElementById("message").innerHTML ="";
} 