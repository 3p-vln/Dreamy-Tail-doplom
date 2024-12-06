import{f as a,c,d as i,h as p,u as f,j as P}from"./script-Ck09IiTp.js";import{T as g,M as v,E as _}from"./tabs-CbdPjoDI.js";import{J as b}from"./just-validate.es-C73wyOde.js";import{I as l}from"./inputmask-CsGDK5Eu.js";import"./pop-up-Cl5BhUHu.js";class E{myPetContent;uid;currentUser;constructor(t){this.myPetContent=document.querySelector(t),this.uid=this.getCookie("UID"),this.init()}init(){this.fetchUsers().then(()=>{this.getPets(),console.log(this.myPetContent)})}getCookie(t){const o=`; ${document.cookie}`.split(`; ${t}=`);if(o.length===2)return o.pop()?.split(";").shift()}async fetchUsers(){const t=await a(c(i,"users")),e=[];t.forEach(s=>{e.push({uid:s.data().uid,myPet:s.data().myPet,id:s.id})});const o=e.find(s=>s.uid===this.uid);this.currentUser=o,console.log(this.currentUser)}async getPets(){try{const t=c(i,"pats"),e=await a(t),o=[];e.forEach(n=>{const r=n.data();o.push({id:n.id,img:r.img||"",imgWebP:r.imgWebP,name:r.name||"No Name",shortInfo:r.shortInfo||"",view:r.view||"",owner:r.owner||!1})});const s=o.filter(n=>this.currentUser.myPet.includes(n.id));console.log(s),this.renderPat(s).then(()=>{this.addEventListener()})}catch(t){console.error(t)}}async renderPat(t){console.log("Rendering pets:",t),this.myPetContent.innerHTML="",t.forEach(e=>{if(e.owner){console.log("Rendering pet:",e);const o=`
          <a class="list__item pet ${e.id}">
            <div class="pet__info">
              <div class="pet__viev">${e.view}</div>
  
              <div class="pet__img">
                <picture>
                  <source srcset="${e.imgWebP}" type="image/webp" />
                  <img src="${e.img}" alt="cat" />
                </picture>
              </div>
  
              <p class="pet__name">${e.name}</p>
              <p class="pet__short-info">${e.shortInfo}</p>
            </div>
  
            <button class="pet__page btn gradient" data-id="${e.id}">Відмовитись</button>
          </a>
        `;this.myPetContent.insertAdjacentHTML("beforeend",o)}})}async removePet(t){if(!this.currentUser||!this.uid){console.error("User not authenticated or user data not loaded.");return}try{const e=p(i,"users",this.currentUser.id),o=this.currentUser.myPet.filter(r=>r!==t);await f(e,{myPet:o}),this.currentUser.myPet=o;const s=p(i,"pats",t);await f(s,{owner:!1});const n=this.myPetContent.querySelector(`.list__item.pet.${t}`);n&&n.remove(),console.log(`Pet with ID ${t} successfully removed.`)}catch(e){console.error("Error removing pet:",e)}}addEventListener(){const t=this.myPetContent.querySelectorAll(".pet__page");if(t.length===0){console.error("No buttons found with class .pet__page");return}t.forEach(e=>{e.addEventListener("click",o=>{const s=o.target.getAttribute("data-id");console.log(s),s&&this.removePet(s)})})}}class k{popUpElement;backdropElement;formElement;validator;onFormSubmitCallback=null;constructor(){if(this.popUpElement=document.querySelector(".pop-up-pay"),this.backdropElement=document.querySelector(".pop-up__backdrop"),this.formElement=document.querySelector("#form-pay"),!this.popUpElement){console.error("Pop-up element not found");return}if(!this.backdropElement){console.error("Backdrop element not found");return}if(!this.formElement){console.error("Form element not found");return}this.init()}init(){this.applyMasks(),this.initializeValidation(),this.addEventListeners()}applyMasks(){l({mask:"9999 9999 9999 9999",placeholder:" "}).mask(this.formElement.querySelector("#card-numb")),l({mask:"99/99",placeholder:" "}).mask(this.formElement.querySelector("#date")),l({mask:"999",placeholder:""}).mask(this.formElement.querySelector("#cvv"))}initializeValidation(){this.validator=new b(this.formElement),this.validator.addField("#card-numb",[{rule:"required",errorMessage:"Введіть номер картки"}]).addField("#date",[{rule:"required",errorMessage:"Введіть термін дії картки"}]).addField("#cvv",[{rule:"required",errorMessage:"Введіть CVV"}]).addField("#name",[{rule:"required",errorMessage:"Введіть ІМ'Я власника"},{rule:"customRegexp",value:/^[a-zA-Z]+$/,errorMessage:"Введіть ІМ'Я літерами"},{rule:"minLength",value:2,errorMessage:"Мінімальна кількість літер 2"}]).onSuccess(t=>{t.preventDefault(),this.onFormSubmit()})}addEventListeners(){this.backdropElement&&this.backdropElement.addEventListener("click",()=>this.closePopup())}openPopup(){this.popUpElement.classList.add("active")}closePopup(){this.popUpElement.classList.remove("active"),this.formElement.reset(),this.validator.refresh()}onFormSubmit(){this.onFormSubmitCallback&&this.onFormSubmitCallback(),this.closePopup()}}class w{myPetContent;uid;currentUser;constructor(t){this.myPetContent=document.querySelector(t),this.uid=this.getCookie("UID"),this.init()}init(){this.fetchUsers().then(()=>{this.getPetsNeed(),console.log(this.myPetContent)})}getCookie(t){const o=`; ${document.cookie}`.split(`; ${t}=`);if(o.length===2)return o.pop()?.split(";").shift()}async fetchUsers(){const t=await a(c(i,"users")),e=[];t.forEach(s=>{e.push({uid:s.data().uid,myPet:s.data().myPet,id:s.id})});const o=e.find(s=>s.uid===this.uid);this.currentUser=o}async getPetsNeed(){try{const t=c(i,"pats"),e=await a(t),o=[];for(const n of e.docs){const r=n.data(),d=c(i,`pats/${n.id}/need`),y=await a(d),m=[];y.forEach(h=>{m.push({id:h.id,...h.data()})}),o.push({id:n.id,name:r.name||"No Name",owner:r.owner||!1,needs:m})}const s=o.filter(n=>this.currentUser.myPet.includes(n.id));console.log(s),this.renderPatNeed(s)}catch(t){console.error(t)}}renderPatNeed(t){console.log("Rendering pets:",t),this.myPetContent.innerHTML="",t.forEach(e=>{if(e.owner){console.log("Rendering pet:",e);const o=e.needs.map(r=>`<li class="pet-need__list-item">${r.item}: <span>${r.cost} грн</span></li>`).join(""),s=e.needs.reduce((r,d)=>r+d.cost,0),n=`
          <div class="pay-for-pet__one-pet pet-need ${e.id}">
            <h3 class="pet-need__name title">${e.name}</h3>
  
            <ul class="pet-need__list">
              ${o}
            </ul>
  
            <div class="pet-need__pay">
              <p class="pet-need__summ">Всього: <span>${s} грн</span></p>
              <button class="pet-need__pay-btn btn gradient" data-pet-id="${e.id}">Сплатити</button>
            </div>
          </div>
        `;this.myPetContent.insertAdjacentHTML("beforeend",n)}}),this.addPayButtonListeners()}addPayButtonListeners(){this.myPetContent.querySelectorAll(".pet-need__pay-btn").forEach(e=>{e.addEventListener("click",o=>{const s=o.target.dataset.petId;this.onPayButtonClick(s)})})}onPayButtonClick(t){const e=new k;e.openPopup(),e.onFormSubmit=async()=>{await this.removePaidNeeds(t),e.closePopup(),location.reload(),this.init()}}async removePaidNeeds(t){const e=c(i,`pats/${t}/need`),o=await a(e);for(const s of o.docs){const n=p(i,`pats/${t}/need/${s.id}`);await P(n)}console.log(`Потребности питомца с ID ${t} удалены`)}}document.addEventListener("DOMContentLoaded",async()=>{new g(".tabs__nav-btn",".tabs__item"),new v,new E(".list"),new _("#form-edit"),new w(".pay-for-pet__content")});