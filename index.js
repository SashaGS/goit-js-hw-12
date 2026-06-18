import{a as p,S as h,i as d}from"./assets/vendor-DuKcLXOA.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const y="56294384-c3e46a2de7dfa7e052cf699f1";p.defaults.baseURL="https://pixabay.com/api/";async function g(e,a=1){const o=new URLSearchParams({key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${a}`,per_page:15});return(await p.get(`?${o}`)).data}let b=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const l=document.querySelector(".loader"),n=document.querySelector(".btn-showmore-js");function L(e,a){const o=S(e);a.innerHTML=o,b.refresh()}function w(e){return`<li class="gallery-item"> 
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
    </li>`}function S(e){return e.map(w).join("")}function $(e){e.innerHTML=""}function x(){l&&l.classList.remove("hidden")}function P(){l&&l.classList.add("hidden")}function q(){n&&n.classList.remove("hidden-shmore")}function v(){n&&n.classList.add("hidden-shmore")}const u=document.querySelector("ul.gallery");let m,i=1;const f=document.querySelector(".form");f.addEventListener("submit",async e=>{e.preventDefault(),$(u),x();const o=new FormData(f).get("search-text").trim();o!==m?(m=o,i=1):(i+=1,console.log(i)),o.length===0&&d.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});try{const t=(await g(o,i)).hits;t.length!==0?(v(),L(t,u),q()):d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(s){d.error({title:"Error",message:`${s}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{P()}});
//# sourceMappingURL=index.js.map
