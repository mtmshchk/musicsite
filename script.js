// 1) Найти наиболее часто встречающуюся букву
function mostFrequentLetter() {
  const text = prompt("Введите текст:");
  if (!text) return;

  const letters = text.toLowerCase().replace(/[^a-zа-яё]/g, "");
  if (!letters) {
    alert("В тексте нет букв.");
    return;
  }

  const freq = {};
  for (let char of letters) {
    freq[char] = (freq[char] || 0) + 1;
  }

  let maxLetter = null;
  let maxCount = 0;
  for (let char in freq) {
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxLetter = char;
    }
  }

  alert(`Самая частая буква: "${maxLetter}", количество: ${maxCount}`);
}

// 2) Сменить пастельный цвет блока
function changeColor() {
  const box = document.getElementById("colorBox");
  if (!box) return;

  const pastelColors = [
    "#ffeef5",
    "#e8f7ff",
    "#fdf5e6",
    "#f3ecff",
    "#e7ffe9"
  ];
  const random = pastelColors[Math.floor(Math.random() * pastelColors.length)];
  box.style.background = random;
}

// 3) Посчитать количество слов в тексте
function countWords() {
  const text = prompt("Введите предложение или небольшой текст:");
  if (!text) return;

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  alert(`Количество слов: ${words.length}`);
}
