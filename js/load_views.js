// get last 20 temperature data
function getTemperature(limit20){
    nowReport = 'temperature';
    loadTemperature('today',6,'temperature',limit20);
    changeUiView();
    updateSubtitle('In Last 20 Hours');
 
}

// get last 20 humidity data
function getHumidity(limit20){
    nowReport = 'humidity';
   loadHumidity("today",6,"humidity",limit20);
   changeUiView();
   updateSubtitle('In Last 20 Hours');
}

// snowfall data in last 20 h
function getSnowfall(limit20){
    nowReport = 'snow';
    loadSnowFall('today',6,'snow',limit20);
    changeUiView();
    updateSubtitle('In Last 20 Hours');

}

// get last 20 wind speed data
function getWind(limit20){
    nowReport = 'wind';
    loadWind('today',6,'wind',limit20);
    changeUiView();
    updateSubtitle('In Last 20 Hours');
    
}

// get last 20 rainfall data
function getRain(limit20){
    nowReport = 'rain';
    loadRain('today',6,'rain',limit20);
    changeUiView();
    updateSubtitle('In Last 20 Hours');
}

function getAnalyticsView(){
    nowReport = 'temperature';
    loadTemperature('today',6,'temperature');
    changeAnalyticsUI();
 
}
//on load view setup
getAnalyticsView();
/*--------------------------------------------------------*/

//Temperature view load

function loadTemperature(date1,date2,measurement,limit20){
    fetchData(getURL(date1,date2,measurement))
    .then(temp_2m => {
     console.log(temp_2m);
     let unit = temp_2m.hourly_units.temperature_2m;
     let dateAndTime = dateTimeSplitter(temp_2m.hourly.time);
     let measurementValues = temp_2m.hourly.temperature_2m;
     console.count(measurementValues);
     if(limit20==true){
     updateTable(["Date","Time","Temperature"],[dateAndTime[0].slice(28,48),dateAndTime[1].slice(28,48),measurementValues,unit],"dataTable");
     updateChart("Temperature in Last 20 Hours",["Date:Time","Temperature"],temp_2m.hourly.time.slice(28,48),measurementValues.slice(28,48),unit);
     updateStat(measurementValues,unit);
     }else{
     updateTable(["Date","Time","Temperature"],[dateAndTime[0],dateAndTime[1],measurementValues,unit],"dataTable");
     updateChart("Temperature in Last 20 Hours",["Date:Time","Temperature"],temp_2m.hourly.time,measurementValues,unit);
     updateStat(measurementValues,unit);
    }
     document.getElementById("pageTitle").innerHTML = "Temperature";
     

 });
}

//Humidity view load

function loadHumidity(date1,date2,measurement,limit20){
     fetchData(getURL(date1,date2,measurement))
    .then(humid_2m => {
        console.log(humid_2m);
        let unit = humid_2m.hourly_units.relative_humidity_2m;
        let dateAndTime = dateTimeSplitter(humid_2m.hourly.time);
        let measurementValues = humid_2m.hourly.relative_humidity_2m;
        if(limit20==true){
        updateTable(["Date","Time","Humidity"],[dateAndTime[0].slice(28,48),dateAndTime[1].slice(28,48),measurementValues,unit],"dataTable");
        updateChart("Temperature in Last 20 Hours",["Date:Time","Humidity"],humid_2m.hourly.time.slice(28,48),measurementValues.slice(28,48),unit);
        updateStat(measurementValues,unit);
        }else{
        updateTable(["Date","Time","Humidity"],[dateAndTime[0],dateAndTime[1],measurementValues,unit],"dataTable");
        updateChart("Temperature in Last 20 Hours",["Date:Time","Humidity"],humid_2m.hourly.time,measurementValues,unit);
        updateStat(measurementValues,unit);
        }
        document.getElementById("pageTitle").innerHTML = "Humidity";
        
    });
}

// load snowfall view


