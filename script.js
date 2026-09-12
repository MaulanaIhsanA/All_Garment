/* ============================================================
   ALL GARMENT — App Data
   Edit PRODUCTS / PORTFOLIO below to update content & images.
   ============================================================ */

// Shared fabric/material reference. Each product references a subset by key.
// Product catalog — data sourced from ALL GARMENT product assets.
// To add a new product: add a new key here following the same shape.
const PRODUCTS = {
  tshirt:{
    index:"01",
    name:"T-Shirt",
    thumbImage:"images/catalog/01-tshirt/thumb.jpg",
    detailImage:"images/catalog/01-tshirt/detail.jpg",
    description:"Everyday custom t-shirt for community, event, and corporate merchandise needs.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/01-tshirt/measure.png", rows:[["XS", 64, 48, 20], ["S", 66, 50, 21], ["M", 68, 52, 22], ["L", 70, 54, 23], ["XL", 72, 56, 24], ["2XL", 74, 58, 25], ["3XL", 77, 60, 26], ["4XL", 79, 63, 27]]},
    ]},
    materials:[["Cotton Combed 30 s", "12 Pcs", "Rp 55.000 - Rp 65.000"], ["Cotton Combed 24 s", "12 Pcs", "Rp 58.000 - Rp 68.000"], ["Cotton Combed 20 s", "12 Pcs", "Rp 60.000 - Rp 70.000"], ["Cotton Combed 18 s", "12 Pcs", "Rp 62.000 - Rp 72.000"]],
  },
  kemeja:{
    index:"02",
    name:"Kemeja",
    thumbImage:"images/catalog/02-kemeja/thumb.jpg",
    detailImage:"images/catalog/02-kemeja/detail.jpg",
    description:"Professional custom shirt suitable for company uniforms, organizations, events, and corporate needs.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/02-kemeja/measure.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 85.000 - Rp 110.000"], ["Japan Drill", "12 Pcs", "Rp 95.000 - Rp 120.000"], ["Nagata Drill", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Tropical", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Ribstop", "12 Pcs", "Rp 95.000 - Rp 115.000"], ["Taipan", "12 Pcs", "Rp 115.000 - Rp 140.000"]],
  },
  workshirt:{
    index:"03",
    name:"WorkShirt",
    thumbImage:"images/catalog/03-workshirt/thumb.jpg",
    detailImage:"images/catalog/03-workshirt/detail.jpg",
    description:"Heavy-duty work shirt built for industrial and field use, reinforced for daily wear.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:"Regular", measureImage:"images/catalog/03-workshirt/measure-regular.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
      {label:"Boxy", measureImage:"images/catalog/03-workshirt/measure-boxy.png", rows:[["XS", 60, 54, 27], ["S", 60, 56, 27], ["M", 62, 58, 29], ["L", 62, 60, 29], ["XL", 64, 63, 31], ["2XL", 64, 65, 31]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 90.000 - Rp 115.000"], ["Japan Drill", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Nagata Drill", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Tropical", "12 Pcs", "Rp 110.000 - Rp 135.000"], ["Ribstop", "12 Pcs", "Rp 100.000 - Rp 120.000"], ["Taipan", "12 Pcs", "Rp 120.000 - Rp 145.000"]],
  },
  pdh:{
    index:"04",
    name:"PDH",
    thumbImage:"images/catalog/04-pdh/thumb.jpg",
    detailImage:"images/catalog/04-pdh/detail.jpg",
    description:"Formal daily working attire (Pakaian Dinas Harian) tailored for institutional and organizational standards.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/04-pdh/measure.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 95.000 - Rp 120.000"], ["Japan Drill", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Nagata Drill", "12 Pcs", "Rp 110.000 - Rp 135.000"], ["Tropical", "12 Pcs", "Rp 115.000 - Rp 140.000"], ["Ribstop", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Taipan", "12 Pcs", "Rp 125.000 - Rp 150.000"]],
  },
  jaket:{
    index:"05",
    name:"Jaket",
    thumbImage:"images/catalog/05-jaket/thumb.jpg",
    detailImage:"images/catalog/05-jaket/detail.jpg",
    description:"Structured outerwear designed for branding visibility and durability in outdoor conditions.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/05-jaket/measure.png", rows:[["XS", 62, 44, 54], ["S", 64, 47, 55], ["M", 66, 50, 56], ["L", 68, 53, 57], ["XL", 70, 56, 58], ["2XL", 74, 59, 59], ["3XL", 76, 62, 59], ["4XL", 78, 65, 60]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 135.000 - Rp 165.000"], ["Japan Drill", "12 Pcs", "Rp 145.000 - Rp 175.000"], ["Nagata Drill", "12 Pcs", "Rp 150.000 - Rp 180.000"], ["Tropical", "12 Pcs", "Rp 155.000 - Rp 185.000"]],
  },
  workjacket:{
    index:"06",
    name:"Work Jacket",
    thumbImage:"images/catalog/06-workjacket/thumb.jpg",
    detailImage:"images/catalog/06-workjacket/detail.jpg",
    description:"Heavy-duty field jacket built with reinforced fabric for demanding outdoor and industrial work.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/06-workjacket/measure.png", rows:[["S", 59, 52, 55], ["M", 59, 54, 56], ["L", 60, 56, 57], ["XL", 60, 59, 58], ["2XL", 62, 62, 59], ["3XL", 62, 64, 59], ["4XL", 66, 68, 60]]},
    ]},
    materials:[["Baby Canvas", "12 Pcs", "Rp 160.000 - Rp 195.000"], ["Corduroy", "12 Pcs", "Rp 180.000 - Rp 220.000"], ["Canvas Marsoto", "12 Pcs", "Rp 170.000 - Rp 210.000"]],
  },
  rompi:{
    index:"07",
    name:"Rompi",
    thumbImage:"images/catalog/07-rompi/thumb.jpg",
    detailImage:"images/catalog/07-rompi/detail.jpg",
    description:"Utility and safety vest built with reinforced panels, suitable for field and operational teams.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH"],variants:[
      {label:null, measureImage:"images/catalog/07-rompi/measure.png", rows:[["XS", 66, 50], ["S", 68, 52], ["M", 70, 54], ["L", 72, 56], ["XL", 74, 58], ["2XL", 77, 61], ["3XL", 79, 63], ["4XL", 81, 66]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 75.000 - Rp 95.000"], ["Japan Drill", "12 Pcs", "Rp 85.000 - Rp 105.000"], ["Nagata Drill", "12 Pcs", "Rp 90.000 - Rp 110.000"], ["Tropical", "12 Pcs", "Rp 95.000 - Rp 115.000"], ["Ribstop", "12 Pcs", "Rp 85.000 - Rp 105.000"], ["Taipan", "12 Pcs", "Rp 105.000 - Rp 125.000"]],
  },
  jaslab:{
    index:"08",
    name:"Jas Lab",
    thumbImage:"images/catalog/08-jaslab/thumb.jpg",
    detailImage:"images/catalog/08-jaslab/detail.jpg",
    description:"Professional lab coat tailored for clinical, laboratory, and educational institutions requiring a clean, formal presentation.",
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/08-jaslab/measure.png", rows:[["S", 84, 52, 54], ["M", 86, 54, 56], ["L", 88, 58, 58], ["XL", 90, 60, 60], ["2XL", 92, 64, 62], ["3XL", 95, 68, 64], ["4XL", 97, 70, 66]]},
    ]},
    materials:[["Oxford", "12 Pcs", "Rp 85.000 - Rp 110.000"]],
  },
  lanyard:{
    index:"09",
    name:"Lanyard & ID Card",
    thumbImage:"images/catalog/09-lanyard/thumb.jpg",
    detailImage:"images/catalog/09-lanyard/detail.jpg",
    description:"Custom woven lanyard paired with a durable printed ID card, designed for employee identification and event access.",
    sizeChart:null,
    materials:[["Tissue", "12 Pcs", "Rp 15.000 - Rp 25.000"], ["Nylon", "12 Pcs", "Rp 12.000 - Rp 20.000"]],
  },
};

