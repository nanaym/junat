// Nimi ja salasana rekisteröidään
var newName = document.getElementById('username');
var newPw = document.getElementById('pw');

// Tallentaa käyttäjätunnuksen ja salasanan
function store() {
    localStorage.setItem(newName.value, newPw.value);
    console.log(newName.value, newPw.value);
    alert(`Username ${newName.value} succesfully created. You can now log in.`)
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
        alert(`Welcome ${userName.value}!`);
        localStorage.setItem('currentUser', userName.value);
        activeUser()
        // currentUsername.innerHTML = `<p> Sisäänkirjautunut: ${currentUser}</p>`
    } else {
        alert('Wrong username and or password!');
    }
}
function activeUser() {
    let currentUser = localStorage.getItem('currentUser', userName.value);
currentUsername.innerHTML = `<p> Logged in: ${currentUser}</p>`
}
function logOut(){
    localStorage.removeItem('currentUser');
    document.getElementById("currentUsername").remove();
    alert('Succesfully logged out.')
};
function checkIfLogged(){
    let checkIfLog = localStorage.getItem('currentUser', userName.value);
    console.log(checkIfLog)
    if (checkIfLog == null){
        console.log('no user logged in');
    } else {
        activeUser();
    }
}