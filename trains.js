function cStation(){
    fetch(`https://rata.digitraffic.fi/api/v1/metadata/stations`)
    .then(res => res.json())
    .then(data => {
        console.dir(data);
        let tempstring = "";
        for (let d of data) {
            if (d.passengerTraffic == true){
            tempstring += `<option value="${d.stationName}">${d.stationShortCode}`;
            console.dir(d);
        }}
        chooseStation.innerHTML=tempstring;
    }).catch((error)=>{
        console.error('Error:', error);
    })
}

function myFunction(){
    fetch(`https://rata.digitraffic.fi/api/v1/live-trains/station/HKI/TPE`)
    .then(res => res.json())
    .then(data => {
        console.dir(data);
        let tempstring = "";
        for (let d of data) {
            tempstring += `<div>${d.trainNumber}</div>`;
            console.dir(d);
        }
        trainSchedule.innerHTML=tempstring;
    }).catch((error)=>{
        console.error('Error:', error);
    })
}