document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var addEvent = document.getElementById(".add");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    editable: true,
    droppable: true,
    dateClick: function (info) {
      alert("clicked " + info.dateStr);
    },
    select: function (info) {
      alert("selected " + info.startStr + " to " + info.endStr);
    },
  });

  calendar.render();
});

// const addEventToCalendar = async (event) => {
//   event.preventDefault();
//   // Collect values from the subcription form
//   const subcriptionName = document.querySelector("#project-name").value.trim();
//   const subscriptionPrice = document.querySelector("#sub_price").value.trim();
//   const paymentInterval = document.querySelector("#pay-interval").value.trim();

//   if (subcriptionName && subscriptionPrice && paymentInterval) {
//     // Send a POST request to the API endpoint
//     const response = await fetch("/api/profile/subscription", {
//       method: "POST",
//       body: JSON.stringify({
//         subcriptionName,
//         subscriptionPrice,
//         paymentInterval,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace("/profile");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector("new-sub-form")
//   .addEventListener("submit", addEventToCalendar);
