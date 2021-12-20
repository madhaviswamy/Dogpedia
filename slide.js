function getSliderString(firstImage, imagesLength) {
  return `<div class="container">

      <div>
      <span class="box">
        <img src="${firstImage}"></img>
        <div class="caption">1/${imagesLength}</div>
      </span>
    </div>

      <button disabled class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </div>`;
}

class Slider {
  images = [];
  sliderRoot = null;
  slideIndex = 1;

  showSlides(nextSlide) {
    if (this.slideIndex === images.length) {
      document.querySelector(`${this.sliderRoot} .next`).disabled = true;
    } else {
      document.querySelector(`${this.sliderRoot} .next`).disabled = false;
    }

    if (this.slideIndex === 1) {
      document.querySelector(`${this.sliderRoot} .prev`).disabled = true;
    } else {
      document.querySelector(`${this.sliderRoot} .prev`).disabled = false;
    }

    if (nextSlide > images.length) {
      this.slideIndex = 1;
    }
    if (nextSlide < 1) {
      this.slideIndex = images.length;
    }

    document
      .querySelector(`${this.sliderRoot} img`)
      .setAttribute("src", images[this.slideIndex - 1]);

    document.querySelector(
      `${this.sliderRoot} .caption`
    ).innerText = `${this.slideIndex}/${images.length}`;
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  constructor(sliderRoot, images) {
    this.images = images;
    this.sliderRoot = sliderRoot;
    document.querySelector(sliderRoot).innerHTML = getSliderString(
      images[0],
      images.length
    );

    document
      .querySelector(`${sliderRoot} .prev`)
      .addEventListener("click", () => {
        this.plusSlides(-1);
      });

    document
      .querySelector(`${sliderRoot} .next`)
      .addEventListener("click", () => {
        this.plusSlides(1);
      });
  }
}

const images = [
  "https://media.istockphoto.com/photos/funny-west-highland-white-terrier-dog-decorated-with-photo-props-sits-picture-id1292884801?b=1&k=20&m=1292884801&s=170667a&w=0&h=L5QgEFpFN1be2Qx8Q9PUWolafU_ecaqYiNwga6eoqxs=",
  "https://media.istockphoto.com/photos/dog-jumping-in-autumn-picture-id1280392364?b=1&k=20&m=1280392364&s=170667a&w=0&h=NGYg-_9YcmJt2vkj79MvNxEcUTMN66Pa0KfvZ5MXVjI=",
  "https://media.istockphoto.com/photos/young-man-is-playing-with-a-dog-and-do-selfie-picture-id1300658241?b=1&k=20&m=1300658241&s=170667a&w=0&h=0lrTViinfnDjbWDgxV0TDDSAXvzSgmrN-pKq0q60hqA=",
  "https://media.istockphoto.com/photos/funny-dog-desires-to-eat-apple-pie-made-for-thanksgiving-dinner-picture-id1341269203?b=1&k=20&m=1341269203&s=170667a&w=0&h=5YRNyBVGh6XPe0MFp4ToxBY7amtt9CMzcCj6K9vsfEA="
];

const slider1 = new Slider("#slider1", images);
