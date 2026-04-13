


// ---------------------------
// تعريف العناصر والمتغيرات
// ---------------------------
let searchInput = document.querySelector("#searchInput")
let specialtyFilter = document.querySelector("#specialtyFilter")
let sortSelect = document.querySelector("#sortSelect")
let results = document.querySelector("#results")
let allDoctors = [];

// ---------------------------
// جلب الدكاترة من JSON
// ---------------------------
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        allDoctors = data.doctors
        displayDoctors(allDoctors) // عرض كل الدكاترة أول مرة
    })
    .catch(error => console.error("Error loading doctors:", error))



function displayDoctors(list) {
    if (list.length === 0) {
        results.innerHTML = "<p>No doctors found</p>";
        return;
    }

    let html = "";
    for (let doctor of list) {
        // if (!doctor.available) continue; // نتجاهل الدكاترة غير المتاحين

        // الأحرف الأولى من الاسم
        let initials = doctor.name.split(" ").map(word => word[0].toUpperCase()).join("");

        // النجوم حسب التقييم
        let starsCount = Math.round(doctor.rating);
        let stars = "★".repeat(starsCount);

        // الأيام المتاحة كسلسلة نصية
        let days = (doctor.availableDays && doctor.availableDays.length > 0)
            ? doctor.availableDays.join(", ")
            : "No days available";

        html += `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="card listing-card mt-4 text-center">
                <div class="card-body">
                    <div class="photo">${initials}</div>
                    <h4>${doctor.name}</h4>
                    <span class="specialty">${doctor.specialty}</span>
                    <div class="rating">${stars}</div>
                    <div class="experience">${doctor.experience} Years Experience</div>
                    <div class="days">Available: ${days}</div>

                    <button class="bookBtn"
                        data-name="${doctor.name}"
                        data-specialty="${doctor.specialty}"
                        data-days="${days}"
                        data-fee="${doctor.fee}">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
        `;
    }

    results.innerHTML = html;

    // ربط كل أزرار الحجز بالحدث مباشرة
    document.querySelectorAll(".bookBtn").forEach(btn => {
        btn.addEventListener("click", function() {
            let doctor = {
                name: this.dataset.name,
                specialty: this.dataset.specialty,
                days: this.dataset.days,
                fee: this.dataset.fee
            };
            localStorage.setItem("selectedDoctor", JSON.stringify(doctor));
            window.location.href = "booking.html"; // رابط صفحة الحجز
        });
    });
}

// ---------------------------
// البحث الحي (keyup)
// ---------------------------
searchInput.addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase().trim()
    let filteredDoctors = [];

    for (let i = 0; i < allDoctors.length; i++) {
        if (allDoctors[i].name.toLowerCase().includes(searchValue) ||
            allDoctors[i].specialty.toLowerCase().includes(searchValue)) {
            filteredDoctors.push(allDoctors[i])
        }
    }

    displayDoctors(filteredDoctors)
});

// ---------------------------
// فلترة حسب التخصص
// ---------------------------
specialtyFilter.addEventListener("change", function() {
    let selectedSpecialty = this.value
    let filteredDoctors = []

    for (let i = 0; i < allDoctors.length; i++) {
        if (selectedSpecialty === "All" || allDoctors[i].specialty === selectedSpecialty) {
            filteredDoctors.push(allDoctors[i])
        }
    }

    displayDoctors(filteredDoctors)
});

// ---------------------------
// الفرز حسب التقييم أو الخبرة
// ---------------------------
sortSelect.addEventListener("change", function() {
    let sortValue = this.value;
    let doctorsToSort = [...allDoctors]; // نسخة من الدكاترة

    if (sortValue === "rating") {
        doctorsToSort.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "experience") {
        doctorsToSort.sort((a, b) => b.experience - a.experience);
    }

    displayDoctors(doctorsToSort);
});

// ---------------------------
// localStorage + toast
// ---------------------------
function bookDoctor(doctorName) {
    localStorage.setItem("selectedDoctor", doctorName);
    showToast();
}

function showToast() {
    let toast = document.querySelector("#toast");
    toast.style.display = "block";  
    setTimeout(function () {
        toast.style.display = "none";  
    }, 7000);
}