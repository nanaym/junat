
//document.getElementById("searchdepart").addEventListener("click",)

function myFunction(){
    fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI/TPE')
    .then(res => res.json())
    .then(data => {
        console.dir(data);
        let tempstring = "";
        for (let d of data) {
            tempstring += `<div>${d}</div>`;
        }
        trainSchedule.innerHTML=tempstring;
    }).catch((error)=>{
        console.error('Error:', error);
    })
}
