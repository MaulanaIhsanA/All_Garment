/* ============================================================
   Portfolio page — category carousel + per-category album
   Uses the History API so the back button closes the album
   instead of leaving the page. Deep links like
   portfolio.html#tshirt open directly to that album.
   ============================================================ */
const portfolioCarousel = document.getElementById('portfolioCarousel');
const portfolioCarouselWrap = document.getElementById('portfolioCarouselWrap');
const portfolioCarouselView = document.getElementById('portfolioCarouselView');
const portfolioSectionHead = document.getElementById('portfolioSectionHead');
const portfolioAlbum = document.getElementById('portfolioAlbum');

const ALBUM_PHOTO_COUNT = 6;
const ALBUM_PHOTOS = {}; // e.g. ALBUM_PHOTOS.tshirt = ["images/portfolio/tshirt/01.jpg", ...]

let currentAlbumKey = null;

function renderCarousel(){
  const lang = getLang();
  portfolioCarousel.innerHTML = Object.keys(PRODUCTS).map(key=>{
    const p = PRODUCTS[key];
    return `
      <div class="portfolio-slide" data-key="${key}" tabindex="0" role="button" aria-label="Open ${p.name[lang]} gallery">
        <div class="slide-image">
          <img src="${p.thumbImage}" alt="${p.name[lang]}" loading="lazy"
            onerror="this.remove(); this.parentElement.classList.add('no-image')">
          <div class="swatch-placeholder"><span>${p.name[lang]}</span></div>
          <div class="slide-overlay">
            <span class="s-tag">All Garment</span>
            <span class="s-name">${p.name[lang]}</span>
            <span class="s-cta">${t('view_gallery')} <span>→</span></span>
          </div>
        </div>
      </div>`;
  }).join('');

  portfolioCarousel.querySelectorAll('.portfolio-slide').forEach(el=>{
    el.addEventListener('click', ()=>goToAlbum(el.dataset.key));
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') goToAlbum(el.dataset.key); });
  });
}

function scrollCarousel(dir){
  const slide = portfolioCarousel.querySelector('.portfolio-slide');
  const gap = 22;
  const step = slide ? (slide.getBoundingClientRect().width + gap) * 2 : 400;
  portfolioCarouselWrap.scrollBy({left: dir * step, behavior:'smooth'});
}
document.getElementById('carouselPrev').addEventListener('click', ()=>scrollCarousel(-1));
document.getElementById('carouselNext').addEventListener('click', ()=>scrollCarousel(1));

function renderAlbum(key){
  const lang = getLang();
  const p = PRODUCTS[key];
  if(!p) return;
  const photos = (ALBUM_PHOTOS[key] && ALBUM_PHOTOS[key].length) ? ALBUM_PHOTOS[key] : Array.from({length:ALBUM_PHOTO_COUNT});

  portfolioAlbum.innerHTML = `
    <button class="back-btn" id="backToPortfolio">${t('back_to_portfolio')}</button>
    <h2 style="margin-top:0;font-family:var(--font-display);font-weight:400;font-size:clamp(32px,4.4vw,52px);">${p.name[lang]} ${t('gallery_suffix')}</h2>
    <div class="album-grid">
      ${photos.map((src,i)=>`
        <div class="album-photo" data-index="${i}" tabindex="0" role="button" aria-label="Open photo ${i+1}">
          ${src ? `<img src="${src}" alt="${p.name[lang]} ${i+1}" loading="lazy" onerror="this.remove(); this.parentElement.classList.add('no-image')">` : ''}
          <div class="swatch-placeholder"><span>${p.name[lang]} 0${i+1}</span></div>
        </div>`).join('')}
    </div>
  `;

  document.getElementById('backToPortfolio').addEventListener('click', ()=>history.back());
  portfolioAlbum.querySelectorAll('.album-photo').forEach(el=>{
    el.addEventListener('click', ()=>openAlbumLightbox(key, Number(el.dataset.index)));
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') openAlbumLightbox(key, Number(el.dataset.index)); });
  });
}

function showCarousel(){
  currentAlbumKey = null;
  portfolioAlbum.classList.remove('active');
  portfolioAlbum.innerHTML = '';
  portfolioSectionHead.style.display = '';
  portfolioCarouselView.style.display = '';
}

function showAlbum(key, push){
  if(!PRODUCTS[key]) { showCarousel(); return; }
  currentAlbumKey = key;
  renderAlbum(key);
  portfolioSectionHead.style.display = 'none';
  portfolioCarouselView.style.display = 'none';
  portfolioAlbum.classList.add('active');
  if(push) history.pushState({key}, '', '#' + key);
  window.scrollTo({top:0, behavior:'auto'});
}

function goToAlbum(key){
  showAlbum(key, true);
}

window.addEventListener('popstate', ()=>{
  const key = location.hash.replace('#','');
  if(key && PRODUCTS[key]) showAlbum(key, false);
  else showCarousel();
});

const lightbox = document.getElementById('lightbox');
const lightboxImgWrap = document.getElementById('lightboxImgWrap');
const lightboxName = document.getElementById('lightboxName');
const lightboxCat = document.getElementById('lightboxCat');

function openAlbumLightbox(key, index){
  const lang = getLang();
  const p = PRODUCTS[key];
  const photos = (ALBUM_PHOTOS[key] && ALBUM_PHOTOS[key].length) ? ALBUM_PHOTOS[key] : Array.from({length:ALBUM_PHOTO_COUNT});
  const src = photos[index];
  lightboxImgWrap.innerHTML = src
    ? `<img src="${src}" alt="${p.name[lang]} ${index+1}">`
    : `<div class="swatch-placeholder" style="position:relative;min-height:320px;width:640px;max-width:80vw;"><span>${p.name[lang]} 0${index+1}</span></div>`;
  lightboxName.textContent = p.name[lang];
  lightboxCat.textContent = `Photo ${index+1}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e=>{ if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeLightbox(); });

document.addEventListener('langchange', ()=>{
  renderCarousel();
  if(currentAlbumKey) renderAlbum(currentAlbumKey);
});

/* ============================================================
   Init
   ============================================================ */
renderCarousel();
const initialKey = location.hash.replace('#','');
if(initialKey && PRODUCTS[initialKey]) showAlbum(initialKey, false);
