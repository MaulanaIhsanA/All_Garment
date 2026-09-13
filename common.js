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

/* ============================================================
   Scroll reveal — fade + rise elements into view once, staggered.
   Call initReveal(scopeElement) after any dynamic render (catalog
   cards, product detail, portfolio slides, album grid) so newly
   created .reveal-item elements get observed too.
   ============================================================ */
function initReveal(scope){
  const root = scope || document;
  const items = root.querySelectorAll('.reveal-item:not(.revealed)');
  if(!items.length) return;

  if(!('IntersectionObserver' in window)){
    items.forEach(el=>el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});

  items.forEach((el, i)=>{
    if(!el.style.transitionDelay){
      el.style.transitionDelay = `${Math.min(i % 8, 7) * 70}ms`;
    }
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', ()=>initReveal());

