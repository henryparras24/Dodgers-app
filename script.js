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
    getJt();
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
    logoEl.innerHTML = `<img src="https://i.ibb.co/ss1Z6H1/dodgers-world-series-video.jpg" width="100%">`;
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

    var mookiePic = document.createElement('div');
    mookiePic.innerHTML = `<img src="https://i.ibb.co/tZfbSkS/mookie-betts-6.png" width="100%">`;
    mookieBody.appendChild(mookiePic);

    var mookieName = document.createElement('div');
    mookieName.innerHTML = `Mookie Betts`;
    mookieBody.appendChild(mookieName);

    var mookieAvg = document.createElement('div');
    mookieAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    mookieBody.appendChild(mookieAvg);

    var mookieOps = document.createElement('div');
    mookieOps.innerHTML = `OPS: ${data.proj_pecota_batting.queryResults.row.ops}`;
    mookieBody.appendChild(mookieOps);

    var mookieHr = document.createElement('div');
    mookieHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    mookieBody.appendChild(mookieHr);

    var mookieRbi = document.createElement('div');
    mookieRbi.innerHTML = `RBI: ${data.proj_pecota_batting.queryResults.row.rbi}`;
    mookieBody.appendChild(mookieRbi);

    var mookieR = document.createElement('div');
    mookieR.innerHTML = `R: ${data.proj_pecota_batting.queryResults.row.r}`;
    mookieBody.appendChild(mookieR);
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

    var ctPic = document.createElement('div');
    ctPic.innerHTML = `<img src="https://i.ibb.co/nLtWrJr/ctslide.jpg" width="100%">`;
    ctBody.appendChild(ctPic);

    var ctName = document.createElement('div');
    ctName.innerHTML = `Chris Taylor`;
    ctBody.appendChild(ctName);

    var ctAvg = document.createElement('div');
    ctAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    ctBody.appendChild(ctAvg);

    var ctOps = document.createElement('div');
    ctOps.innerHTML = `OPS: ${data.proj_pecota_batting.queryResults.row.ops}`;
    ctBody.appendChild(ctOps);

    var ctHr = document.createElement('div');
    ctHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    ctBody.appendChild(ctHr);

    var ctRbi = document.createElement('div');
    ctRbi.innerHTML = `RBI: ${data.proj_pecota_batting.queryResults.row.rbi}`;
    ctBody.appendChild(ctRbi);

    var ctR = document.createElement('div');
    ctR.innerHTML = `R: ${data.proj_pecota_batting.queryResults.row.r}`;
    ctBody.appendChild(ctR);
}

function getJt(){
    fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?player_id='457759'&league_list_id='mlb'&season='2021'", {
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
    displayJt(data);
})
.catch(err => {
	console.error(err);
});


}

function displayJt(data){
    var jtEl = document.querySelector("#jt");
    
    var jtBody = document.createElement('div');
    jtBody.classList.add('card');
    jtBody.classList.add('bg-primary');
    jtBody.classList.add('text-white');
    jtEl.append(jtBody);

    var jtPic = document.createElement('div');
    jtPic.innerHTML = `<img src="https://i.ibb.co/8Xs7XB7/justinturnerarticlepic.jpg" width="100%">`;
    jtBody.appendChild(jtPic);

    var jtName = document.createElement('div');
    jtName.innerHTML = `Justin Turner`;
    jtBody.appendChild(jtName);

    var jtAvg = document.createElement('div');
    jtAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    jtBody.appendChild(jtAvg);

    var jtOps = document.createElement('div');
    jtOps.innerHTML = `OPS: ${data.proj_pecota_batting.queryResults.row.ops}`;
    jtBody.appendChild(jtOps);

    var jtHr = document.createElement('div');
    jtHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    jtBody.appendChild(jtHr);

    var jtRbi = document.createElement('div');
    jtRbi.innerHTML = `RBI: ${data.proj_pecota_batting.queryResults.row.rbi}`;
    jtBody.appendChild(jtRbi);

    var jtR = document.createElement('div');
    jtR.innerHTML = `R: ${data.proj_pecota_batting.queryResults.row.r}`;
    jtBody.appendChild(jtR);
}