//Initial chart draw on the canvas to update later with real data

    const Temps = [1,5,3,2,4];
    const time= ["A","B","C","D","E"]; 

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: time,
            datasets: [{
                label: "Temp",
                data: Temps,
                backgroundColor: [
                    'rgb(24, 174, 249)'
                    
                ],
                borderColor: [
                    'rgb(24, 174, 249)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title:{
                            display:true,
                            text: "Temperature"
                        }
                    },
                    x:{
                        title:{
                            display:true,
                            text: "Time"
                        },
                        
                    
                }
            }
        }
    });


//function for updating chart
function updateChart(title,chartLabels,Xdata,Ydata,unit){
    myChart.data.labels = Xdata; // Update labels
    myChart.data.datasets[0].data = Ydata;  // Update dataset values
    myChart.data.datasets[0].label= chartLabels[1]; // Update dataset label
    myChart.options.scales.x.title.text = chartLabels[0]; //naming x axis to easy understating
    myChart.options.scales.y.title.text = chartLabels[1]; //naming y axis to easy understating
    myChart.update(); // Refresh the chart to commit the new data
}
