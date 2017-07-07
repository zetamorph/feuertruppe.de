class Player {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  init() {
    this.video = this.container.querySelector(".player__video");
    this.play = this.container.querySelector(".play");
    this.progress = this.container.querySelector(".player__progress");
    this.progressFilled = this.progress.querySelector(".player__progress--filled");
    this.volume = this.container.querySelector(".player__slider");
    this.mute = this.container.querySelector(".mute");
    this.fullScreen = this.container.querySelector(".fullscreen");

    this.video.addEventListener("ended", this.resetPlayButton.bind(this));
    this.play.addEventListener("click", this.togglePlay.bind(this));
    this.video.addEventListener("click", this.togglePlay.bind(this));
    this.mute.addEventListener("click", this.toggleMute.bind(this));
    this.fullScreen.addEventListener("click", this.toggleFullScreen.bind(this));
    this.volume.addEventListener("change", this.handleVolumeChange.bind(this));
    this.progress.addEventListener("click", this.setProgress.bind(this));
    this.video.addEventListener("timeupdate", this.handleProgress.bind(this));
  }

  togglePlay() {
    if(this.video.paused) {
      this.video.play();
    } else {
      this.video.pause();
    }
    this.play.firstChild.classList.toggle("fa-play");
    this.play.firstChild.classList.toggle("fa-pause");
  }

  resetPlayButton() {
    this.play.firstChild.classList.toggle("fa-play");
    this.play.firstChild.classList.toggle("fa-pause");
  }

  toggleMute() {
    if(this.video.muted) {
      this.video.muted = false;
    } else {
      this.video.muted = true;
    }
    this.mute.firstChild.classList.toggle("fa-volume-off");
    this.mute.firstChild.classList.toggle("fa-volume-up");
  }

  toggleFullScreen() {
    if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen();
    } else if (this.video.webkitRequestFullScreen) {
      this.video.webkitRequestFullScreen();
    }  
  }

  handleVolumeChange() {
    this.video.volume = this.volume.value;
  }

  handleProgress() {
    const percentValue = this.video.currentTime / this.video.duration * 100;
    this.progressFilled.style.flexBasis = `${percentValue}%`;
  }

  setProgress(e) {
    const progress = e.offsetX / this.progress.offsetWidth ; 
    this.video.currentTime = this.video.duration * progress;
  }

}