import{a as p,S as b,i as l}from"./assets/vendor-DuKcLXOA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const L="56294384-c3e46a2de7dfa7e052cf699f1";p.defaults.baseURL="https://pixabay.com/api/";async function w(e,o=1){const a=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:`${o}`,per_page:15});return(await p.get(`?${a}`)).data}let S=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const n=document.querySelector(".loader"),c=document.querySelector(".btn-showmore-js");function P(e,o){const a=E(e);o.insertAdjacentHTML("beforeend",a),S.refresh()}function v(e){return`<li class="gallery-item"> 
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
    </li>`}function E(e){return e.map(v).join("")}function R(e){e.innerHTML=""}function h(){n&&n.classList.remove("hidden")}function $(){n&&n.classList.add("hidden")}function x(){c&&c.classList.remove("hidden-shmore")}function f(){c&&c.classList.add("hidden-shmore")}const g=document.querySelector("ul.gallery");let i,u,m;const q=15,D=document.querySelector(".form");D.addEventListener("submit",e=>{e.preventDefault(),f(),R(g),h(),i=new FormData(e.target).get("search-text").trim(),u=1,i.length===0&&l.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500}),y(i),e.target.reset()});const M=document.querySelector(".btn-showmore-js");M.addEventListener("click",e=>{e.preventDefault(),f(),h(),y(i)});async function y(e){try{const o=await w(e,u),a=o.hits;if(a.length!==0){const s=o.total;m=Math.ceil(s/q),P(a,g),O(),u+=1}else l.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}catch(o){l.error({title:"Error",message:`${o}`,backgroundColor:"#efdb40",position:"topRight",radius:35,maxWidth:500})}finally{$()}}function O(){u<m?(console.log(m),x()):(f(),l.show({title:"message",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#abee8b",position:"topRight",radius:35,maxWidth:500}))}
//# sourceMappingURL=index.js.map
