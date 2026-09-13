/* ============================================================
   Home (Company Profile) — nav transparent-over-hero behavior
   ============================================================ */
const mainNav = document.getElementById('mainNav');

function updateNavAppearance(){
  mainNav.classList.toggle('solid', window.scrollY > window.innerHeight * 0.7);
}
window.addEventListener('scroll', updateNavAppearance);
window.addEventListener('resize', updateNavAppearance);
updateNavAppearance();

window.addEventListener('load', ()=>{
  setTimeout(()=>{ document.getElementById('veil').classList.add('hide'); }, 500);
});
