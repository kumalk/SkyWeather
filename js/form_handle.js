
        document.addEventListener('DOMContentLoaded', function() {
            const startDateInput = document.getElementById('start-date');
            const endDateInput = document.getElementById('end-date');
            const measurementVal = document.getElementById('weather-select');

           
            

            startDateInput.addEventListener('change', function() {
                const reportStartDate = startDateInput.value;
                console.log('Start date: ' + reportStartDate);
                // You can store the start date in a variable
                // let startDateString = startDate;
            });

            endDateInput.addEventListener('change', function() {
                const reportEndDate = endDateInput.value;
                console.log('End date: ' + reportEndDate);
                // You can store the end date in a variable
                // let endDateString = endDate;
            });

            measurementVal.addEventListener('change', function() {
                const reportMeasurement = measurementVal.value;
                console.log('Measurement name: ' + reportMeasurement);
                // You can store the end date in a variable
                // let endDateString = endDate;
            });
        });


        function updateviewNow(){
            const startDateInput = document.getElementById('start-date');
            const endDateInput = document.getElementById('end-date');
            const measurementVal = document.getElementById('weather-select');
            const reportStartDate = startDateInput.value;
            const reportEndDate = endDateInput.value;
            const reportMeasurement = measurementVal.value;
            const subtitleTxt = "From "+reportStartDate+" to "+reportEndDate;
            updateSubtitle(subtitleTxt);
            loadAnalysisView(reportStartDate, reportEndDate, reportMeasurement);
            
        }

        
        
        function changeUiView(){
            
                document.getElementById("dateRangeSelector").style.display = "none";
                document.getElementById("timeFrameChange").style.display = "block";
                document.getElementById("stat-container").style.display = "block";
            
        }
        function changeAnalyticsUI(){
                document.getElementById("dateRangeSelector").style.display = "block";
                document.getElementById("timeFrameChange").style.display = "none";
                document.getElementById("stat-container").style.display = "none";
        }