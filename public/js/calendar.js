document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var service_name = document.querySelector("#sub-name").value.trim();
  var price = document.querySelector("#sub-price").value.trim();
  var pay_date = document.querySelector("#pay-date").value;

  fetch("/events", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      var calendar = new FullCalendar.Calendar(
        calendarEl,
        service_name,
        price,
        pay_date,
        {
          events: data.events,
          timeZone: "local",
          timeFormat: "hh:mm a",
          selectable: true,
          defaultView: "month",
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
        }
      );

      calendar.render();
    });
});
