class GallerySlider {
  constructor(containerId, images) {
    this.container = document.getElementById(containerId);
    this.images = images;
    this.currentSlide = 0;
  }

  init() {
    this.slide = this.container.querySelector(".slider-img");
    this.leftBtn = this.container.querySelector(".slide-left-btn");
    this.rightBtn = this.container.querySelector(".slide-right-btn");
    this.rightBtn.addEventListener("click", this.slideRight.bind(this));
    this.leftBtn.addEventListener("click", this.slideLeft.bind(this));
  }

  slideRight() {
    this.fadeOut();
    setTimeout(function() {
      if(this.currentSlide === this.images.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide += 1;
      }
      this.slide.src = this.images[this.currentSlide];
      this.slide.addEventListener("load", this.fadeIn.bind(this));
    }.bind(this), 300);
  }

  slideLeft() {
    this.fadeOut();
    setTimeout(function() {
      if(this.currentSlide === 0) {
        this.currentSlide = this.images.length - 1;
      } else {
        this.currentSlide -= 1;
      }
      this.slide.src = this.images[this.currentSlide];
      this.slide.addEventListener("load", this.fadeIn.bind(this));
    }.bind(this), 300);    
  }

  fadeOut(el) {
    setTimeout(function() {
      this.slide.style.opacity = 0;
    }.bind(this), 0);
  }

  fadeIn(el) {
    setTimeout(function() {
      this.slide.style.opacity = 1;
    }.bind(this), 0);
  }
}