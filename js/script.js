let mylocation = ["52.52","13.41"];
let nowReport='';


//date time  splitter 
function dateTimeSplitter(TimeStamp){
    let splittedDateTime=[[],[]] ;
    for(let i=0;i<TimeStamp.length;i++){
        [splittedDateTime[0][i],splittedDateTime[1][i]]=TimeStamp[i].split("T");
    }
    return splittedDateTime;
};


//function to update table
function updateTable(headers,dataset,tableId){
    let dataSetTable = "";
    for(let i=0;i<dataset[0].length;i++){
        dataSetTable += `<tr>
        <td>${i+1}</td>
        <td>${dataset[0][i]}</td>
        <td>${dataset[1][i]}</td>
        <td>${dataset[2][i]}</td>
        </tr>`;
    }
    let newTableContent = `
    <table class="table table-striped table-hover">
        <tr>
        <th>#</th>
        <th>${headers[0]}</th>
        <th>${headers[1]}</th>
        <th>${headers[2]}(${dataset[3]})</th>
        </tr>
        ${dataSetTable}
    </table>`;
    document.getElementById(tableId).innerHTML = newTableContent;
}





//function for updating chart
function updateChart(title,chartLabels,Xdata,Ydata,unit){
    myChart.data.labels = Xdata; // Update labels
    myChart.data.datasets[0].data = Ydata;  // Update dataset values
    myChart.data.datasets[0].label= chartLabels[1]; // Update dataset label
    myChart.options.scales.x.title.text = chartLabels[0]; //naming x axis to easy understating
    myChart.options.scales.y.title.text = chartLabels[1]; //naming y axis to easy understating
    myChart.update(); // Refresh the chart to commit the new data
}


//function to fetching data from API and return a promise
function fetchData(fetchurl){
return fetch(fetchurl)
.then(response => {
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})

.catch(error => {
    console.error(error);
});
}


//function to generate date range part of fetching url
function getDateRange(userDay1,userDay2){
    let day1 = new Date();
    let day2 = new Date();
    if(userDay1==='today'&& Number.isInteger(userDay2)){
        day2.setDate(day1.getDate()-userDay2); 
    }else{
    
        console.log(`start_date=${userDay1}&end_date=${userDay2}`);
        return `start_date=${userDay1}&end_date=${userDay2}`;
    }

    function getFormattedDate(d,m,y){
        let formattedDate=`${y}-${m<10?'0':''}${m}-${d<10?'0':''}${d}`;
        console.log(formattedDate);
        return formattedDate;
    }
    const start_date = getFormattedDate(day1.getDate(),day1.getMonth()+1,day1.getFullYear());
    const end_date = getFormattedDate(day2.getDate(),day2.getMonth()+1,day2.getFullYear());
   

    return `start_date=${end_date}&end_date=${start_date}`;
}



//generate API endpoint url
function getURL(inputday1,inputday2,measurement){
    

     if (measurement === "temperature") {
        return fetchurlmaker("temperature_2m");
    } else if (measurement === "humidity") {
        return fetchurlmaker("relative_humidity_2m");
    } else if (measurement === "rain") {
        return fetchurlmaker("rain");
    } else if (measurement === "snow") {
        return fetchurlmaker("snowfall");
    } else if (measurement === "wind") {
        return fetchurlmaker("wind_speed_10m");
    } else {
        return fetchurlmaker("dew_point_2m");
    }


    function fetchurlmaker(measurementName){
        let url = `https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${mylocation[0]}&longitude=${mylocation[1]}&${getDateRange(inputday1,inputday2)}&hourly=${measurementName}`;
        console.log(url);
        return  url;
    }
}


//update subtitle text
function updateSubtitle(newText){
    document.getElementById("subTitle").innerText=newText;
}