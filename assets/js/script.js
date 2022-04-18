// TIMER DISPLAY

var weddingDate = 1669381200000
var date_now = Date.now()
// get total seconds between the times
var delta = Math.abs(weddingDate - date_now) / 1000;
// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;
// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;
// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;
// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required
console.log(date_now)
console.log(weddingDate)
document.getElementById("time_until").innerHTML = days + " days"

// SELECTOR FOR THINGS

function toggleWalk() {
    document.getElementById("walk").style.display = "flex"
    document.getElementById("eat").style.display = "none"
    document.getElementById("relax").style.display = "none"

    document.getElementById("walk-toggle").classList.add("active")
    document.getElementById("eat-toggle").classList.remove("active")
    document.getElementById("relax-toggle").classList.remove("active")
}
function toggleEat() {
    document.getElementById("walk").style.display = "none"
    document.getElementById("eat").style.display = "flex"
    document.getElementById("relax").style.display = "none"

    document.getElementById("walk-toggle").classList.remove("active")
    document.getElementById("eat-toggle").classList.add("active")
    document.getElementById("relax-toggle").classList.remove("active")
}
function toggleRelax() {
    document.getElementById("walk").style.display = "none"
    document.getElementById("eat").style.display = "none"
    document.getElementById("relax").style.display = "flex"

    document.getElementById("walk-toggle").classList.remove("active")
    document.getElementById("eat-toggle").classList.remove("active")
    document.getElementById("relax-toggle").classList.add("active")
}

// code for slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Next/previous controls
function plusSlides(n) {
    showNextSlides(slideIndex += n);
}

function showNextSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.zIndex = "1"
  dots[slideIndex-1].className += " active";
}

// Logic to ensure slideshow doesn't show above the nav menu

function checkMenu() {
    if(document.getElementById("side-menu").checked == true) {
        document.getElementById("headline_image").style.display = "inline-block";
    } else {
        document.getElementById("headline_image").style.display = "none";
    }
}