let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(nextSlide) {
  const slides = document.getElementsByClassName("blogSlides");

  console.log({ slideIndex });

  if (slideIndex === slides.length) {
    document.getElementById("next").disabled = true;
  } else {
    document.getElementById("next").disabled = false;
  }

  if (slideIndex === 1) {
    console.log("disable prev");
    document.getElementById("prev").disabled = true;
  } else {
    document.getElementById("prev").disabled = false;
  }

  if (nextSlide > slides.length) {
    slideIndex = 1;
  }
  if (nextSlide < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
