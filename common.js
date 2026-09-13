/* ============================================================
   Common — shared across all pages (nav hamburger + mobile menu)
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

function closeMobileMenu(){
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded','false');
  mobileMenu.classList.remove('open');
  mobileMenuBackdrop.classList.remove('open');
}

if(hamburger){
  hamburger.addEventListener('click', ()=>{
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenuBackdrop.classList.toggle('open', isOpen);
  });
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
}
