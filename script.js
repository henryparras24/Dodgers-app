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
    getMookie();
    getCt();
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


function getMookie(){
    fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?player_id='605141'&league_list_id='mlb'&season='2021'", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051",
		"x-rapidapi-host": "mlb-data.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
}).then(data => {
    console.log(data);
    displayMookie(data);
})
.catch(err => {
	console.error(err);
});


}

function displayMookie(data){
    var mookieEl = document.querySelector("#mookie");
    
    var mookieBody = document.createElement('div');
    mookieBody.classList.add('card');
    mookieBody.classList.add('bg-primary');
    mookieBody.classList.add('text-white');
    mookieEl.append(mookieBody);

    var mookieName = document.createElement('div');
    mookieName.innerHTML = `Mookie Betts`;
    mookieBody.appendChild(mookieName);

    var mookieAvg = document.createElement('div');
    mookieAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    mookieBody.appendChild(mookieAvg);

    var mookieHr = document.createElement('div');
    mookieHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    mookieBody.appendChild(mookieHr);
}


function getCt(){
    fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?player_id='621035'&league_list_id='mlb'&season='2021'", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051",
		"x-rapidapi-host": "mlb-data.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
}).then(data => {
    console.log(data);
    console.log(data.proj_pecota_batting.queryResults.row.avg)
    console.log(data.proj_pecota_batting.queryResults.row.ops)
    console.log(data.proj_pecota_batting.queryResults.row.hr)
    console.log(data.proj_pecota_batting.queryResults.row.rbi)
    console.log(data.proj_pecota_batting.queryResults.row.r)
    console.log(data.proj_pecota_batting.queryResults.row.bb)
    displayCt(data);
})
.catch(err => {
	console.error(err);
});


}

function displayCt(data){
    var ctEl = document.querySelector("#ct");
    
    var ctBody = document.createElement('div');
    ctBody.classList.add('card');
    ctBody.classList.add('bg-primary');
    ctBody.classList.add('text-white');
    ctEl.append(ctBody);

    var ctName = document.createElement('div');
    ctName.innerHTML = `Chris Taylor`;
    ctBody.appendChild(ctName);

    var ctAvg = document.createElement('div');
    ctAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    ctBody.appendChild(ctAvg);

    var ctHr = document.createElement('div');
    ctHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    ctBody.appendChild(ctHr);
}