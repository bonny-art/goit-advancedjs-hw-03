import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};l.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear"});const p="40358053-aa77a52d7b78d629a29aff12d",f="https://pixabay.com/api",g=a=>{const t=new URLSearchParams({key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}/?${t}`).then(o=>{if(!o.ok)throw new Error(`Error getting fotos: ${o.status}`);return o.json()})},h=a=>{const t=({largeImageURL:r,webformatURL:e,tags:s,likes:i,views:u,comments:d,downloads:m})=>`
      <li class="card card-set-item">
            <a href="${r}" class="gallety-link" href="#">
              <div class="photo-box">
                <img
                  src="${e}"
                  alt="${s}"
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
      `,o=a.map(r=>t(r)).join("");n.gallery.innerHTML=o},c={message:"Sorry, something went wrong.",iconUrl:"./public/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"},y=a=>{a.preventDefault();const t=n.form.elements.search,o=t.value.trim();if(o===""){l.show({...c,message:"Oops! Looks like you forgot to enter something."}),t.value="";return}n.loader.classList.remove("visually-hidden"),g(o).then(r=>{r.hits.length===0&&l.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"}),h(r.hits),t.value=""}).catch(r=>l.show({...c,message:`Sorry, something went wrong.: ${r}`})).finally(()=>{n.loader.classList.add("visually-hidden")})};n.form.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
