// Nimi ja salasana rekisteröidään
var uName = document.getElementById('username');
var pw = document.getElementById('pw');

// Tallentaa käyttäjätunnuksen ja salasanan
function store() {
    localStorage.setItem(uName.value, pw.value);
    console.log(uName.value, pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // Tallennettu data rekiströnti-lomakkeesta
    let storedName = localStorage.getItem('username');
    let storedPw = localStorage.getItem('pw');
    let localData = (storedName, storedPw);

    // Syötetty login data
    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');
    let inputData = (userName, userPw);

    // check if stored data from register-form is equal to data from login form
    if (localData == inputData) {
        alert('Olet kirjautunut sisään!');
     } else {
        alert('Väärä käyttäjätunnus tai salasana!');
    }
}