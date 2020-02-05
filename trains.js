


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
var optiot = {hour: '2-digit', minute:'2-digit', hour12: false};

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
                let t = new Date(d.timeTableRows[0].scheduledTime);
                            let lahtoaika = t.toLocaleTimeString("fi", optiot);
                            let tPerilla = new Date(d.timeTableRows[d.timeTableRows.length -1].scheduledTime);
                            let saapumisaika= tPerilla.toLocaleTimeString("fi",optiot);
                let juna;
                if (d.commuterLineID.length > 0) {
                juna = d.commuterLineID
                } else {
                    juna = d.trainType + d.trainNumber
                };
                tempstring += `<p id="a">Juna ${juna}</p> <p id="b">Raide ${d.timeTableRows[0].commercialTrack}</p> <p id="c">Lähtö: ${lahtoaika}</p> <p id="d"> Saapuminen: ${saapumisaika}</p>`;
                console.dir(d);
            }
            trainSchedule.innerHTML = tempstring;
        }).catch((error) => {
            console.error('Error:', error);
        })
}