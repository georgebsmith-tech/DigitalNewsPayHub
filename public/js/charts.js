var ctx = document.getElementById('myChart').getContext('2d');

async function getData() {
    const res = await fetch("/api");
    const data = await res.json()
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [data[0].category.toUpperCase()],
            datasets: [{
                label: 'Number of articles by category',
                backgroundColor: ['rgb(0,0,255)',
                    'rgb(255,0,0)'],
                borderColor: ['rgb(0,0,255)',
                    'rgb(255,0,0)'],
                data: [data.length],
                borderWidth: 1
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 19, 132)'
                }
            }
        }
    });

}

getData()


