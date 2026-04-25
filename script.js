const noBtn = document.getElementById('no-btn');

function moveNoBtn() {
  const margin = 80;
  const maxX = window.innerWidth - noBtn.offsetWidth - margin;
  const maxY = window.innerHeight - noBtn.offsetHeight - margin;

  const randomX = Math.floor(Math.random() * maxX) + margin / 2;
  const randomY = Math.floor(Math.random() * maxY) + margin / 2;

  // İlk kaçışta fixed'e geç
  noBtn.style.position = 'fixed';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top  = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoBtn();
});

function onNo() {
  moveNoBtn();
}

function onYes() {
  document.getElementById('main-screen').classList.add('hidden');
  document.getElementById('yes-screen').classList.remove('hidden');

  const video = document.getElementById('response-video');
  video.muted = false;
  video.play().catch(() => {});
}
