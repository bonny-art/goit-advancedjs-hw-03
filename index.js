import{i as l,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};l.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear"});const g="40358053-aa77a52d7b78d629a29aff12d",f="https://pixabay.com/api",h=a=>{const s=new URLSearchParams({key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}/?${s}`).then(o=>{if(!o.ok)throw new Error(`Error getting fotos: ${o.status}`);return o.json()})},y=new p(".gallery-link",{captionsData:"alt",captionDelay:250}),v=a=>{const s=({largeImageURL:r,webformatURL:e,tags:t,likes:i,views:u,comments:d,downloads:m})=>`
      <li class="card card-set-item">
            <a href="${r}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${e}"
                  alt="${t}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${i}</div>
                <div class="item"><span class="accent">Views</span>${u}</div>
                <div class="item"><span class="accent">Comments</span>${d}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${m}
                </div>
              </div>
            </a>
          </li>
      `,o=a.map(r=>s(r)).join("");n.gallery.innerHTML=o,y.refresh()},c={message:"Sorry, something went wrong.",iconUrl:"./public/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"},w=a=>{a.preventDefault();const s=n.form.elements.search,o=s.value.trim();if(o===""){l.show({...c,message:"Oops! Looks like you forgot to enter something."}),s.value="";return}n.loader.classList.remove("visually-hidden"),h(o).then(r=>{r.hits.length===0&&l.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"}),v(r.hits),s.value=""}).catch(r=>l.show({...c,message:`Sorry, something went wrong.: ${r}`})).finally(()=>{n.loader.classList.add("visually-hidden")})};n.form.addEventListener("submit",w);
//# sourceMappingURL=index.js.map
