//Creates various graphs throught the library of chart.js
let line = document.getElementById('line-graph').getContext('2d');
let bar = document.getElementById('bar-graph').getContext('2d');
let donut = document.getElementById('donut-graph').getContext('2d');

//Creates a line graph
let lineGraph = new Chart(line, {
	type:'line',
	data: {
		labels:['16-22', '23-29','30-5','6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',''],
		datasets: [{
			data: [
				0,
				750,
				1250,
				1000,
				1500,
				2000,
				1500,
				1750,
				1250,
				1750,
				2250,
				1750,
				2250
			],
			//Giving the line graph various styles
			backgroundColor: 'rgba(226, 227, 247, 0.6)',
			borderColor: 'rgb(116, 118, 192)',
			pointRadius: 7.5,
			pointBackgroundColor: '#fff',
			pointBorderWidth: 3,
			spanGaps: false
		}]
	},
	options: {
		elements: {
			line: {
				//Makes the line straight instead of a bell curve
				tension: 0
			}
		},
		tooltips: {
			//Disables the tooltips
			enabled: false
		},
		legend: {
			//Disables the legend on top of the graph
			display: false
		},
		scales: {
		    xAxes: [{
		    	ticks: {
		    		beginAtZero:true
		    	},
		        gridLines: {
		        	//Centers the x-coordinates in between the lines
		            offsetGridLines: true
		        }
	      }],
	        yAxes: [{
	            ticks: {
	                beginAtZero: true
	            },
	            gridLines: {
	            	offsetGridLines: true
	            }
	        }]
		},
		gridLines: {
			offsetGridLines: true
		}
	}
}) 

//Creates a bar graph 
let barGraph = new Chart(bar, {
	type: 'bar',
	data: {
		labels:['S', 'M','T','W', 'T', 'F', 'S'],
		datasets: [{
			data: [
				50,
				75,
				150,
				100,
				200,
				175,
				75
			],
		backgroundColor: 'rgb(116, 118, 192)',
		borderRadius: 5
		}]
	},
	options: {
		scales: {
	        yAxes: [{
	        	display: true,
	            ticks: {
	                beginAtZero: true,
	                stepes: 59,
	                stepValue: 0,
	                max: 250
	            }
	        }]
		},
		legend: {
			display: false
		}
	}
})

let donutGraph = new Chart(donut, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktop'],
		datasets: [{
			data: [60, 60, 240],
			backgroundColor:[
				'rgb(118, 177, 191)',
				'rgb(146, 203, 159)',
				'rgb(116, 118, 192)'

			],
			borderWidth:[0,0,0]
		}],
	},
	options: {
		legend: {
			position: 'right',
			reverse: true,
			labels: {
				boxWidth: 20,
				boxHeight: 20
			}
		},
		rotation: -1&Math.PI,
	}
})