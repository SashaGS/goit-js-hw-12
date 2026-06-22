import{a as y,S as L,i}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const S="56294384-c3e46a2de7dfa7e052cf699f1";y.defaults.baseURL="https://pixabay.com/api/";async function v(e,o=1){const a=new URLSearchParams({key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await y.get(`?${a}`)).data}let P=new L(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".loader"),c=document.querySelector(".btn-showmore-js");function R(e,o){const a=$(e);o.insertAdjacentHTML("beforeend",a),P.refresh()}function E(e){return`<li class="gallery-item"> 
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
    </li>`}function $(e){return e.map(E).join("")}function q(e){e.innerHTML=""}function g(){n&&n.classList.remove("hidden")}function x(){n&&n.classList.add("hidden")}function D(){c&&c.classList.remove("hidden-shmore")}function p(){c&&c.classList.add("hidden-shmore")}const b=document.querySelector("ul.gallery");let l,u,m;const M=15;let h,f;const B=document.querySelector(".form");B.addEventListener("submit",async e=>{e.preventDefault(),p(),q(b),g(),l=new FormData(e.target).get("search-text").trim(),u=1,l.length===0&&i.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500}),await w(l),h=document.querySelector("ul.gallery > li.gallery-item"),f=h.getBoundingClientRect(),e.target.reset()});const C=document.querySelector(".btn-showmore-js");C.addEventListener("click",async e=>{e.preventDefault(),p(),g(),await w(l),window.scrollBy({top:f.y*4,behavior:"smooth"}),console.log(f.y*3)});async function w(e){try{const o=await v(e,u),a=o.hits;if(a.length!==0){const s=o.total;m=Math.ceil(s/M),R(a,b),O(),u+=1}else i.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(o){i.error({title:"Error",message:`${o}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{x()}}function O(){u<m?(console.log(m),D()):(p(),i.show({title:"message",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#abee8b",position:"topRight",radius:35,maxWidth:500}))}
//# sourceMappingURL=index.js.map
