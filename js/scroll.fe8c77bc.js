(()=>{var n=document.querySelectorAll(".animation-on-scroll--js"),t="animation-on-scroll--before",e=function(){n.forEach((function(n){var e=n.getBoundingClientRect().top,o=n.getBoundingClientRect().bottom,i=window.innerHeight;n.style.transitionDelay="0.".concat((0,5,Math.floor(6*Math.random())+0),"s"),e-i<0&&o>0?n.classList.remove(t):n.classList.add(t)}))};window.addEventListener("scroll",e),window.addEventListener("load",e),window.addEventListener("resize",e)})();