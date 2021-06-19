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
            labels: [],
            datasets: [{
                label: "Monthly Spending",
                data: [],
                backgroundColor: [],
                hoverOffset: 20
            }]
        };

        const colors = ["#0D94FB", "#007FE0", "#0069B8", "#FFD966", "#F1C232"];
        
        for(let i = 0; i < data.data.length; ++i) {
            ourDatabase.labels.push(data.data[i].label);
            ourDatabase.datasets[0].data.push(data.data[i].price);
            ourDatabase.datasets[0].backgroundColor.push(colors[Math.floor(Math.random() * colors.length)]);
        }

        var myChart = new Chart(context, {
            type: 'doughnut',
            data: ourDatabase,
            options: {
                plugins: {
                    datalabels: {
                        display: true,
                        formatter: (val, context) => {
                            return context.chart.data.labels[context.dataIndex];
                        }
                    }
                }
            }
        });
    });
});