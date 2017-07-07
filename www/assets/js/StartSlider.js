var StartSlider = (function() {
  var images = [
    { index : 0,
      fileName : "assets/img/intro/feuershow-feuerhoop-frieda-jena.jpg",
      position: "center center",
      size: "cover"
    }, 
    { index: 1,
      fileName : "assets/img/intro/feuershow-feuerhoop-frieda-anna-jena.jpg",
      position: "center center",
      size: "cover"
    },
    { index: 2,
      fileName: "assets/img/intro/feuershow-feuerjonglage-martin-johannes-jena.jpg",
      position: "center center",
      size: "cover"
    }
  ];
  var currentSlide = 0;
  var slideDiv = document.getElementById("entrance-slide");
  var leftBtn = document.getElementById("start-slide-left-btn");
  var rightBtn = document.getElementById("start-slide-right-btn");

  function bindUI() {
    leftBtn.addEventListener("click", function() {
      if (currentSlide !== 0) {
        currentSlide--;
        fadeOut(slideDiv);
        setTimeout(function() {
          changeBackgroundImage(slideDiv);
          fadeIn(slideDiv)
          }, 500);
      }
    });
    rightBtn.addEventListener("click", function() {
      if (currentSlide !== images.length-1) {
        currentSlide++;
        fadeOut(slideDiv);
        setTimeout(function() {
          changeBackgroundImage(slideDiv);
          fadeIn(slideDiv)
          }, 500);
      }
    });
  }

  function changeBackgroundImage(element) {
    element.style.backgroundImage = "url('" + images[currentSlide].fileName + "')";
    element.style.backgroundPosition = images[currentSlide].position;
    element.style.backgroundSize = images[currentSlide].size;
  }

  function fadeOut(element) {
    element.style.opacity = "0";
    var temp = element.offsetHeight;
  }

  function fadeIn(element) {
    element.style.opacity = "1";
    var temp = element.offsetHeight;
  }

  return {
    init : function() {
      bindUI();
    }
  };
})();