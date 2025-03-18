import{i as l,S as g}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const n={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};l.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear"});const p="40358053-aa77a52d7b78d629a29aff12d",f="https://pixabay.com/api",h=i=>{const t=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}/?${t}`).then(r=>{if(!r.ok)throw new Error(`Error getting fotos: ${r.status}`);return r.json()})},y=new g(".gallery-link",{captionsData:"alt",captionDelay:250}),v=i=>{const t=({largeImageURL:o,webformatURL:e,tags:s,likes:a,views:d,comments:u,downloads:m})=>`
      <li class="card card-set-item">
            <a href="${o}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${e}"
                  alt="${s}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${a}</div>
                <div class="item"><span class="accent">Views</span>${d}</div>
                <div class="item"><span class="accent">Comments</span>${u}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${m}
                </div>
              </div>
            </a>
          </li>
      `,r=i.map(o=>t(o)).join("");n.gallery.innerHTML=r,y.refresh()},w=window.location.origin.includes("localhost")||window.location.origin.includes("127.0.0.1"),c={message:"Sorry, something went wrong.",iconUrl:w?"./public/img/illegal.svg":"/goit-advancedjs-hw-03/img/illegal.svg",progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"},L=i=>{i.preventDefault();const t=n.form.elements.search,r=t.value.trim();if(r===""){l.show({...c,message:"Oops! Looks like you forgot to enter something."}),t.value="";return}n.loader.classList.remove("visually-hidden"),t.value="",h(r).then(o=>{o.hits.length===0&&l.show({...c,message:"Sorry, there are no images matching your search query. Please try again!"}),v(o.hits)}).catch(o=>l.show({...c,message:`Sorry, something went wrong.: ${o}`})).finally(()=>{n.loader.classList.add("visually-hidden")})};n.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
