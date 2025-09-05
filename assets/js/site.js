(function(){
  const PHONE_DISPLAY = "(833) 941-6888";
  const PHONE_E164 = "+18339416888";
  // normalize any tel: links
  document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
    a.setAttribute('href', 'tel:'+PHONE_E164);
    if(!a.textContent.trim() || /\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}/.test(a.textContent)) {
      a.textContent = PHONE_DISPLAY;
    }
  });
  // elements that should show phone
  document.querySelectorAll('[data-phone], .phone, .phone-link').forEach(el=>{
    if(el.tagName.toLowerCase()==='a'){
      el.setAttribute('href', 'tel:'+PHONE_E164);
      el.textContent = PHONE_DISPLAY;
    } else {
      el.textContent = PHONE_DISPLAY;
    }
  });
})();

(function(){
  // Reviews Carousel Loader
  fetch('/assets/data/reviews.json')
    .then(r=>r.json())
    .then(reviews=>{
      const inner = document.getElementById('reviewsCarouselInner');
      if(!inner) return;
      inner.innerHTML = reviews.map((r,i)=>`
        <div class="carousel-item${i===0?' active':''}">
          <div class="card card-elev p-4 text-center mx-auto" style="max-width:600px;">
            <div class="mb-2">
              ${'<i class="fas fa-star text-warning"></i>'.repeat(r.rating)}
            </div>
            <blockquote class="mb-3">${r.review}</blockquote>
            <div class="fw-bold">${r.name}</div>
            <div class="text-muted small">${r.location}</div>
          </div>
        </div>
      `).join('');
    });

  // Epoxy Gallery Lightbox
  document.querySelectorAll('.gallery-img').forEach(img=>{
    img.addEventListener('click',function(){
      const modal = document.getElementById('galleryLightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      if(modal && lightboxImg){
        lightboxImg.src = this.src;
        modal.classList.add('show');
        modal.style.display = 'block';
        modal.setAttribute('aria-modal','true');
        modal.removeAttribute('aria-hidden');
        modal.addEventListener('click',()=>{
          modal.classList.remove('show');
          modal.style.display = 'none';
        },{once:true});
      }
    });
  });
})();

(function(){
  // Before/After Slider
  const slider = document.querySelector('.before-after-range');
  const afterImg = document.querySelector('.before-after-after');
  if(slider && afterImg){
    slider.addEventListener('input',function(){
      const val = this.value;
      afterImg.style.clipPath = `inset(0 ${100-val}% 0 0)`;
    });
  }
})();