/* ============================================================
   Render — Catalog
   ============================================================ */
const catalogGrid = document.getElementById('catalogGrid');

function renderCatalog(){
  catalogGrid.innerHTML = Object.keys(PRODUCTS).map(key=>{
    const p = PRODUCTS[key];
    return `
      <div class="product-card" data-key="${key}" tabindex="0" role="button" aria-label="View ${p.name} details">
        <span class="p-index">${p.index}</span>
        <div class="thumb">
          <img src="${p.thumbImage}" alt="${p.name}" loading="lazy"
            onerror="this.remove(); this.parentElement.classList.add('no-image')">
          <div class="swatch-placeholder"><span>${p.name}</span></div>
        </div>
        <div class="overlay">
          <p class="p-name">${p.name}</p>
          <p class="p-view">View Details <span>→</span></p>
        </div>
      </div>`;
  }).join('');

  catalogGrid.querySelectorAll('.product-card').forEach(card=>{
    card.addEventListener('click', ()=>openProduct(card.dataset.key));
    card.addEventListener('keypress', e=>{ if(e.key==='Enter') openProduct(card.dataset.key); });
  });
}

const catalogGridView = document.getElementById('catalogGridView');
const productDetail = document.getElementById('productDetail');

function renderSizeChart(sizeChart){
  if(!sizeChart) return '';
  const hasMultiple = sizeChart.variants.length > 1;

  const toggleHtml = hasMultiple ? `
    <div class="size-toggle" role="tablist">
      ${sizeChart.variants.map((v,i)=>`<button type="button" data-variant="${i}" class="${i===0 ? 'active' : ''}">${v.label}</button>`).join('')}
    </div>` : '';

  const panelsHtml = sizeChart.variants.map((v,i)=>{
    const headerCells = sizeChart.columns.map(c=>`<th>${c}</th>`).join('');
    const rows = v.rows.map(r=>`<tr>${r.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('');
    const measureImg = v.measureImage ? `
      <div class="measure-image">
        <img src="${v.measureImage}" alt="Cara ukur ${v.label || ''}" loading="lazy"
          onerror="this.parentElement.style.display='none'">
      </div>` : '';
    const hiddenAttr = (hasMultiple && i !== 0) ? ' style="display:none;"' : '';
    return `
      <div class="size-variant-panel" data-variant-panel="${i}"${hiddenAttr}>
        ${measureImg}
        <table class="size-table">
          <thead><tr>${headerCells}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }).join('');

  return `
    <div class="detail-block">
      <h3>Size Chart (cm)</h3>
      ${toggleHtml}
      ${panelsHtml}
    </div>`;
}

function wireSizeToggle(scope){
  const toggle = scope.querySelector('.size-toggle');
  if(!toggle) return;
  const buttons = toggle.querySelectorAll('button');
  const panels = scope.querySelectorAll('.size-variant-panel');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.toggle('active', b === btn));
      panels.forEach(p=>{
        p.style.display = (p.dataset.variantPanel === btn.dataset.variant) ? '' : 'none';
      });
    });
  });
}

