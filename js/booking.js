let today = new Date()
today.setDate(today.getDate() + 1)

let minDate = today.toISOString().split("T")[0]

document.getElementById("date").setAttribute("min", minDate)

//--------------


document.addEventListener("DOMContentLoaded", function () {

    let doctor = JSON.parse(localStorage.getItem("selectedDoctor"));
    if (doctor) {
        document.querySelector("#docName").innerText = doctor.name;
        document.querySelector("#docSpecialty").innerText = "Specialty: " + doctor.specialty;
        document.querySelector("#docDays").innerText = "Available: " + doctor.days;
        document.querySelector("#docFee").innerText = "Fee: " + doctor.fee + " OMR";
    } else {
        document.getElementById("docName").innerText = "No doctor selected";
    }

    let form = document.querySelector("#bookingForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset errors
        ["name", "email", "Phone", "Age", "date", "time", "insurance"].forEach(id => {
            document.getElementById(id + "Error").innerText = "";
        });

        let name = document.querySelector("#name").value.trim()
        let email = document.querySelector("#email").value.trim()
        let phone = document.querySelector("#Phone").value.trim()
        let age = document.querySelector("#Age").value.trim()
        let date = document.querySelector("#date").value
        let time = document.querySelector("#time").value
        let insurance = document.querySelector("#insurance").value

        let valid = true

        if (name === "") {
            document.getElementById("nameError").innerText = "Please enter your name"
            valid = false
        }

        if (email === "") {
            document.getElementById("emailError").innerText = "Please enter your email"
            valid = false
        } else {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById("emailError").innerText = "Please enter a valid email"
                valid = false
            }
        }

        if (phone === "") {
            document.getElementById("PhoneError").innerText = "Please enter your phone number"
            valid = false
        }

        if (age === "" || age < 1 || age > 120) {
            document.getElementById("AgeError").innerText = "Age must be between 1 and 120"
            valid = false
        }

        if (date === "") {
            document.getElementById("dateError").innerText = "Please select a date"
            valid = false
        }

        if (time === "") {
            document.getElementById("timeError").innerText = "Please select a time"
            valid = false
        }

        if (insurance === "") {
            document.getElementById("insuranceError").innerText = "Please select insurance provider"
            valid = false
        }

        if (valid) {
            let refrenceNum = Math.floor(10000000 + Math.random() * 90000000)
            let confirmSummary = document.querySelector("#confirmSummary")
            let confirmationHTML = `
<div class="card confirm-card p-4 mt-4 shadow">
<h4>Appointment Confirmed</h4>

<p><b>Reference Number:</b> ${refrenceNum}</p>
<p><b>Doctor:</b> ${doctor.name}</p>
<p><b>Date:</b> ${date}</p>
<p><b>Time:</b> ${time}</p>

<hr>

<b>Patient Details</b>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Age:</b> ${age}</p>
<p><b>Insurance:</b> ${insurance}</p>

<button class="btn viewAppointments mt-3" id="viewAppointments">
View My Appointments
</button>

</div>
`;

            confirmSummary.innerHTML = confirmationHTML

            form.reset()

let newAppointment = {
refrenceNum:refrenceNum,
 doctor: doctor.name,
    specialty: doctor.specialty,
    date: date,
    time: time,
    name: name,
    email: email,
    phone: phone,
    age: age,
    insurance: insurance

}


// جلب المواعيد القديمة
let appointments = JSON.parse(localStorage.getItem("appointments")) || []

// إضافة الموعد الجديد
appointments.push(newAppointment)

// حفظ مرة ثانية
localStorage.setItem("appointments", JSON.stringify(appointments))

// to view all appointments in a new page
let viewAppointments = document.querySelector("#viewAppointments")
viewAppointments.addEventListener("click",function(){
    window.location = "appointments.html"
})
        }
    })

})