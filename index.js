import{a as p,S as w,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const L="56294384-c3e46a2de7dfa7e052cf699f1";p.defaults.baseURL="https://pixabay.com/api/";async function S(e,o=1){const a=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await p.get(`?${a}`)).data}let v=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".loader"),c=document.querySelector(".btn-showmore-js");function P(e,o){const a=R(e);o.insertAdjacentHTML("beforeend",a),v.refresh()}function E(e){return`<li class="gallery-item"> 
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
    </li>`}function R(e){return e.map(E).join("")}function $(e){e.innerHTML=""}function h(){n&&n.classList.remove("hidden")}function x(){n&&n.classList.add("hidden")}function q(){c&&c.classList.remove("hidden-shmore")}function m(){c&&c.classList.add("hidden-shmore")}const y=document.querySelector("ul.gallery");let i,u,g;const D=15;let f;const M=document.querySelector(".form");M.addEventListener("submit",async e=>{if(e.preventDefault(),m(),$(y),h(),i=new FormData(e.target).get("search-text").trim(),u=1,i.length===0){l.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});return}await b(i),e.target.reset()});const O=document.querySelector(".btn-showmore-js");O.addEventListener("click",async e=>{e.preventDefault(),m(),h(),await b(i),window.scrollBy({top:f,left:0,behavior:"smooth"}),console.log(Number(f))});async function b(e){try{const o=await S(e,u),a=o.hits;if(a.length!==0){const s=o.total;g=Math.ceil(s/D),P(a,y),T(),u+=1}else l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(o){l.error({title:"Error",message:`${o}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{x()}}function T(){u<g?q():(m(),l.show({title:"message",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#abee8b",position:"topRight",radius:35,maxWidth:500}))}
//# sourceMappingURL=index.js.map
