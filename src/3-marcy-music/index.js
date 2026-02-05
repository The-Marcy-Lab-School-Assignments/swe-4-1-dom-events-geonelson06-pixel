const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
const playlistList = document.getElementById("playlists-grid");
const nowPlayingTitle = document.getElementById("now-playing-title");

playlists.forEach((playlist) => {
  const li = document.createElement('li');
  li.classList.add("playlist-card");
  li.dataset.title = playlist.title;

  const img = document.createElement('img');
  const p = document.createElement('p');
  img.src = playlist.image;
  img.alt = `${playlist.title} playlist cover`
  p.textContent = playlist.title;

  li.append(img, p);
  playlistList.append(li);
});

playlistList.addEventListener("click", (event) => {
  const card = event.target.closest(".playlist-card");
  if (!card) return;

  const selectedCard = document.querySelector(".playlist-card.selected");
  if (selectedCard) {
    selectedCard.classList.remove("selected");
  }

  card.classList.add("selected");

  nowPlayingTitle.textContent = card.dataset.title;
});
