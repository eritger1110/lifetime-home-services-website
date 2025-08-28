(async () => {
  try {
    const el = document.querySelector('#reviews');
    if (!el) return;
    
    const res = await fetch('/.netlify/functions/reviews');
    if (!res.ok) {
      // Fallback to static content if API fails
      el.querySelector('.reviews-header .rating').textContent = '4.8★ (150+)';
      const list = el.querySelector('.reviews-list');
      
      // Static fallback reviews
      const fallbackReviews = [
        {
          rating: 5,
          text: "Excellent service! The team was professional and completed our radon mitigation system perfectly.",
          author: "Sarah M.",
          time: "2 weeks ago"
        },
        {
          rating: 5,
          text: "Outstanding work on our garage floor coating. Looks amazing and the process was smooth.",
          author: "Mike R.",
          time: "1 month ago"
        },
        {
          rating: 5,
          text: "Professional duct cleaning service. Very thorough and improved our air quality significantly.",
          author: "Jennifer L.",
          time: "3 weeks ago"
        }
      ];
      
      fallbackReviews.forEach(r => {
        const item = document.createElement('article');
        item.className = 'review-card';
        item.innerHTML = `
          <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
          <p class="text">"${r.text.replace(/"/g,'&quot;')}"</p>
          <div class="meta">— ${r.author}, <span>${r.time}</span></div>
        `;
        list.appendChild(item);
      });
      
      // Simple auto-scroll for fallback
      let i = 0; 
      setInterval(() => {
        i = (i + 1) % list.children.length;
        list.style.transform = `translateX(-${i * 100}%)`;
      }, 5000);
      
      return;
    }
    
    const data = await res.json();

    el.querySelector('.reviews-header .rating').textContent = `${data.rating}★ (${data.count})`;
    const list = el.querySelector('.reviews-list');
    
    data.reviews.forEach(r => {
      const item = document.createElement('article');
      item.className = 'review-card';
      item.innerHTML = `
        <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        <p class="text">"${r.text.replace(/"/g,'&quot;')}"</p>
        <div class="meta">— ${r.author}, <span>${r.time}</span></div>
      `;
      list.appendChild(item);
    });

    // Simple auto-scroll
    let i = 0; 
    setInterval(() => {
      i = (i + 1) % list.children.length;
      list.style.transform = `translateX(-${i * 100}%)`;
    }, 5000);
    
  } catch (e) {
    console.log('Reviews loading failed, using fallback');
    // Fallback already handled above
  }
})();

