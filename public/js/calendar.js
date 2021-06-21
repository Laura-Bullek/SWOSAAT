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
        events: data.data,
        eventColor: "#378006",
        themeSystem: "standard",
        selectable: true,
        dateClick: function (info) {},
      });

      calendar.render();
    });
});