function renderMaterials(materials){
  const rows = materials.map(m=>`
      <tr>
        <td>${m[0]}</td>
        <td>${m[1]}</td>
        <td>${m[2]}</td>
      </tr>`).join('');

  return `
    <div class="materials-section">
      <h3>Available Materials &amp; Price Range</h3>
      <p class="table-scroll-hint">← Swipe to see prices →</p>
      <div class="materials-table-wrap">
        <table class="materials-table">
          <thead><tr><th>Material</th><th>Quantity</th><th>Price Range</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="price-note">Final price depends on material, quantity, design complexity, embroidery, printing, and additional customization.</p>
    </div>`;
}

function openProduct(key){
  const p = PRODUCTS[key];
  if(!p) return;

  productDetail.innerHTML = `
    <button class="back-btn" id="backToCatalog">← Back to Catalog</button>
    <div class="detail-grid">
      <div class="detail-image">
        <img src="${p.detailImage}" alt="${p.name}"
          onerror="this.remove(); this.parentElement.classList.add('no-image')">
        <div class="swatch-placeholder"><span>${p.name}</span></div>
      </div>
      <div class="detail-info">
        <h2>${p.name}</h2>
        <p class="d-desc">${p.description}</p>
        ${renderSizeChart(p.sizeChart)}
      </div>
    </div>
    ${renderMaterials(p.materials)}
  `;

  catalogGridView.style.display = 'none';
  productDetail.classList.add('active');
  document.getElementById('backToCatalog').addEventListener('click', closeProduct);
  wireSizeToggle(productDetail);
  document.getElementById('page-catalog').scrollTo({top:0, behavior:'auto'});
  window.scrollTo({top:0, behavior:'auto'});
}

function closeProduct(){
  productDetail.classList.remove('active');
  productDetail.innerHTML = '';
  catalogGridView.style.display = '';
}


/* ============================================================
   Render — Portfolio (carousel of categories + per-category album)
   Add real photos later by filling ALBUM_PHOTOS[key] with image
   data URIs or paths — until then, placeholder slots are shown.
   ============================================================ */
const portfolioCarousel = document.getElementById('portfolioCarousel');
const portfolioCarouselWrap = document.getElementById('portfolioCarouselWrap');
const portfolioCarouselView = document.getElementById('portfolioCarouselView');
const portfolioAlbum = document.getElementById('portfolioAlbum');

const ALBUM_PHOTO_COUNT = 6;
const ALBUM_PHOTOS = {}; // e.g. ALBUM_PHOTOS.tshirt = ["data:image/jpeg;base64,...", ...]

