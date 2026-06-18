import{a as m,S as d,i as n}from"./assets/vendor-DuKcLXOA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p="56294384-c3e46a2de7dfa7e052cf699f1";m.defaults.baseURL="https://pixabay.com/api/";async function f(e){const a=new URLSearchParams({key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await m.get(`?${a}`)).data}let h=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const i=document.querySelector(".loader");function y(e,a){const o=b(e);a.innerHTML=o,h.refresh()}function g(e){return`<li class="gallery-item"> 
        <a class="gallery-link" href="${e.largeImageURL}">    
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />          
          <ul class="caption">
              <li class="cap-item">
                  <label>Likes</label>
                  <p>${e.likes}</p>
              </li>
              <li class="cap-item">
                  <label>Views</label>
                  <p>${e.views}</p>
              </li>
              <li class="cap-item">
                  <label>Comments</label>
                  <p>${e.comments}</p>
              </li>
              <li class="cap-item">
                  <label>Downloads</label>
                  <p>${e.downloads}</p>
              </li>
          </ul>        
        </a>        
    </li>`}function b(e){return e.map(g).join("")}function L(e){e.innerHTML=""}function w(){i&&i.classList.remove("hidden")}function $(){i&&i.classList.add("hidden")}const c=document.querySelector("ul.gallery"),u=document.querySelector(".form");u.addEventListener("submit",e=>{e.preventDefault(),L(c),w();const o=new FormData(u).get("search-text").trim();o.length===0&&n.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500}),f(o).then(s=>{const t=s.hits;t.length!==0?y(t,c):n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(s=>n.error({title:"Error",message:`${s}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})).finally(()=>$())});
//# sourceMappingURL=index.js.map
