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
      var calendar = new FullCalendar.Calendar(calendarEl, {
        events: data.data,
        eventColor: "orange",
        selectable: true,
        displayEventTime: false,
        dateClick: function (info) {},
      });

      calendar.render();
    });
});

// {
//   title: subscriptionData.service_name

//   start: subscriptionData.pay_date,
//   end:
// },
