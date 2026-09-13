/* ============================================================
   Catalog page — grid + product detail
   Uses the History API (pushState/popstate) so the browser/phone
   back button closes the product detail instead of leaving the
   page. Deep links like catalog.html#tshirt open directly to
   that product.
   ============================================================ */
const catalogGrid = document.getElementById('catalogGrid');
const catalogGridView = document.getElementById('catalogGridView');
const productDetail = document.getElementById('productDetail');

let currentProductKey = null; // null = grid view

function renderCatalog(){
  const lang = getLang();
  catalogGrid.innerHTML = Object.keys(PRODUCTS).map(key=>{
    const p = PRODUCTS[key];
    return `
      <div class="product-card reveal-item" data-key="${key}" tabindex="0" role="button" aria-label="View ${p.name[lang]} details">
        <span class="p-index">${p.index}</span>
        <div class="thumb">
          <img src="${p.thumbImage}" alt="${p.name[lang]}" loading="lazy"
            onerror="this.remove(); this.parentElement.classList.add('no-image')">
          <div class="swatch-placeholder"><span>${p.name[lang]}</span></div>
        </div>
        <div class="overlay">
          <p class="p-name">${p.name[lang]}</p>
          <p class="p-view">${t('view_details')} <span>→</span></p>
        </div>
      </div>`;
  }).join('');

  catalogGrid.querySelectorAll('.product-card').forEach(card=>{
    card.addEventListener('click', ()=>goToProduct(card.dataset.key));
    card.addEventListener('keypress', e=>{ if(e.key==='Enter') goToProduct(card.dataset.key); });
  });

  initReveal(catalogGrid);
}

function renderSizeChart(sizeChart){
  if(!sizeChart) return '';
  const hasMultiple = sizeChart.variants.length > 1;
  const colLabel = {SIZE:t('col_size'), LENGTH:t('col_length'), WIDTH:t('col_width'), SLEEVE:t('col_sleeve')};

  const toggleHtml = hasMultiple ? `
    <div class="size-toggle" role="tablist">
      ${sizeChart.variants.map((v,i)=>`<button type="button" data-variant="${i}" class="${i===0 ? 'active' : ''}">${v.label}</button>`).join('')}
    </div>` : '';

  const panelsHtml = sizeChart.variants.map((v,i)=>{
    const headerCells = sizeChart.columns.map(c=>`<th>${colLabel[c] || c}</th>`).join('');
    const rows = v.rows.map(r=>`<tr>${r.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('');
    const measureImg = v.measureImage ? `
      <div class="measure-image">
        <img src="${v.measureImage}" alt="${v.label || ''}" loading="lazy"
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
      <h3>${t('size_chart')}</h3>
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
      <h3>${t('materials_title')}</h3>
      <p class="table-scroll-hint">${t('swipe_hint')}</p>
      <div class="materials-table-wrap">
        <table class="materials-table">
          <thead><tr><th>${t('col_material')}</th><th>${t('col_qty')}</th><th>${t('col_price')}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="price-note">${t('price_note')}</p>
    </div>`;
}

function renderProductDetail(key){
  const lang = getLang();
  const p = PRODUCTS[key];
  if(!p) return;

  productDetail.innerHTML = `
    <button class="back-btn" id="backToCatalog">${t('back_to_catalog')}</button>
    <div class="detail-grid">
      <div class="detail-image reveal-item">
        <img src="${p.detailImage}" alt="${p.name[lang]}"
          onerror="this.remove(); this.parentElement.classList.add('no-image')">
        <div class="swatch-placeholder"><span>${p.name[lang]}</span></div>
      </div>
      <div class="detail-info reveal-item">
        <h2>${p.name[lang]}</h2>
        <p class="d-desc">${p.description[lang]}</p>
        ${renderSizeChart(p.sizeChart)}
      </div>
    </div>
    ${renderMaterials(p.materials)}
  `;

  document.getElementById('backToCatalog').addEventListener('click', ()=>history.back());
  wireSizeToggle(productDetail);
  productDetail.querySelector('.materials-section').classList.add('reveal-item');
  initReveal(productDetail);
}

function showGrid(){
  currentProductKey = null;
  productDetail.classList.remove('active');
  productDetail.innerHTML = '';
  catalogGridView.style.display = '';
}

function showProduct(key, push){
  if(!PRODUCTS[key]) { showGrid(); return; }
  currentProductKey = key;
  renderProductDetail(key);
  catalogGridView.style.display = 'none';
  productDetail.classList.add('active');
  if(push) history.pushState({key}, '', '#' + key);
  window.scrollTo({top:0, behavior:'auto'});
}

function goToProduct(key){
  showProduct(key, true);
}

window.addEventListener('popstate', ()=>{
  const key = location.hash.replace('#','');
  if(key && PRODUCTS[key]) showProduct(key, false);
  else showGrid();
});

document.addEventListener('langchange', ()=>{
  renderCatalog();
  if(currentProductKey) renderProductDetail(currentProductKey);
});

/* ============================================================
   Init
   ============================================================ */
renderCatalog();
const initialKey = location.hash.replace('#','');
if(initialKey && PRODUCTS[initialKey]) showProduct(initialKey, false);
