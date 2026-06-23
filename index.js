import{a as f,S as b,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const w="56294384-c3e46a2de7dfa7e052cf699f1";f.defaults.baseURL="https://pixabay.com/api/";async function L(e,t=1){const r=new URLSearchParams({key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${t}`,per_page:15});return(await f.get(`?${r}`)).data}let S=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".loader"),c=document.querySelector(".btn-showmore-js");function v(e,t){const r=R(e);t.insertAdjacentHTML("beforeend",r),S.refresh()}function P(e){return`<li class="gallery-item"> 
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
    </li>`}function R(e){return e.map(P).join("")}function x(e){e.innerHTML=""}function p(){n&&n.classList.remove("hidden")}function E(){n&&n.classList.add("hidden")}function $(){c&&c.classList.remove("hidden-shmore")}function m(){c&&c.classList.add("hidden-shmore")}const h=document.querySelector("ul.gallery");let i,d=1,g;const q=15,D=document.querySelector(".form");D.addEventListener("submit",async e=>{if(e.preventDefault(),m(),x(h),i=new FormData(e.target).get("search-text").trim(),i.length===0){l.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});return}p(),await y(i),e.target.reset()});const M=document.querySelector(".btn-showmore-js");M.addEventListener("click",async e=>{e.preventDefault(),m(),p(),await y(i),await B()});async function y(e){try{const t=await L(e,d),r=t.hits;if(r.length!==0){const s=t.total;g=Math.ceil(s/q),v(r,h),T(),d+=1}else l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(t){l.error({title:"Error",message:`${t}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{E()}}function T(){d<g?$():(m(),l.show({title:"message",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#abee8b",position:"topRight",radius:35,maxWidth:500}))}function B(){const e=document.querySelector("ul.gallery > li.gallery-item");if(e){const t=e.getBoundingClientRect(),r=t.height*2;console.log(r+t.y*-1),window.scrollBy({top:r+t.y*-1,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
