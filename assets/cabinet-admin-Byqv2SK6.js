import{h as m,d as o,j as y,r as _,k as R,l as U,m as A,n as D,o as P,p as $,u as S,c,f as h,a as E,g as N,q as C}from"./script-Df4MtpFW.js";import{T as H,M as z,E as W}from"./tabs-B9kuZmwq.js";import{J as g}from"./just-validate.es-C73wyOde.js";import{P as f}from"./pop-up-Cl5BhUHu.js";import"./inputmask-CsGDK5Eu.js";class x{petId;imgPath;imgWebPPath;constructor(t,e,r){this.petId=t,this.imgPath=e,this.imgWebPPath=r,this.deletePetFromDB()}async deletePetFromDB(){try{const t=m(o,"pats",this.petId);await y(t),this.imgPath&&await this.deleteImageFromStorage(this.imgPath),this.imgWebPPath&&await this.deleteImageFromStorage(this.imgWebPPath),this.updateUIAfterDelete()}catch(t){console.error("Error deleting pet: ",t)}}async deleteImageFromStorage(t){try{const e=_(R,t);await U(e)}catch(e){console.error(`Error deleting image ${t}: `,e)}}updateUIAfterDelete(){const t=document.querySelector(`.pet.${this.petId}`);t&&t.remove()}}class T{petId;formId;validator;constructor(t,e){this.petId=t,this.formId=e,this.validator=new g(this.formId),this.init()}async init(){new f(".pop-up-edit-pet"),await this.loadPetData(),this.initializeValidation()}async loadPetData(){try{const t=await A(m(o,"pats",this.petId));if(t.exists()){const e=t.data();document.querySelector("#form-edit-pet #viev").value=e.view||"",document.querySelector("#form-edit-pet #name-pet").value=e.name||"",document.querySelector("#form-edit-pet #breed").value=e.breed||"",document.querySelector("#form-edit-pet #age").value=e.age||"",document.querySelector("#form-edit-pet #short-info").value=e.shortInfo||"",document.querySelector("#form-edit-pet #full-info").value=e.fullInfo||""}else console.error("Pet not found!")}catch(t){console.error("Error loading pet data:",t)}}async uploadImage(t,e){const r=D(),a=_(r,e);try{return await P(a,t),await $(a)}catch(s){throw console.error("Error uploading image:",s),s}}async updatePetData(){const t=document.querySelector("#form-edit-pet #name-pet"),e=document.querySelector("#form-edit-pet #breed"),r=document.querySelector("#form-edit-pet #age"),a=document.querySelector("#form-edit-pet #short-info"),s=document.querySelector("#form-edit-pet #full-info"),n=document.querySelector("#form-edit-pet #viev");if(!t||!e||!r||!a||!s||!n){console.error("One or more input elements are not found in the DOM");return}const i=t.value,l=e.value,u=r.value,v=a.value,I=s.value,w=n.value;try{const p=m(o,"pats",this.petId);await S(p,{name:i,breed:l,age:u,shortInfo:v,fullInfo:I,view:w}),location.reload()}catch(p){console.error("Error updating pet data:",p)}}initializeValidation(){this.validator.addField("#viev",[{rule:"required",errorMessage:"Введіть вид"},{rule:"minLength",value:2,errorMessage:"Дані мають містити більше символів"}]).addField("#name-pet",[{rule:"required",errorMessage:"Введіть ім'я"},{rule:"minLength",value:2,errorMessage:"Ім'я має містити більше символів"}]).addField("#breed",[{rule:"required",errorMessage:"Введіть породу"},{rule:"minLength",value:2,errorMessage:"Порода має містити більше символів"}]).addField("#age",[{rule:"required",errorMessage:"Вкажіть вік"},{rule:"minLength",value:5,errorMessage:"Вік має містити більше символів"}]).addField("#short-info",[{rule:"required",errorMessage:"Заповніть коротку інформацію."},{rule:"minLength",value:10,errorMessage:"Коротка інформація має містити більше символів."}]).addField("#full-info",[{rule:"required",errorMessage:"Заповніть повну інформацію."},{rule:"minLength",value:5,errorMessage:"Повна інформація має містити більше символів."}]).onSuccess(t=>{t.preventDefault(),this.updatePetData().then(()=>{setTimeout(()=>{location.reload()},2e3)})})}}class B{cardHolder;patsArr;constructor(t){this.cardHolder=document.querySelector(t),this.patsArr=[],this.init()}init(){this.conectDBPet()}async conectDBPet(){try{const t=c(o,"pats");(await h(t)).forEach(r=>{const a=r.data();this.patsArr.push({id:r.id,img:a.img||"",imgWebP:a.imgWebP,name:a.name||"No Name",shortInfo:a.shortInfo||"",view:a.view||"",owner:a.owner||""})}),this.renderPat(this.patsArr)}catch(t){console.error(t)}}renderPat(t){this.cardHolder.innerHTML="",t.forEach(e=>{const r=`
        <div class="list__item pet ${e.id}">
          <div class="pet__info">
            <div class="pet__viev">${e.view}</div>
  
            <div class="pet__img">
              <picture>
                <source srcset=${e.imgWebP} type="image/webp" />
                <img src="${e.img}" alt="pet image" />
              </picture>
            </div>
  
            <p class="pet__name">${e.name}</p>
            <p class="pet__short-info">${e.shortInfo}</p>
            ${e.owner?`<p class="pet__owner">Є опікун: ${e.owner} (ID)</p>`:""}
          </div>
  
          <div class="pet__btns">
            <a href="one-pet.html?id=${e.id}" class="pet__page btn gradient">Переглянути</a>
            <button class="pet__edit btn gradient" data-id="${e.id}">Редагувати</button>
            <button class="pet__del btn gradient" data-id="${e.id}" data-img="${e.img}" data-img-webp="${e.imgWebP}">Видалити</button>
          </div>
        </div>
      `;this.cardHolder.insertAdjacentHTML("beforeend",r)}),this.addDeleteEventListeners(),this.addEditEventListeners()}addDeleteEventListeners(){this.cardHolder.querySelectorAll(".pet__del").forEach(e=>{e.addEventListener("click",r=>{const a=r.target.getAttribute("data-id"),s=r.target.getAttribute("data-img"),n=r.target.getAttribute("data-img-webp");a&&s&&n&&new x(a,s,n)})})}addEditEventListeners(){this.cardHolder.querySelectorAll(".pet__edit").forEach(e=>{e.addEventListener("click",r=>{const a=r.target.getAttribute("data-id");a&&new T(a,"#form-edit-pet")})})}}class O{formId;validator;btn;constructor(t){this.formId=t,this.validator=new g(this.formId),this.btn=document.querySelector(".all-pet__add"),this.init()}init(){this.btn.addEventListener("click",()=>{new f(".pop-up-new-pet"),this.initializeValidation()})}async uploadImage(t,e){const r=D(),a=_(r,e);try{return await P(a,t),await $(a)}catch(s){throw console.error("Error uploading image: ",s),s}}async updateData(){const t=document.querySelector("#name-pet"),e=document.querySelector("#breed"),r=document.querySelector("#age"),a=document.querySelector("#short-info"),s=document.querySelector("#full-info"),n=document.querySelector("#viev"),i=document.querySelector("#img-jpg"),l=document.querySelector("#img-webp");if(!t||!e||!r||!a||!s||!n||!i||!l){console.error("One or more input elements are not found in the DOM");return}const u=t.value,v=e.value,I=r.value,w=a.value,p=s.value,L=n.value,q=i.files?.[0],M=l.files?.[0];if(!q||!M){console.error("Both image files (JPG and WebP) must be selected.");return}try{const b=await this.uploadImage(q,`pats/${Date.now()}.jpg`),F=await this.uploadImage(M,`pats/${Date.now()}.webp`);await E(c(o,"pats"),{name:u,breed:v,age:I,shortInfo:w,fullInfo:p,img:b,imgWebP:F,view:L}),location.reload()}catch(b){console.error("Error adding pet data:",b)}}initializeValidation(){this.validator.addField("#viev",[{rule:"required",errorMessage:"Ведіть дані"},{rule:"minLength",value:2,errorMessage:"Дані мають містити більше символів"},{rule:"customRegexp",value:/^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,errorMessage:"Дані мають містити лише літери"}]).addField("#name-pet",[{rule:"required",errorMessage:"Ведіть ім'я"},{rule:"minLength",value:2,errorMessage:"Ім'я має містити більше символів"},{rule:"customRegexp",value:/^[А-Яа-яЁёІіЇїЄєҐґA-Za-z]{2,}$/,errorMessage:"Ім'я має містити лише літери"}]).addField("#breed",[{rule:"required",errorMessage:"Ведіть породу"},{rule:"minLength",value:2,errorMessage:"Порода має містити більше символів"},{rule:"customRegexp",value:/^[a-zа-яёіїє\s]+$/,errorMessage:"Порода має містити лише маленькі літери"}]).addField("#age",[{rule:"required",errorMessage:"Вкажіть вік"},{rule:"minLength",value:5,errorMessage:"Вік має містити більше символів"},{rule:"customRegexp",value:/^[a-zа-яіїєґ0-9\s]+$/,errorMessage:"Вік має містити лише маленькі літери, цифри або пробіли"}]).addField("#short-info",[{rule:"required",errorMessage:"Заповніть коротку інформацію."},{rule:"minLength",value:10,errorMessage:"Коротка інформація має містити більше символів."},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s,.;?!(){}[\]<>:"'–-]+$/,errorMessage:"Коротка інформація має містити лише літери, цифри, пробіли та дозволені знаки припинання."}]).addField("#full-info",[{rule:"required",errorMessage:"Заповніть повну інформацію."},{rule:"minLength",value:5,errorMessage:"Повна інформація має містити більше символів."},{rule:"customRegexp",value:/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9\s,.;?!(){}[\]<>:"'–-]+$/,errorMessage:"Повна інформація має містити лише літери, цифри, пробіли та дозволені знаки припинання."}]).addField("#img-jpg",[{rule:"required",errorMessage:"Завантажте картинку"}]).addField("#img-webp",[{rule:"required",errorMessage:"Завантажте картинку"}]).onSuccess(t=>{t.preventDefault(),this.updateData().then(()=>{setTimeout(()=>{location.reload()},2e3)})})}}class V{petId;formId;validator;constructor(t,e){this.petId=t,this.formId=e,this.validator=new g(this.formId),this.init()}init(){new f(".pop-up-new-need"),this.initializeValidation()}async updatePetData(){const t=document.querySelector("#form-new-need #item"),e=document.querySelector("#form-new-need #cost");if(!t||!e){console.error("One or more input elements are not found in the DOM");return}const r=t.value.trim(),a=Number(e.value);if(!r||isNaN(a)){console.error("Invalid input values");return}try{const s=c(o,`pats/${this.petId}/need`);await E(s,{item:r,cost:a}),location.reload()}catch(s){console.error("Error adding new need:",s)}}async initializeValidation(){this.validator.addField("#item",[{rule:"required",errorMessage:"Вкажіть назву потреби"},{rule:"minLength",value:2,errorMessage:"Назва має містити більше символів"}]).addField("#cost",[{rule:"required",errorMessage:"Вкажіть вартість потреби"},{rule:"number",errorMessage:"Вартість має бути числом"}]).onSuccess(t=>{t.preventDefault(),this.updatePetData()})}}class j{myPetContent;constructor(t){this.myPetContent=document.querySelector(t),this.init()}init(){this.getPetsNeed(),this.myPetContent.addEventListener("click",this.handleButtonClick.bind(this))}async getPetsNeed(){try{const t=c(o,"pats"),e=await h(t),r=[];for(const a of e.docs){const s=a.data(),n=c(o,`pats/${a.id}/need`),i=await h(n),l=[];i.forEach(u=>{l.push({id:u.id,...u.data()})}),r.push({id:a.id,name:s.name||"No Name",needs:l}),this.addNameInForm(r[0].name)}this.renderPatNeed(r)}catch(t){console.error(t)}}addNameInForm(t){document.querySelector(".name-needs-pet").textContent=t}renderPatNeed(t){this.myPetContent.innerHTML="",t.forEach(e=>{const r=e.needs.map(n=>`<li class="pet-need__list-item">
                                                                    ${n.item}: <span>${n.cost} грн</span> 
                                                                    <button class="pet-need__remove btn gradient" data-need-id="${n.id}" data-pet-id="${e.id}"> Видалити </button>
                                                                </li>`).join(""),a=e.needs.reduce((n,i)=>n+i.cost,0),s=`
          <div class="pet-need ${e.id}">
            <h3 class="pet-need__name title">${e.name}</h3>
  
            <ul class="pet-need__list">
              ${r}
            </ul>
  
            <div class="pet-need__pay">
              <p class="pet-need__summ">Всього: <span>${a} грн</span></p>
              <button class="pet-need__pay-btn btn gradient" data-pet-id="${e.id}">Додати потребу</button>
            </div>
          </div>
        `;this.myPetContent.insertAdjacentHTML("beforeend",s)})}async removeDelNeeds(t,e){try{const r=m(o,`pats/${t}/need/${e}`);await y(r),this.getPetsNeed()}catch(r){console.error("Error deleting need:",r)}}handleButtonClick(t){const e=t.target;if(e.classList.contains("pet-need__remove")){const r=e.dataset.needId,a=e.dataset.petId;r&&a&&this.removeDelNeeds(a,r).then(()=>{setTimeout(()=>{location.reload()},2e3)})}else if(e.classList.contains("pet-need__pay-btn")){const r=e.dataset.petId;r&&new V(r,"#form-new-need")}}}class k{userId;formId;validator;constructor(t,e){this.userId=t,this.formId=e,this.validator=new g(this.formId),this.init()}init(){new f(".pop-up-massage"),this.initializeValidation()}async updateUserData(){const t=document.querySelector(`${this.formId} #topic`),e=document.querySelector(`${this.formId} #who-send`),r=document.querySelector(`${this.formId} #text`);if(!t||!e||!r){console.error("One or more input elements are not found in the DOM");return}const a=t.value.trim(),s=e.value.trim(),n=r.value.trim();if(!a||!s||!n){console.error("Invalid input values");return}try{const i=c(o,`users/${this.userId}/massages`);await E(i,{topic:a,whoSend:s,text:n}),alert("Повідомлення успішно надіслано"),location.reload()}catch(i){console.error("Error adding new message:",i),alert("Не вдалося надіслати повідомлення. Спробуйте знову.")}}initializeValidation(){this.validator.addField("#topic",[{rule:"required",errorMessage:"Тема обов’язкова"},{rule:"minLength",value:3,errorMessage:"Тема має містити щонайменше 3 символи"}]).addField("#who-send",[{rule:"required",errorMessage:"Вкажіть відправника"},{rule:"minLength",value:3,errorMessage:"Ім’я відправника має містити більше символів"}]).addField("#text",[{rule:"required",errorMessage:"Текст повідомлення обов’язковий"},{rule:"minLength",value:10,errorMessage:"Текст повідомлення має містити щонайменше 10 символів"}]).onSuccess(t=>{t.preventDefault(),this.updateUserData().then(()=>{setTimeout(()=>{location.reload()},2e3)})})}}class J{container;constructor(t){const e=document.querySelector(t);this.container=e,this.init()}init(){this.fetchAndRenderUsers()}async fetchAndRenderUsers(){try{const t=await this.fetchUsersFromDatabase();this.renderUsers(t)}catch(t){console.error("Error fetching or rendering users:",t)}}async fetchUsersFromDatabase(){const t=await h(c(o,"users")),e=[];return t.forEach(r=>{e.push({uid:r.data().uid,id:r.id,name:r.data().name,surname:r.data().surname,phone:r.data().phone,email:r.data().email,role:r.data().role})}),e}renderUsers(t){this.container.innerHTML="",t.forEach(e=>{const r=document.createElement("div");r.className="all-users__one-user one-user",r.innerHTML=`
          <p class="one-user__item uid">UID: <span>${e.uid}</span></p>
          <p class="one-user__item id">ID: <span>${e.id}</span></p>
          <p class="one-user__item user-name">Ім'я: <span>${e.name}</span></p>
          <p class="one-user__item user-surname">Фамілія: <span>${e.surname}</span></p>
          <p class="one-user__item user-email">Пошта: <span>${e.email}</span></p>
          <p class="one-user__item user-phone">Номер телефону: <span>${e.phone}</span></p>
          <p class="one-user__item user-role">Роль: <span>${e.role}</span></p>
          <div class="one-user__item btns">
            <button class="btns__write btn gradient" data-id="${e.id}">Написати повідолення</button>
            <button class="btns__edit-role btn gradient" data-id="${e.id}" data-role="${e.role}">Зміна ролі</button>
            <button class="btns__remove btn gradient" data-id="${e.id}" data-uid="${e.uid}">Видалити</button>
          </div>
        `,this.container.appendChild(r)}),this.addEventListeners()}addEventListeners(){this.container.addEventListener("click",async t=>{const e=t.target;if(e.classList.contains("btns__edit-role")){const r=e.dataset.id,a=e.dataset.role;r&&a&&await this.handleRoleChange(r,a)}if(e.classList.contains("btns__remove")){const r=e.dataset.id,a=e.dataset.uid;r&&a&&confirm("Ви впевнені, що хочете видалити цього користувача?")&&await this.handleUserDeletion(r,a)}if(e.classList.contains("btns__write")){const r=e.dataset.id;r&&new k(r,"#form-massage")}})}async handleRoleChange(t,e){const r=e==="admin"?"user":"admin";try{const a=m(o,"users",t);await S(a,{role:r}),this.fetchAndRenderUsers()}catch{alert("Не вдалося змінити роль. Спробуйте знову.")}}async handleUserDeletion(t,e){try{const r=m(o,"users",t);await y(r);const s=N().currentUser;s&&s.uid===e&&await C(s),alert("Користувач успішно видалений."),this.fetchAndRenderUsers()}catch(r){console.error("Error deleting user:",r),alert("Не вдалося видалити користувача. Спробуйте знову.")}}}document.addEventListener("DOMContentLoaded",async()=>{new H(".tabs__nav-btn",".tabs__item"),new z,new W("#form-edit"),new B(".list"),new O("#form-new-pet"),new j(".needs-for-pet"),new J(".all-users")});