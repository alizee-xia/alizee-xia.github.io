const f=document.querySelectorAll(".fade");
const o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add("show");});});
f.forEach(el=>o.observe(el));
