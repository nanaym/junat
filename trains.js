


function cStation() {
    fetch(`https://rata.digitraffic.fi/api/v1/metadata/stations`)
        .then(res => res.json())
        .then(data => {
            let tempstring = "";
            for (let d of data) {
                if (d.passengerTraffic == true) {
                    tempstring += `<option value="${d.stationShortCode}">${d.stationName}`;
                }
            }
            chooseStation.innerHTML = tempstring;
        }).catch((error) => {
            console.error('Error:', error);
        })
}

var options = { hour: '2-digit', minute: '2-digit', hour12: false };

function myFunction() {
    var departure = document.getElementById('searchdepart').value;
    var arrival = document.getElementById('searcharrive').value;
    fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/${departure}/${arrival}`)
        .then(res => res.json())
        .then(data => {
            let tempstring = "";
            // Allaoleva käy läpi vastaanotettua dataa ja suodattaa halutut tiedot (junatyyppi, raide, lähtö- ja saapumisaika)
            for (let d of data) {

                let tdeparttime = getDepartureTime(d.timeTableRows, departure);
                let tDepart = new Date(tdeparttime);
                let departTime = tDepart.toLocaleTimeString("fi", options);

               // let saapuminen = d.timeTableRows.stationShortCode.indexOf(`'${arrival}'`);
                //console.log(saapuminen);
                let tArriveTime=getArrivingTime(d.timeTableRows, arrival);
                // let tArrive = new Date(d.timeTableRows[d.timeTableRows.length - 1].scheduledTime);
                let tArrive = new Date(tArriveTime);
                let arriveTime = tArrive.toLocaleTimeString("fi", options);
                let train;
                if (d.commuterLineID.length > 0) {
                    train = d.commuterLineID
                } else {
                    train = d.trainType + d.trainNumber
                };
                tempstring += `<p id="a">Juna ${train}</p> <p id="b">Raide ${departureStation.commercialTrack}</p> 
                <p id="c">Lähtö: ${departTime}</p> <p id="d"> Saapuminen: ${arriveTime}</p> 
                <p id="e"> Matka-aika: ${arriveTime-departTime}</p>`;
            }
            trainSchedule.innerHTML = tempstring;
        }).catch((error) => {
            console.error('Error:', error);
        })
}
function getArrivingTime(timeTableRows, stationShortCode){
    console.dir(arguments);
    destinationStation=timeTableRows.find(tr=>tr.stationShortCode==stationShortCode)
    console.dir(destinationStation);
    return destinationStation.scheduledTime;
}
function getDepartureTime(timeTableRows, stationShortCode){
    console.dir(arguments);
    departureStation=timeTableRows.find(tr=>tr.stationShortCode==stationShortCode)
    console.dir(departureStation);
    return departureStation.scheduledTime;
}
