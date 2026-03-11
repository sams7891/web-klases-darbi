const btn1 = document.querySelector("#btm1")
const btn2 = document.querySelector("#btm2")
const btn3 = document.querySelector("#btm3")
const btn4 = document.querySelector("#btm4")

var r = document.querySelector(':root');

function setMain(color) {
  r.style.setProperty('--mainColor', color);
}



function setFooter(color) {
  r.style.setProperty('--footerColor', color);
}

switch(localStorage.getItem("theme")){
    case "blue":
        setMain('#03436e')
        setFooter('#054c7c')
    break;
    case "pink":
        setMain('#8f2094')
        setFooter('#a026a7')
    break;
    case "black":
        setMain('#1b1b1b')
        setFooter('#2b2a2a')
    break;
    case "yellow":
        setMain('#cabe11')
        setFooter('#ddd016')
    break;
}

btn1.addEventListener("click", () => {
    setMain('#03436e')
    setFooter('#054c7c')
    localStorage.setItem("theme", "blue")
})

btn2.addEventListener("click", () => {
    setMain('#8f2094')
    setFooter('#a026a7')
    localStorage.setItem("theme", "pink")
})

btn3.addEventListener("click", () => {
    setMain('#1b1b1b')
    setFooter('#2b2a2a')
    localStorage.setItem("theme", "black")
})

btn4.addEventListener("click", () => {
    setMain('#cabe11')
    setFooter('#ddd016')
    localStorage.setItem("theme", "yellow")
})

let slideIndex = 1;
let slideTimer = 5000
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

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
  setTimeout(showSlides, slideTimer);
}


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if(scroll > 100)
    console.log(scroll)
});