function loadSnowFall(date1,date2,measurement,limit20){
    fetchData(getURL(date1,date2,measurement))
    .then(snow_2m => {
        console.log(snow_2m);
        let unit = snow_2m.hourly_units.snowfall;
        let dateAndTime = dateTimeSplitter(snow_2m.hourly.time);
        let measurementValues = snow_2m.hourly.snowfall;
        if(limit20==true){
        updateTable(["Date","Time","Snowfall"],[dateAndTime[0].slice(28,48),dateAndTime[1].slice(28,48),measurementValues,unit],"dataTable");
        updateChart("Snowfall in Last 20 Hours",["Date:Time","Snowfall"],snow_2m.hourly.time.slice(28,48),measurementValues,unit);
        updateStat(measurementValues,unit);
        }else{
        updateTable(["Date","Time","Snowfall"],[dateAndTime[0],dateAndTime[1],measurementValues,unit],"dataTable");
        updateChart("Snowfall in Last 20 Hours",["Date:Time","Snowfall"],snow_2m.hourly.time,measurementValues,unit);
        updateStat(measurementValues,unit);
        }
        document.getElementById("pageTitle").innerHTML = "Snowfall";
        
    });
}


// load wind speed data
function loadWind(date1,date2,measurement,limit20){
    fetchData(getURL(date1,date2,measurement))
    .then(windspeed_10m => {
        console.log(windspeed_10m);
        let unit = windspeed_10m.hourly_units.wind_speed_10m;
        let dateAndTime = dateTimeSplitter(windspeed_10m.hourly.time);
        let measurementValues = windspeed_10m.hourly.wind_speed_10m;
        if(limit20==true){
            updateTable(["Date","Time","Wind Speed"],[dateAndTime[0].slice(28,48),dateAndTime[1].slice(28,48),measurementValues,unit],"dataTable");
            updateChart("Wind Speed in Last 20 Hours",["Date:Time","Wind Speed"],windspeed_10m.hourly.time.slice(28,48),measurementValues.slice(28,48),unit);
            updateStat(measurementValues,unit);
        }else{
            updateTable(["Date","Time","Wind Speed"],[dateAndTime[0],dateAndTime[1],measurementValues,unit],"dataTable");
            updateChart("Wind Speed in Last 20 Hours",["Date:Time","Wind Speed"],windspeed_10m.hourly.time,measurementValues,unit);
            updateStat(measurementValues,unit);
        }
        
        document.getElementById("pageTitle").innerHTML = "Wind Speed";
        
    });
}




// load rain fall data

function loadRain(date1,date2,measurement,limit20){

    fetchData(getURL(date1,date2,measurement))
    .then(rain_2m => {
        console.log(rain_2m);
        let unit = rain_2m.hourly_units.rain;
        let dateAndTime = dateTimeSplitter(rain_2m.hourly.time);
        let measurementValues = rain_2m.hourly.rain;
        if(limit20==true){
        updateTable(["Date","Time","Rainfall"],[dateAndTime[0].slice(28,48),dateAndTime[1].slice(28,48),measurementValues,unit],"dataTable");
        updateChart("Snowfall in Last 20 Hours",["Date:Time","Rainfall"],rain_2m.hourly.time.slice(28,48),measurementValues.slice(28,48),unit);
        updateStat(measurementValues,unit);
        }else{
        updateTable(["Date","Time","Rainfall"],[dateAndTime[0],dateAndTime[1],measurementValues,unit],"dataTable");
        updateChart("Snowfall in Last 20 Hours",["Date:Time","Rainfall"],rain_2m.hourly.time,measurementValues,unit);
        updateStat(measurementValues,unit);
        }
        document.getElementById("pageTitle").innerHTML = "Rainfall";
        
    });
}


function loadAnalysisView(day1,day2,measurement){
    if(measurement=='temperature'){
        loadTemperature(day1,day2,measurement);
    }else if(measurement=='humidity'){
        loadHumidity(day1,day2,measurement);
    }else if(measurement=='rain'){
        loadRain(day1,day2,measurement);
    }else if(measurement=='snow'){
        loadSnowFall(day1,day2,measurement);
    }else if(measurement=='wind'){
        loadWind(day1,day2,measurement);
    }
}


function updateTimeFrameNow(measurement,daysback){
    if(measurement=='temperature'){
        loadTemperature('today',daysback,measurement);
    }else if(measurement=='humidity'){
        loadHumidity('today',daysback,measurement);
    }else if(measurement=='rain'){
        loadRain('today',daysback,measurement);
    }else if(measurement=='snow'){
        loadSnowFall('today',daysback,measurement);
    }else if(measurement=='wind'){
        loadWind('today',daysback,measurement);
    }
}

