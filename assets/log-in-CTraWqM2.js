import{g as n,f as l,c as d,d as u,s as c}from"./script-D4_QekKW.js";import{J as m}from"./just-validate.es-C73wyOde.js";class h{auth=n();emailInput;passwordInput;constructor(){this.emailInput=document.getElementById("email"),this.passwordInput=document.getElementById("password"),this.handleLogin()}async fetchUsers(){const e=await l(d(u,"users")),r=[];return e.forEach(a=>{r.push({id:a.id,uid:a.data().uid,role:a.data().role})}),r}async handleLogin(){const e=this.emailInput.value,r=this.passwordInput.value;try{const s=(await c(this.auth,e,r)).user.uid,t=(await this.fetchUsers()).find(o=>o.uid===s);t?(document.cookie=`UID=${s}`,t.role==="admin"?window.location.href="/Dreamy-Tail-doplom/cabinet-admin.html?tab=%23main-info":window.location.href="/Dreamy-Tail-doplom/cabinet-user.html?tab=%23main-info"):alert("Користувач не зареєстрований")}catch{this.showLoginError()}}showLoginError(){alert("Невірно введені дані")}}class g{formId;validator;constructor(e){this.formId=e,this.validator=new m(this.formId),this.initializeValidation()}initializeValidation(){this.validator.addField("#email",[{rule:"required",errorMessage:"Ведіть пошту"},{rule:"customRegexp",value:/^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,errorMessage:"Напишіть правильну пошту"}]).addField("#password",[{rule:"required",errorMessage:"Ведіть пароль"},{rule:"minLength",value:6,errorMessage:"Довжина не менше 6 символів"},{rule:"customRegexp",value:/[a-z]/,errorMessage:"Пароль повинен мати тільки англійські літери"},{rule:"customRegexp",value:/[A-Z]/,errorMessage:"Пароль повинен містити велику літеру"},{rule:"customRegexp",value:/[0-9]/,errorMessage:"Пароль повинен містити цифру"}]).onSuccess(e=>{e.preventDefault(),new h})}}document.addEventListener("DOMContentLoaded",async()=>{new g("#form-log-in")});
