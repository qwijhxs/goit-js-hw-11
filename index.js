import{a as m,S as y,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="50849952-f022a71d57a94af4a04a87620",h="https://pixabay.com/api/";async function b(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(h,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${d}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){l.innerHTML=""}function S(){u.classList.add("is-visible")}function c(){u.classList.remove("is-visible")}const p=document.querySelector(".form"),q=p.elements["search-text"];p.addEventListener("submit",async s=>{s.preventDefault();const r=q.value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}w(),S();try{const o=await b(r);if(c(),!o.hits.length){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}catch{c(),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
