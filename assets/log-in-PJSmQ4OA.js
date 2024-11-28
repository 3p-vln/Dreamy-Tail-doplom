import"./script-DaepQuN0.js";import{J as i}from"./just-validate.es-C73wyOde.js";import{g as n,f as l,c as u,s as d,d as c}from"./firebase-BaZ254dP.js";class h{auth=n();emailInput;passwordInput;constructor(){this.emailInput=document.getElementById("email"),this.passwordInput=document.getElementById("password"),this.handleLogin()}async fetchUsers(){const e=await l(u(c,"users")),r=[];return e.forEach(s=>{r.push({id:s.id,uid:s.data().uid,role:s.data().role})}),r}async handleLogin(){const e=this.emailInput.value,r=this.passwordInput.value;try{const a=(await d(this.auth,e,r)).user.uid;(await this.fetchUsers()).find(o=>o.uid===a)?document.cookie=`UID=${a}`:alert("Користувач не зареєстрований")}catch{this.showLoginError()}}showLoginError(){alert("Невірно введені дані")}}class m{formId;validator;constructor(e){this.formId=e,this.validator=new i(this.formId),this.initializeValidation()}initializeValidation(){this.validator.addField("#email",[{rule:"required",errorMessage:"Ведіть пошту"},{rule:"customRegexp",value:/^[-\w.]+@([а-яёa-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,errorMessage:"Напишіть правильну пошту"}]).addField("#password",[{rule:"required",errorMessage:"Ведіть пароль"},{rule:"minLength",value:6,errorMessage:"Довжина не менше 6 символів"},{rule:"customRegexp",value:/[a-z]/,errorMessage:"Пароль повинен мати тільки англійські літери"},{rule:"customRegexp",value:/[A-Z]/,errorMessage:"Пароль повинен містити велику літеру"},{rule:"customRegexp",value:/[0-9]/,errorMessage:"Пароль повинен містити цифру"}]).onSuccess(e=>{e.preventDefault(),new h})}}document.addEventListener("DOMContentLoaded",async()=>{new m("#form-log-in")});
