document.addEventListener("DOMContentLoaded", function () {
    var pieChartE1 = document.getElementById("pieChart");
    var context = pieChartE1.getContext("2d");

    fetch("/prices", {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }).then(function(res) {
        return res.json();
    }).then(function(data) {
        var ourDatabase = {
            labels: ['subscription 0'],
            datasets: [{
                label: "Monthly Spending",
                data: [10],
                backgroundColor: ['#3333ff'],
                hoverOffset: 20
            }]
        };
        
        for(let i = 0; i < data.data.length; ++i) {
            ourDatabase.labels.push(data.data[i].label);
            ourDatabase.datasets[0].data.push(data.data[i].price);
            ourDatabase.datasets[0].backgroundColor.push("#3333ff");
        }

        var myChart = new Chart(context, {
            type: 'doughnut',
            data: ourDatabase
        });
    });
});