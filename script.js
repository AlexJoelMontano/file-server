
// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function openNav(navName, elmnt, color) {
  // Hide all content with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(navName).style.display = "flex";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
  
}

let content = document.querySelectorAll('.content');

function showFire (content) {
  content = content.length ? content : [content];
  for (var index = 0; index < content.length; index++) {
    content[0].style.display = 'block';
    content[1].style.display = 'none';
    content[2].style.display = 'none';
    content[3].style.display = 'none';
    }
}
function showSmoke (content) {
  content = content.length ? content : [content];
  for (var index = 0; index < content.length; index++) {
    content[1].style.display = 'block';
    content[0].style.display = 'none';
    content[2].style.display = 'none';
    content[3].style.display = 'none';
    }
}
function showWater (content) {
  content = content.length ? content : [content];
  for (var index = 0; index < content.length; index++) {
    content[2].style.display = 'block';
    content[0].style.display = 'none';
    content[1].style.display = 'none';
    content[3].style.display = 'none';
    }
}
function showEarth (content) {
  content = content.length ? content : [content];
  for (var index = 0; index < content.length; index++) {
    content[3].style.display = 'block';
    content[0].style.display = 'none';
    content[1].style.display = 'none';
    content[2].style.display = 'none';
    }
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}