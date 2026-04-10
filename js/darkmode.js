// document.addEventListener("DOMContentLoaded", function(){

// let toggle = document.getElementById("darkToggle");

// // عند فتح الصفحة (يشتغل في كل الصفحات)
// let savedMode = localStorage.getItem("mode");

// if(savedMode === "dark"){
// document.body.classList.add("dark");
// if(toggle){
// toggle.checked = true;
// }
// }

// // إذا التوجل موجود فقط
// if(toggle){
// toggle.addEventListener("change", function(){

// document.body.classList.toggle("dark");

// if(document.body.classList.contains("dark")){
// localStorage.setItem("mode","dark");
// }else{
// localStorage.setItem("mode","light");
// }

// });
// }

// });


document.addEventListener("DOMContentLoaded", function(){

let toggle = document.getElementById("darkToggle");

// 1. افتراضي = لايت (إذا ما فيه شيء محفوظ)
let savedMode = localStorage.getItem("mode");

// 2. تطبيق الوضع المحفوظ فقط
if(savedMode === "dark"){
document.body.classList.add("dark");
if(toggle) toggle.checked = true;
} else {
document.body.classList.remove("dark");
if(toggle) toggle.checked = false;
}

// 3. عند تغيير الزر
if(toggle){
toggle.addEventListener("change", function(){

if(this.checked){
document.body.classList.add("dark");
localStorage.setItem("mode","dark");
} else {
document.body.classList.remove("dark");
localStorage.setItem("mode","light");
}

});
}

});