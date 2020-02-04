var myData = document.getElementById(`https://rata.digitraffic.fi/api/v1/live-trains/station/${mistä}/${mihin}`);
fetch('data.json')
    .then(function (response) { return response.json(); })
    .then(function (json) {
        var name = json.name;
        var age = json.age;
        myData.innerHTML = name + ', aged ' + age;
    }); 

var baseurl="https://rata.digitraffic.fi/api/v1";
var loppuurl = "/live-trains/station/HKI/LH";
//  /live-trains/station/<departure_station_code>/<arrival_station_code>?departure_date=<departure_date>&from=<from>&to=<to>&limit=<limit>

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // Tehdään jotakin, pyyntö on valmis
            var tulos = JSON.parse(xhr.responseText);
            console.dir(tulos);
            for(var i = 0 ; i < tulos.length ; ++i) {
                var elem = document.createElement("li");
                var juna = tulos[i];
                var lahtoaika = new Date(juna.timeTableRows[0].scheduledTime).toLocaleTimeString("fi", {hour: '2-digit', minute:'2-digit', hour12: false});
                var saapumisaika = new Date(juna.timeTableRows[juna.timeTableRows.length-1].scheduledTime).toLocaleTimeString("fi", {hour: '2-digit', minute:'2-digit', hour12: false});
                elem.appendChild(document.createTextNode(juna.trainCategory + ": " + juna.trainType + juna.trainNumber + ", lähtee: " + lahtoaika + " saapuu: " + saapumisaika));
                lista.appendChild(elem);
            }
            document.getElementById("hae").innerText = "Hae data uudestaan painamalla nappulaa:";
            document.getElementById("btn").style.visibility = "visible";
        } else {
            alert("Pyyntö epäonnistui");
            document.getElementById("hae").innerText = "Hae data uudestaan painamalla nappulaa:";
            document.getElementById("btn").style.visibility = "visible";
        }
    }
    var optiot = {hour: '2-digit', minute:'2-digit', hour12: false};
};
var lista = document.getElementById("lista");
function haedata() {
    xhr.open('get', baseurl+loppuurl);
    xhr.send();
}
haedata();
