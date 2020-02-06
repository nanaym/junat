// Nimi ja salasana rekisteröidään
var newName = document.getElementById('username');
var newPw = document.getElementById('pw');

// Tallentaa käyttäjätunnuksen ja salasanan
function store() {
    localStorage.setItem(newName.value, newPw.value);
    console.log(newName.value, newPw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    var newName = document.getElementById('userName');
    var newPw = document.getElementById('userPw');
    console.log(newName.value + " ! " + newPw.value)

    // Tallennettu data rekiströnti-lomakkeesta
    let storedPw = localStorage.getItem(newName.value);
    let localData = (newName.value + storedPw);

    // Syötetty login data
    let userName = document.getElementById('userName');
    let inputData = (userName.value + newPw.value);
    console.log(localData + " :) " + inputData);

    // tarkistaa matchaako rekisteröinti ja kirjautuminen
    if (localData == inputData) {
        alert(`Tervetuloa ${userName.value}!`);
        localStorage.setItem('currentUser', userName.value);
        // currentUsername.innerHTML = `<p> Sisäänkirjautunut: ${currentUser}</p>`
    } else {
        alert('Väärä käyttäjätunnus tai salasana!');
    }
}