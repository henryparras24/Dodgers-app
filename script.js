var key = "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051";

var buttonEl = document.querySelector("#submitButton");

buttonEl.addEventListener('click', getBaseball);

function getBaseball(event) {
    event.preventDefault();
    //var cityName = cityNameEl.value
    
    //console.log(cityName);

    getTeams();
}   
    
function getTeams(){
    fetch("https://api-baseball.p.rapidapi.com/teams/statistics?team=18&season=2017&league=1", {
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
    })
    .catch(err => {
        console.error(err);
    });
}