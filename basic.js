{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6"
    },
    "include": ["src/**/*"]
  }
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
 showSlides(slideIndex = n);
}
function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}    
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
}
 for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" active", "");
}
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
}
     // Get the modal
var iframe = document.getElementById("map");
     // Get the button that opens the modal
   var btn = document.getElementById("myBtn");
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
     // When the user clicks the button, open the modal 
     btn.onclick = function() {
     iframe.style.display = "block";
   }
     // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     iframe.style.display = "none";
     }
     // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
if (event.target == iframe) {
iframe.style.display = "none";
}
}
    /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
  function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }
     // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
  openDropdown.classList.remove('show');
}
}
}
}