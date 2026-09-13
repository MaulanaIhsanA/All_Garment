/* ============================================================
   i18n — language dictionary (Indonesian default, English toggle)
   Usage: elements with data-i18n="key" get their textContent set.
   Elements with data-i18n-html="key" get their innerHTML set
   (only used where the string legitimately contains markup).
   Call applyTranslations() after any dynamic re-render.
   ============================================================ */
const I18N = {
  id: {
    nav_profile: "Profil Perusahaan",
    nav_catalog: "Katalog",
    nav_portfolio: "Portofolio",
    order_now: "Pesan Sekarang",

    hero_eyebrow: "Custom Garment & Konveksi",
    hero_cta: "Jelajahi Katalog Kami",

    profile_eyebrow: "Siapa Kami",
    profile_title: "Profil Perusahaan",
    profile_p1: "ALL GARMENT adalah produsen apparel custom dan konveksi yang berfokus pada seragam, pakaian kerja, kemeja, jaket, dan apparel custom berkualitas tinggi. Kami memadukan desain yang matang, material berkualitas, dan keahlian produksi untuk menciptakan produk yang merepresentasikan setiap organisasi, perusahaan, dan komunitas.",
    profile_p2: "Dari pola hingga finishing, setiap produk dikerjakan secara in-house — dibuat untuk dikenakan sebagai identitas, bukan sekadar seragam.",

    pillar_custom_title: "Custom",
    pillar_custom_desc: "Desain, material, warna, ukuran, dan branding yang fleksibel.",
    pillar_quality_title: "Kualitas",
    pillar_quality_desc: "Material berkualitas tinggi dan finishing presisi di setiap produk yang kami hasilkan.",
    pillar_service_title: "Layanan",
    pillar_service_desc: "Konsultasi responsif dan dukungan penuh dari pemesanan hingga pengiriman.",
    pillar_reliable_title: "Terpercaya",
    pillar_reliable_desc: "Berkomitmen pada layanan profesional dan produksi yang dapat diandalkan.",

    footer_tagline: "ALL GARMENT — Custom Apparel & Konveksi",
    footer_nav: "Profil Perusahaan · Katalog · Portofolio",

    catalog_eyebrow: "Koleksi",
    catalog_title: "Katalog Kami",
    catalog_sub: "Jelajahi koleksi apparel custom kami.",
    view_details: "Lihat Detail",
    back_to_catalog: "← Kembali ke Katalog",
    size_chart: "Tabel Ukuran (cm)",
    materials_title: "Bahan & Rentang Harga Tersedia",
    price_note: "Harga akhir tergantung pada material, jumlah, tingkat kerumitan desain, bordir, sablon, dan kustomisasi tambahan.",
    swipe_hint: "← Geser untuk lihat harga →",
    col_size: "UKURAN", col_length: "PANJANG", col_width: "LEBAR", col_sleeve: "LENGAN",
    col_material: "BAHAN", col_qty: "JUMLAH", col_price: "RENTANG HARGA",

    portfolio_eyebrow: "Karya Pilihan",
    portfolio_title: "Portofolio Kami",
    portfolio_sub: "Karya pilihan hasil produksi ALL GARMENT.",
    view_gallery: "Lihat Galeri",
    back_to_portfolio: "← Kembali ke Portofolio",
    gallery_suffix: "Galeri",

    wa_message: "Halo kak, boleh tanya-tanya tentang pemesanan di All Garment",
  },
  en: {
    nav_profile: "Company Profile",
    nav_catalog: "Catalog",
    nav_portfolio: "Portfolio",
    order_now: "Order Now",

    hero_eyebrow: "Custom Garment & Konveksi",
    hero_cta: "Explore Our Catalog",

    profile_eyebrow: "Who We Are",
    profile_title: "Company Profile",
    profile_p1: "ALL GARMENT is a custom apparel and garment manufacturer specializing in high-quality uniforms, workwear, shirts, jackets, and customized apparel. We combine thoughtful design, quality materials, and skilled craftsmanship to create products that represent every organization, company, and community.",
    profile_p2: "From pattern to finishing, every piece is produced in-house — built to be worn as a mark of identity, not just a uniform.",

    pillar_custom_title: "Custom",
    pillar_custom_desc: "Flexible designs, materials, colors, sizes, and branding.",
    pillar_quality_title: "Quality",
    pillar_quality_desc: "High-quality materials and precise finishing on every piece we produce.",
    pillar_service_title: "Service",
    pillar_service_desc: "Responsive consultation and dedicated support from order to delivery.",
    pillar_reliable_title: "Reliable",
    pillar_reliable_desc: "Committed to professional service and dependable production.",

    footer_tagline: "ALL GARMENT — Custom Apparel & Konveksi",
    footer_nav: "Company Profile · Catalog · Portfolio",

    catalog_eyebrow: "Collection",
    catalog_title: "Our Catalog",
    catalog_sub: "Explore our custom apparel collection.",
    view_details: "View Details",
    back_to_catalog: "← Back to Catalog",
    size_chart: "Size Chart (cm)",
    materials_title: "Available Materials & Price Range",
    price_note: "Final price depends on material, quantity, design complexity, embroidery, printing, and additional customization.",
    swipe_hint: "← Swipe to see prices →",
    col_size: "SIZE", col_length: "LENGTH", col_width: "WIDTH", col_sleeve: "SLEEVE",
    col_material: "MATERIAL", col_qty: "QUANTITY", col_price: "PRICE RANGE",

    portfolio_eyebrow: "Selected Work",
    portfolio_title: "Our Portfolio",
    portfolio_sub: "Selected work produced by ALL GARMENT.",
    view_gallery: "View Gallery",
    back_to_portfolio: "← Back to Portfolio",
    gallery_suffix: "Gallery",

    wa_message: "Hi, I'd like to ask about ordering from All Garment",
  },
};

function getLang(){
  return localStorage.getItem('ag_lang') || 'id';
}

function setLang(lang){
  localStorage.setItem('ag_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  applyTranslations();
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Update WhatsApp links with the localized prefilled message
  const msg = encodeURIComponent(I18N[lang].wa_message);
  document.querySelectorAll('a[data-wa-link]').forEach(a=>{
    a.href = `https://wa.me/6288989178098?text=${msg}`;
  });
  // Let page-specific scripts react (re-render dynamic content in the new language)
  document.dispatchEvent(new CustomEvent('langchange', {detail:{lang}}));
}

function t(key){
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.id[key]) || key;
}

function applyTranslations(){
  const lang = getLang();
  const dict = I18N[lang] || I18N.id;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.textContent = dict[key];
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.documentElement.setAttribute('lang', getLang());
  applyTranslations();
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === getLang());
    b.addEventListener('click', ()=>setLang(b.dataset.lang));
  });
  const msg = encodeURIComponent(t('wa_message'));
  document.querySelectorAll('a[data-wa-link]').forEach(a=>{
    a.href = `https://wa.me/6288989178098?text=${msg}`;
  });
});
