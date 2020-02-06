
function cStation() {
    fetch(`https://rata.digitraffic.fi/api/v1/metadata/stations`)
        .then(res => res.json())
        .then(data => {
            console.dir(data);
            let tempstring = "";
            for (let d of data) {
                if (d.passengerTraffic == true) {
                    tempstring += `<option value="${d.stationShortCode}">${d.stationName}`;
                    console.dir(d);
                }
            }
            chooseStation.innerHTML = tempstring;
        }).catch((error) => {
            console.error('Error:', error);
        })
}
//document.getElementById("searchdepart").addEventListener("click",)
function myFunction() {
    var departure = document.getElementById('searchdepart').value;
    var arrival = document.getElementById('searcharrive').value;
    console.log(departure, arrival);
    fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${departure}/${arrival}`)
        .then(res => res.json())
        .then(data => {
            console.dir(data);
            let tempstring = "";
            for (let d of data) {
                tempstring += `<div>${d.trainNumber}</div>`;
                console.dir(d);
            }
            trainSchedule.innerHTML = tempstring;
        }).catch((error) => {
            console.error('Error:', error);
        })
}