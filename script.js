var key = "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051";

var buttonEl = document.querySelector("#submitButton");
var logoEl = document.querySelector("#logo");
var winsEl = document.querySelector("#wins");
var losesEl = document.querySelector("#loses");

buttonEl.addEventListener('click', getBaseball);

function getBaseball(event) {
    event.preventDefault();
    //var cityName = cityNameEl.value
    
    //console.log(cityName);

    getTeams();
    
}   
    
function getTeams(){
    fetch("https://api-baseball.p.rapidapi.com/teams/statistics?team=18&season=2021&league=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051",
            "x-rapidapi-host": "api-baseball.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        console.log(data.response.team.logo)
        console.log(data.response.games.wins.all.total)
        console.log(data.response.games.loses.all.total)
        displayDodgers(data);
    })
    .catch(err => {
        console.error(err);
    });

    
}

function displayDodgers(data) {
                    
    winsEl.innerHTML = `Wins: ${data.response.games.wins.all.total}`;
    losesEl.innerHTML = `Loses: ${data.response.games.loses.all.total}`;
    logoEl.innerHTML = "<img src='https://media.api-sports.io/baseball/teams/18.png'>";
    // momentoEl.innerHTML =  `${momento}`;
    // chosenCityEl.innerHTML = `${city}`;

   
}