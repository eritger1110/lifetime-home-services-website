const reviews = [
  { author: "Jane D.", text: "Great service and friendly staff!" },
  { author: "Mark S.", text: "The team was professional and efficient." },
  { author: "Ana P.", text: "Highly recommend Lifetime Home Services." },
  { author: "Lee W.", text: "Excellent communication and results." },
  { author: "Paula K.", text: "Five stars for quality and reliability." },
  { author: "Chris M.", text: "Fast, friendly and affordable." }
];

let startIndex = 0;
function renderReviews() {
  const list = document.getElementById('review-list');
  if (!list) return;
  list.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const review = reviews[(startIndex + i) % reviews.length];
    const li = document.createElement('li');
    li.innerHTML = `<strong>${review.author}</strong>: ${review.text}`;
    list.appendChild(li);
  }
  startIndex = (startIndex + 1) % reviews.length;
}

document.addEventListener('DOMContentLoaded', () => {
  renderReviews();
  setInterval(renderReviews, 5000);
});

// TODO: replace static array with Google Places API fetch for live reviews.
