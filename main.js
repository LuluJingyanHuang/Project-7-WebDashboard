var lineChart = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});

var barChart = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data:  {
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 100)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 10, 5, 2, 20, 30, 45]
        }]
    },

    options:{}
});

var pieChart = document.getElementById('pieChart').getContext('2d');
var myBarChart = new Chart(pieChart, {
    type: 'pie',
    data:  {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['	#ebd8db', '#bf7f89','#659890'],
            data: [10,20,30]
        }]
    },

    options:{}
});
