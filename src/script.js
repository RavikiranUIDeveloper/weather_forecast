        // Function to create tables dynamically
        function createTables() {
            var table_area = document.getElementById('table-area');

            for (var i = 1; i <= 5; i++) {
                
                var table = document.createElement('table');
                table.className = "table table-bordered"
             
                var headerRow = document.createElement('tr');
                headerRow.className = "date"
                var headerCell = document.createElement('th');
                headerCell.setAttribute('colspan', '2');
                headerCell.textContent = 'Date:';
                headerRow.appendChild(headerCell);
                table.appendChild(headerRow);
                var headerRow2 = document.createElement('tr');
                var headerCell2 = document.createElement('th');
                headerCell2.setAttribute('colspan', '2');
                headerCell2.textContent = 'Temperature';
                headerCell2.className = "grey-bg"
                headerRow2.appendChild(headerCell2);
                table.appendChild(headerRow2);

                
                for (var j = 1; j <= 1; j++) {
                    var dataRow = document.createElement('tr');

                    var cell1 = document.createElement('td');
                    cell1.textContent = 'Min';
                    cell1.className = "grey-bg"
                    dataRow.appendChild(cell1);

                    var cell2 = document.createElement('td');
                    cell2.textContent = 'Max';
                    cell2.className = "grey-bg"
                    dataRow.appendChild(cell2);

                    table.appendChild(dataRow);

                    var dataRow2 = document.createElement('tr');
                    var cell1 = document.createElement('td');
                    cell1.textContent = '--';
                    cell1.className = "grey-bg"
                    cell1.id = "maxTemp"
                    dataRow2.appendChild(cell1);

                    var cell2 = document.createElement('td');
                    cell2.textContent = '----';
                    cell2.className = "grey-bg"
                    cell2.id = "minTemp"
                    dataRow2.appendChild(cell2);

                    table.appendChild(dataRow2);

                    var dataRow3 = document.createElement('tr');
                    var cell1 = document.createElement('td');
                    cell1.textContent = 'Pressure';
                    dataRow3.appendChild(cell1);

                    var cell2 = document.createElement('td');
                    cell2.textContent = '----';
                    cell2.id = "pressure"
                    dataRow3.appendChild(cell2);

                    table.appendChild(dataRow3);

                    var dataRow4 = document.createElement('tr');
                    var cell1 = document.createElement('td');
                    cell1.textContent = 'Humidity';
                    dataRow4.appendChild(cell1);

                    var cell2 = document.createElement('td');
                    cell2.textContent = '----';
                    cell2.id = "humidity"
                    dataRow4.appendChild(cell2);

                    table.appendChild(dataRow4);
                }

                
                table_area.appendChild(table);
            }
        }

       
        



var inputVal = document.getElementById('inputValue');
var submitBtn = document.getElementById('submitButton');
var maxTemp = document.getElementById('maxTemp');
var minTemp = document.getElementById('minTemp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');


const apiKey = "1635890035cbba097fd5c26c8ea672a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

submitBtn.addEventListener('click', ()=> {
    checkWeather(inputVal);
})
