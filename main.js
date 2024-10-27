const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Beautiful In White",
    name: "cantik banget sihh sayangkuhh",
    source:
      "musik/Westlife - Beautiful in white (Lyrics).mp3",
  },
  {
    title: "Can't Help Falling in Love",
    name: "Tolong aku falling in love with Citak",
    source:
      "musik/Elvis Presley - Can’t Help Falling In Love Lirik Terjemahan.mp3",
  },
  {
    title: "A Thousand Years",
    name: "Love u for ever",
    source:
      "musik/Christina Perri - A Thousand Years [Official Music Video].mp3",
  },
  {
    title: "In The Stars",
    name: "stay with me and don't leave me ya!!",
    source:
      "musik/Benson Boone - In The Stars (Official Music Video).mp3",
  },
  {
    title: "Perfect",
    name: "Perfect jadi istriku aja:)",
    source:
      "musik/Ed Sheeran - Perfect (Lyrics).mp3",
  },

  {
    title: "Some Body Love Me",
    name: "Chell imut kaya kamu hehe",
    source:
      "musik/When She Loved Me (cover) by Sarah McLachlan (1).mp3",
  },
  {
    title: "Pure Imagination",
    name: "Ayo buat dunia kita sendiri",
    source:
      "musik/Timothée Chalamet - Pure Imagination (Lyrics) from Wonka.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
