import{a as f,S as y,i as d}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const g="56294384-c3e46a2de7dfa7e052cf699f1";f.defaults.baseURL="https://pixabay.com/api/";async function b(e,o=1){const a=new URLSearchParams({key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await f.get(`?${a}`)).data}let L=new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const i=document.querySelector(".loader"),n=document.querySelector(".btn-showmore-js");function w(e,o){const a=$(e);o.insertAdjacentHTML("beforebegin",a),L.refresh()}function S(e){return`<li class="gallery-item"> 
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
    </li>`}function $(e){return e.map(S).join("")}function q(e){e.innerHTML=""}function v(){i&&i.classList.remove("hidden")}function x(){i&&i.classList.add("hidden")}function D(){n&&n.classList.remove("hidden-shmore")}function E(){n&&n.classList.add("hidden-shmore")}const m=document.querySelector("ul.gallery>li");document.querySelector("ul");let u,l;const p=document.querySelector(".form");p.addEventListener("submit",e=>{e.preventDefault(),E(),q(m),v(),h()});const P=document.querySelector(".btn-showmore-js");P.addEventListener("click",e=>{e.preventDefault(),h()});async function h(){const o=new FormData(p).get("search-text").trim();o!==u?(console.log(o),console.log(u),u=o,l=1):(l+=1,console.log(l)),o.length===0&&d.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});try{const s=(await b(o,l)).hits;s.length!==0?(console.log(m),w(s,m),D()):d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(a){d.error({title:"Error",message:`${a}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{x()}}
//# sourceMappingURL=index.js.map
