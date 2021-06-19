document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  fetch("/events", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      var calendar = new FullCalendar.Calendar(calendarEl, {
        events: data.events,

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
});
