import"./script-DaepQuN0.js";import{c as a,d as o,f as n}from"./firebase-BaZ254dP.js";class i{cardHolder;patsArr;constructor(t){this.cardHolder=document.querySelector(t),this.patsArr=[],this.init()}init(){this.conectDB()}async conectDB(){try{const t=a(o,"pats");(await n(t)).forEach(e=>{const r=e.data();this.patsArr.push({id:e.id,img:r.img||"",name:r.name||"No Name",shortInfo:r.shortInfo||"",view:r.view||""})}),console.log(this.patsArr),this.renderPat(this.patsArr)}catch(t){console.error(t)}}renderPat(t){this.cardHolder.innerHTML="",t.forEach(s=>{const e=`
        <a href="one-pet.html?id=${s.id}" class="list__item pet ${s.id}">
          <div class="pet__info">
            <div class="pet__viev">${s.view}</div>

            <div class="pet__img">
              <img src="${s.img}" alt="cat" />
            </div>

            <p class="pet__name">${s.name}</p>
            <p class="pet__short-info">${s.shortInfo}</p>
          </div>

          <button class="pet__page btn gradient">Переглянути</button>
        </a>
      `;this.cardHolder.insertAdjacentHTML("beforeend",e)})}}document.addEventListener("DOMContentLoaded",async()=>{new i(".list")});
