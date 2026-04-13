fetch('data.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

    })
    .catch(error => console.log(error));

// ----------- page 1
fetch('data.json')
    .then(response => response.json())
    .then(data => {

        let services = data.services;

// services section
        let container = document.querySelector("#services");

        services.forEach(service => {

            container.innerHTML += `

<div class="col-md-4 col-sm-6 col-12 mb-4">
<div class="card services-card text-center p-3 shadow">

<div class="service-icon">
${service.icon}
</div>

<div class="card-body">
<h5 class="card-title">${service.name}</h5>
<p class="card-text">${service.description}</p>
</div>

</div>
</div>

`

        })

    })
    let bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
    window.location.href = "doctors.html";
})
// -------------------------------------------------
// Featured Doctors Section
fetch("data.json")
    .then(response => response.json())
    .then(data => {

        let doctors = data.doctors

        let doctorsinfo = document.querySelector("#doctors")

        let cartona = ``

        for (let i = 0; i < doctors.length; i++) {

            let stars = ``

            for (let j = 0; j < doctors[i].rating; j++) {
                stars += `★`
            }

            cartona += `

<div class="col-md-3 col-sm-6 col-12 mb-3">
<div class="card featured-card p-3 shadow text-center">

<h5>${doctors[i].name}</h5>

<p class="doctor-specialty">${doctors[i].specialty}</p>

<p class="doctor-rating">${stars}</p>

<p class="doctor-experience">${doctors[i].experience} Years Experience</p>

</div>
</div>

`

        }

        doctorsinfo.innerHTML = cartona

    })

// ---------------------------------------

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        let doctors = data.doctors

        let doctorsCount = doctors.length

        let specialties = []

        for (let i = 0; i < doctors.length; i++) {
            specialties.push(doctors[i].specialty)
        }

        let uniqueSpecialties = [...new Set(specialties)]

        let specialtiesCount = uniqueSpecialties.length

        let patientsCount = doctorsCount * 120

        counter("doctorsCount", doctorsCount)
        counter("specialtiesCount", specialtiesCount)
        counter("patientsCount", patientsCount)

    })
function counter(id, target) {

    let element = document.getElementById(id)

    let count = 0

    let interval = setInterval(function () {

        count++

        element.innerHTML = count

        if (count == target) {
            clearInterval(interval)
        }

    }, 30)

}
// --------------------------- page2



// let searchInput = document.querySelector("#searchInput")
// let resultsContainer = document.querySelector("#results")
// let allDoctors = []

// // جلب الدكاترة من ملف JSON خارجي
// fetch("data.json")
// .then(response => response.json())
// .then(data => {
//     allDoctors = data.doctors
//     displayDoctors(allDoctors)  // عرض كل الدكاترة أول مرة
// })
// .catch(error => console.error("Error loading doctors:", error))

// // دالة عرض الدكاترة
// function displayDoctors(list) {
//     if(list.length === 0) {
//         resultsContainer.innerHTML = "<p>No doctors found</p>"
//         return
//     }
//     let html = ""
//     for(let doctor of list){
//         let stars = "★".repeat(doctor.rating)
//         html += `
//             <div class="card">
//                 <h4>${doctor.name}</h4>
//                 <p class="text-primary">${doctor.specialty}</p>
//                 <p class="text-warning">${stars}</p>
//                 <p>${doctor.experience} Years Experience</p>
//             </div>
//         `
//     }
//     resultsContainer.innerHTML = html
// }

// // البحث الحي بدون فلتر
// searchInput.addEventListener("keyup", function(){
//     let searchValue = this.value.toLowerCase().trim()
//     let cartona = []

//     for(let i = 0; i < allDoctors.length; i++){
//         if(allDoctors[i].name.toLowerCase().includes(searchValue) ||
//            allDoctors[i].specialty.toLowerCase().includes(searchValue)){
//             cartona.push(allDoctors[i])
//         }
//     }

//     displayDoctors(cartona)
// })
// // -----
// let specialtyFilter = document.getElementById("specialtyFilter")

// specialtyFilter.addEventListener("change", function() {
//     let selectedSpecialty = this.value  // القيمة التي اختارها المستخدم
//     let filteredDoctors = []

//     for (let i = 0; i < allDoctors.length; i++) {
//         // إذا اخترنا All نعرض كل الدكاترة
//         if (selectedSpecialty === "All" || allDoctors[i].specialty === selectedSpecialty) {
//             filteredDoctors.push(allDoctors[i])
//         }
//     }

//     displayDoctors(filteredDoctors)  // عرض الدكاترة المطابقين للتخصص
// })


// searchInput.addEventListener("keyup", function(){
//     let searchValue = this.value.toLowerCase().trim()
//     let selectedSpecialty = specialtyFilter.value
//     let filteredDoctors = []

//     for (let i = 0; i < allDoctors.length; i++) {
//         let matchesSearch = allDoctors[i].name.toLowerCase().includes(searchValue) ||
//                             allDoctors[i].specialty.toLowerCase().includes(searchValue)
//         let matchesSpecialty = selectedSpecialty === "All" || allDoctors[i].specialty === selectedSpecialty

