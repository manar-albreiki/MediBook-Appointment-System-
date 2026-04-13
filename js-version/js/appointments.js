let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

let container = document.querySelector("#appointmentsList")

if(appointments.length === 0){
container.innerHTML = "<p>No appointments found</p>"
}

for(let i = 0; i < appointments.length; i++){

let app = appointments[i];

let card = `
<div class="card appointment-list p-3 mb-3">
<h5>Doctor: ${app.doctor}</h5>
<p><b>Reference:</b> ${app.refrenceNum}</p>
<p><b>Date:</b> ${app.date}</p>
<p><b>Time:</b> ${app.time}</p>
<p><b>Patient:</b> ${app.name}</p>
</div>
`

container.innerHTML += card

}

document.querySelector("#backHome").addEventListener("click", function () {
    window.location.href = "index.html";
})