function renderCarousel(){
  portfolioCarousel.innerHTML = Object.keys(PRODUCTS).map(key=>{
    const p = PRODUCTS[key];
    return `
      <div class="portfolio-slide" data-key="${key}" tabindex="0" role="button" aria-label="Open ${p.name} gallery">
        <div class="slide-image">
          <img src="${p.thumbImage}" alt="${p.name}" loading="lazy"
            onerror="this.remove(); this.parentElement.classList.add('no-image')">
          <div class="swatch-placeholder"><span>${p.name}</span></div>
          <div class="slide-overlay">
            <span class="s-tag">All Garment</span>
            <span class="s-name">${p.name}</span>
            <span class="s-cta">View Gallery <span>→</span></span>
          </div>
        </div>
      </div>`;
  }).join('');

  portfolioCarousel.querySelectorAll('.portfolio-slide').forEach(el=>{
    el.addEventListener('click', ()=>openAlbum(el.dataset.key));
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') openAlbum(el.dataset.key); });
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

function openAlbum(key){
  const p = PRODUCTS[key];
  if(!p) return;
  const photos = (ALBUM_PHOTOS[key] && ALBUM_PHOTOS[key].length) ? ALBUM_PHOTOS[key] : Array.from({length:ALBUM_PHOTO_COUNT});

  portfolioAlbum.innerHTML = `
    <button class="back-btn" id="backToPortfolio">← Back to Portfolio</button>
    <span class="eyebrow">${p.name}</span>
    <h2 style="margin-top:16px;font-family:var(--font-display);font-weight:400;font-size:clamp(32px,4.4vw,52px);">${p.name} Gallery</h2>
    <div class="album-grid">
      ${photos.map((src,i)=>`
        <div class="album-photo" data-index="${i}" tabindex="0" role="button" aria-label="Open photo ${i+1}">
          ${src ? `<img src="${src}" alt="${p.name} ${i+1}" loading="lazy" onerror="this.remove(); this.parentElement.classList.add('no-image')">` : ''}
          <div class="swatch-placeholder"><span>${p.name} 0${i+1}</span></div>
        </div>`).join('')}
    </div>
  `;

  portfolioCarouselView.style.display = 'none';
  portfolioAlbum.classList.add('active');
  document.getElementById('backToPortfolio').addEventListener('click', closeAlbum);

  portfolioAlbum.querySelectorAll('.album-photo').forEach(el=>{
    el.addEventListener('click', ()=>openAlbumLightbox(key, Number(el.dataset.index)));
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') openAlbumLightbox(key, Number(el.dataset.index)); });
  });

  window.scrollTo({top:0, behavior:'auto'});
}

function closeAlbum(){
  portfolioAlbum.classList.remove('active');
  portfolioAlbum.innerHTML = '';
  portfolioCarouselView.style.display = '';
}

const lightbox = document.getElementById('lightbox');
const lightboxImgWrap = document.getElementById('lightboxImgWrap');
const lightboxName = document.getElementById('lightboxName');
const lightboxCat = document.getElementById('lightboxCat');

function openAlbumLightbox(key, index){
  const p = PRODUCTS[key];
  const photos = (ALBUM_PHOTOS[key] && ALBUM_PHOTOS[key].length) ? ALBUM_PHOTOS[key] : Array.from({length:ALBUM_PHOTO_COUNT});
  const src = photos[index];
  lightboxImgWrap.innerHTML = src
    ? `<img src="${src}" alt="${p.name} ${index+1}">`
    : `<div class="swatch-placeholder" style="position:relative;min-height:320px;width:640px;max-width:80vw;"><span>${p.name} 0${index+1}</span></div>`;
  lightboxName.textContent = p.name;
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

/* ============================================================
   Navigation / page switching
   ============================================================ */
const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-links button, .mobile-menu button');
const mainNav = document.getElementById('mainNav');
const body = document.body;

function goToPage(pageId){
  pages.forEach(p=>p.classList.toggle('active', p.dataset.page === pageId));
  navButtons.forEach(b=>b.classList.toggle('active', b.dataset.page === pageId));
  body.className = 'page-' + pageId;
  closeMobileMenu();
  closeProduct();
  closeAlbum();
  window.scrollTo({top:0, behavior:'auto'});
  updateNavAppearance();
}

navButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>goToPage(btn.dataset.page));
});

document.querySelectorAll('[data-goto]').forEach(el=>{
  el.addEventListener('click', ()=>goToPage(el.dataset.goto));
});

function updateNavAppearance(){
  const current = document.querySelector('.page.active').dataset.page;
  if(current !== 'profile'){
    mainNav.classList.add('solid');
  } else {
    mainNav.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7);
  }
}
window.addEventListener('scroll', updateNavAppearance);
window.addEventListener('resize', updateNavAppearance);

/* ============================================================
   Mobile menu
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu(){
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
  mobileMenu.classList.remove('open');
}
hamburger.addEventListener('click', ()=>{
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

/* ============================================================
   Init
   ============================================================ */
renderCatalog();
renderCarousel();
updateNavAppearance();

window.addEventListener('load', ()=>{
  setTimeout(()=>{ document.getElementById('veil').classList.add('hide'); }, 500);
});