//         if (matchesSearch && matchesSpecialty) {
//             filteredDoctors.push(allDoctors[i])
//         }
//     }

//     displayDoctors(filteredDoctors)
// })




// // عناصر HTML
// let searchInput = document.getElementById("searchInput")
// let specialtyFilter = document.getElementById("specialtyFilter")
// let resultsContainer = document.getElementById("results")
// let allDoctors = []

// // جلب البيانات من JSON
// fetch("data.json")
// .then(response => response.json())
// .then(data => {
//     allDoctors = data.doctors
//     updateResults()  // عرض كل الدكاترة أول مرة
// })
// .catch(error => console.error("Error loading doctors:", error))

// // دالة عرض النتائج
// function displayDoctors(list) {
//     if(list.length === 0) {
//         resultsContainer.innerHTML = "<p>No doctors found</p>"
//         return
//     }
//     let html = ""
//     for(let doctor of list){
//         let stars = "★".repeat(doctor.rating)
//         html += `
//             <div class="card">
//                 <h4>${doctor.name}</h4>
//                 <p class="text-primary">${doctor.specialty}</p>
//                 <p class="text-warning">${stars}</p>
//                 <p>${doctor.experience} Years Experience</p>
//             </div>
//         `
//     }
//     resultsContainer.innerHTML = html
// }

// // دالة لتحديث النتائج حسب البحث والفلتر معًا
// function updateResults() {
//     let searchValue = searchInput.value.toLowerCase().trim()
//     let selectedSpecialty = specialtyFilter.value
//     let filteredDoctors = []

//     for(let i = 0; i < allDoctors.length; i++) {
//         let matchesSearch = allDoctors[i].name.toLowerCase().includes(searchValue) ||
//                             allDoctors[i].specialty.toLowerCase().includes(searchValue)
//         let matchesSpecialty = selectedSpecialty === "All" || allDoctors[i].specialty === selectedSpecialty

//         if(matchesSearch && matchesSpecialty){
//             filteredDoctors.push(allDoctors[i])
//         }
//     }

//     displayDoctors(filteredDoctors)
// }

// // أحداث البحث والفلتر
// searchInput.addEventListener("keyup", updateResults)
// specialtyFilter.addEventListener("change", updateResults)


// let sortSelect = document.getElementById("sortSelect")
// function updateResults() {
//     let searchValue = searchInput.value.toLowerCase().trim()
//     let selectedSpecialty = specialtyFilter.value
//     let filteredDoctors = []

//     // فلترة حسب البحث والتخصص
//     for(let i = 0; i < allDoctors.length; i++) {
//         let matchesSearch = allDoctors[i].name.toLowerCase().includes(searchValue) ||
//                             allDoctors[i].specialty.toLowerCase().includes(searchValue)
//         let matchesSpecialty = selectedSpecialty === "All" || allDoctors[i].specialty === selectedSpecialty

//         if(matchesSearch && matchesSpecialty){
//             filteredDoctors.push(allDoctors[i])
//         }
//     }

//     // تطبيق الفرز
//     let sortValue = sortSelect.value
//     if(sortValue === "rating"){
//         filteredDoctors.sort((a, b) => b.rating - a.rating) // من الأعلى للأقل
//     } else if(sortValue === "experience"){
//         filteredDoctors.sort((a, b) => b.experience - a.experience) // من الأعلى للأقل
//     }

//     displayDoctors(filteredDoctors)
// }
// sortSelect.addEventListener("change", updateResults)




// // دالة عرض البطاقات
// function displayDoctors(list){
//     if(list.length === 0){
//         resultsContainer.innerHTML = "<p>No doctors found</p>"
//         return
//     }

//     let html = ""
//     for(let doctor of list){
//         // دائرة باللون العشوائي
//         let colors = ["#e74c3c","#3498db","#2ecc71","#9b59b6","#f39c12","#1abc9c"]
//         let bgColor = colors[Math.floor(Math.random()*colors.length)]
//         // الأحرف الأولى من الاسم
//         let initials = doctor.name.split(" ").map(word => word[0].toUpperCase()).join("")
//         // النجوم حسب التقييم
//         let stars = "★".repeat(doctor.rating)
//         // الأيام المتاحة
//         let days = (doctor.availableDays && doctor.availableDays.length > 0) ? doctor.availableDays.join(", ") : "No days available"

//         html += `
//             <div class="card">
//                 <div class="photo" style="background-color:${bgColor}">${initials}</div>
//                 <h4>${doctor.name}</h4>
//                 <span class="specialty">${doctor.specialty}</span>
//                 <div class="rating">${stars}</div>
//                 <div class="experience">${doctor.experience} Years Experience</div>
//                 <div class="days">Available: ${days}</div>
//             </div>
//         `
//     }

//     resultsContainer.innerHTML = html
// }




