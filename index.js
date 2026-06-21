import{a as f,S as y,i as m}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const b="56294384-c3e46a2de7dfa7e052cf699f1";f.defaults.baseURL="https://pixabay.com/api/";async function L(e,o=1){const a=new URLSearchParams({key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await f.get(`?${a}`)).data}let w=new y(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".loader"),c=document.querySelector(".btn-showmore-js");function S(e,o){const a=E(e);o.insertAdjacentHTML("beforeend",a),w.refresh()}function P(e){return`<li class="gallery-item"> 
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
    </li>`}function E(e){return e.map(P).join("")}function $(e){e.innerHTML=""}function v(){n&&n.classList.remove("hidden")}function R(){n&&n.classList.add("hidden")}function q(){c&&c.classList.remove("hidden-shmore")}function p(){c&&c.classList.add("hidden-shmore")}const h=document.querySelector("ul.gallery");let i,s,u;const x=15,D=document.querySelector(".form");D.addEventListener("submit",e=>{e.preventDefault(),p(),$(h),v(),i=new FormData(e.target).get("search-text").trim(),s=1,i.length===0&&m.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500}),g(i),e.target.reset()});const M=document.querySelector(".btn-showmore-js");M.addEventListener("click",e=>{e.preventDefault(),g(i)});async function g(e){try{const o=await L(e,s),a=o.hits;if(a.length!==0){const l=o.total;u=Math.ceil(l/x),console.log(u),S(a,h),O(),console.log(s),s+=1}else m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(o){m.error({title:"Error",message:`${o}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{R()}}function O(){s<u?(console.log(u),q()):p()}
//# sourceMappingURL=index.js.map
