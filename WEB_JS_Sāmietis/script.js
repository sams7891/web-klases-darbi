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

let slideIndex = 0;
let slideTimer;

const slides = document.querySelectorAll(".mySlides");

function showSlide(index) {

  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.style.display = "none");

  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function startAutoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}

// Buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Start slideshow
showSlide(slideIndex);
startAutoSlide();

const upButton = document.querySelector("#up-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        upButton.classList.add("show")
    } else {
        upButton.classList.remove("show")
    }
});

upButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
