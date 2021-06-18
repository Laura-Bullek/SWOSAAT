document.addEventListener("DOMContentLoaded", function () {
    var pieChartE1 = document.getElementById("pieChart");
    var context = pieChartE1.getContext("2d");

    var ourDatabase = {
        labels: [
            'Test1',
            'Test2',
            'Test3',
        ],
        datasets: [{
            label: 'Our Dataset',
            data: [100,200,300],
            backgroundColor: [
                '#ff0000',
                '#00ff00',
                '#0000ff'
            ],
            hoverOffset: 0
        }]
    };

    var myChart = new Chart(context, {
        type: 'doughnut',
        data: ourDatabase
    });
});