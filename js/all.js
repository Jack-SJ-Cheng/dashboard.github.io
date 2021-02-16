var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
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

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx2, {
	// The type of chart we want to create
	type: 'polarArea',

	// The data for our dataset
	data: {
		labels: ['January', 'February', 'March'],
		datasets: [{
			label: 'My First dataset',
			backgroundColor: ['rgba(25, 9, 132, 0.3)', 'rgba(55, 5, 77, 0.3)', 'rgba(55, 80, 57, 0.3)'],
			borderColor: ['rgba(25, 9, 132, 0.3)', 'rgba(55, 5, 77, 0.3)', 'rgba(55, 80, 57, 0.3)'],
			data: [20, 10, 5]
		}]
	},

	// Configuration options go here
	options: {}
});

$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip()
});