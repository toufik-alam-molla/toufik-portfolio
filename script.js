const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('video').forEach(v=>{
  v.addEventListener('mouseenter',()=>{v.play().catch(()=>{})});
  v.addEventListener('mouseleave',()=>{v.pause()});
});
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='82px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px';nav.style.background='#08070b';nav.style.flexDirection='column';nav.style.zIndex='10'});
