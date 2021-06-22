document.addEventListener("DOMContentLoaded", function () {
  var pieChartE1 = document.getElementById("pieChart");
  var context = pieChartE1.getContext("2d");
  var pieChartE2 = document.getElementById("pieChart2");
  var context2 = pieChartE2.getContext("2d");

  fetch("/prices", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      const colors = ["#0D94FB", "#007FE0", "#0069B8", "#FFD966", "#F1C232"];
      
      var monthlyDatabase = {
        labels: [],
        datasets: [
          {
            label: "Monthly Spending",
            data: [],
            backgroundColor: [],
            hoverOffset: 8,
          },
        ],
      };

      var yearlyDatabase = {
        labels: [],
        datasets: [
          {
            label: "Yearly Spending",
            data: [],
            backgroundColor: [],
            hoverOffset: 8,
          },
        ],
      };

      for (let i = 0; i < data.monthly.length; ++i) {
        monthlyDatabase.labels.push(data.monthly[i].label);
        monthlyDatabase.datasets[0].data.push(data.monthly[i].price);
        monthlyDatabase.datasets[0].backgroundColor.push(colors[Math.floor(Math.random() * colors.length)]);
        
        yearlyDatabase.labels.push(data.monthly[i].label);
        yearlyDatabase.datasets[0].data.push((data.monthly[i].price) * 12);
        yearlyDatabase.datasets[0].backgroundColor.push(colors[Math.floor(Math.random() * colors.length)]);
      }

      for (let n = 0; n < data.yearly.length; ++n) {
        yearlyDatabase.labels.push(data.yearly[n].label);
        yearlyDatabase.datasets[0].data.push(data.yearly[n].price);
        yearlyDatabase.datasets[0].backgroundColor.push(colors[Math.floor(Math.random() * colors.length)]);
      }

      var myChart = new Chart(context, {
        type: "doughnut",
        data: monthlyDatabase,
        title: {
          display: true,
          text: "Reported Fault Allocation",
          color: "#D6001C",
          font: {
            family: "AvenirNextLTW01-Regular",
            size: 16,
            style: "normal",
          },
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Spending'
                }
            },
        },
      });

      var myOtherChart = new Chart(context2, {
        type: "doughnut",
        data: yearlyDatabase,
        title: {
          display: true,
          text: "Reported Fault Allocation",
          color: "#D6001C",
          font: {
            family: "AvenirNextLTW01-Regular",
            size: 16,
            style: "normal",
          },
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Yearly Spending'
                }
            },
        },
      });
    });
});
