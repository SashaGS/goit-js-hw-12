import{a as p,S as f,i as c}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const y="56294384-c3e46a2de7dfa7e052cf699f1";p.defaults.baseURL="https://pixabay.com/api/";async function g(e,o=1){const r=new URLSearchParams({key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await p.get(`?${r}`)).data}let h=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const l=document.querySelector(".loader");function b(e,o){const r=w(e);o.innerHTML=r,h.refresh()}function L(e){return`<li class="gallery-item"> 
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
    </li>`}function w(e){return e.map(L).join("")}function $(e){e.innerHTML=""}function x(){l&&l.classList.remove("hidden")}function P(){l&&l.classList.add("hidden")}const d=document.querySelector("ul.gallery");let u,i=1;const m=document.querySelector(".form");m.addEventListener("submit",async e=>{e.preventDefault(),$(d),x();const r=new FormData(m).get("search-text").trim();r!==u?(u=r,i=1):(i+=1,console.log(i)),r.length===0&&c.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});try{const t=(await g(r,i)).hits;t.length!==0?b(t,d):c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(s){c.error({title:"Error",message:`${s}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{P()}});
//# sourceMappingURL=index.js.map
