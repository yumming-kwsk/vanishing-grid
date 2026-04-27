'use strict';

const images = [
  'img1.png',
  'img2.png',
  'img3.png',
  'img4.png'
];

document.querySelectorAll('.cell').forEach((cell, i) => {
  const img = images[i % images.length];
  cell.style.backgroundImage = `url(${img})`;
});


document.querySelector('.grid').addEventListener('click', (e) => {
  if (e.target.classList.contains('cell')) {
    const el = e.target;

    // ① その場で消える演出
    el.style.transition = "0.3s";
    el.style.transform = "scale(0)";
    el.style.opacity = "0";

    // ② あとから削除（ここが重要）
    setTimeout(() => {
      el.remove();
    }, 300);
  }
});


const grid = document.querySelector('.grid');
const message = document.querySelector('.message');

grid.addEventListener('click', (e) => {
  const cell = e.target.closest('.cell');

  if (!cell) return;

  cell.style.transition = "0.3s";
  cell.style.transform = "scale(0)";
  cell.style.opacity = "0";

  setTimeout(() => {
    cell.remove();

    console.log(grid.querySelectorAll('.cell').length); // ←確認用

    if (grid.querySelectorAll('.cell').length === 0) {
      message.classList.add('show');
    }
  }, 300);
});

if (grid.querySelectorAll('.cell').length === 0) {
  message.classList.add('show');
}
console.log(grid.children.length);
console.log(message);