var banner= document.querySelector('.alertbar button')

banner.addEventListener('click',()=>{
    document.querySelector('.alertbar').style.opacity= 0;
    document.querySelector('.alertbar').style.transition = "3s";
    console.log('ah');

});




var lineChart = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Web Traffic',
            backgroundColor: '	#e2e3f6',
            borderColor: '#e2e3f6',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
        // opacity:0.5;
    },
    // Configuration options go here
    options: {responsive: true,
  maintainAspectRatio: true,}
});
// chart.canvas.parentNode.style.height = '400px';
// chart.canvas.parentNode.style.width = '80%';


var barChart = document.getElementById('barChart').getContext('2d');
var myBarChart = new Chart(barChart, {
    type: 'bar',
    data:  {
        labels: ['S','M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: '#a9acd7',
            data: [20, 10, 5, 2, 20, 30, 45]
        }]
    },

// barChart.style.width='500px';
    options:{responsive: true,
  maintainAspectRatio: true,}
});

var pieChart = document.getElementById('pieChart').getContext('2d');
var myBarChart = new Chart(pieChart, {
    type: 'pie',
    data:  {
        labels: ['Phones','Tablets','Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['	aaaccb', '#a9acd7','#cccddf'],
            data: [10,20,30]
        }]
    },

    options:{responsive: true,
  maintainAspectRatio: true,}
});
