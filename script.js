var winsLosesEl = document.querySelector("#winsLoses");
var playerStatsEl = document.querySelector("#playerStats");
var teamScheduleEl = document.querySelector("#teamSchedule");
var momento = moment().format();
var record = document.querySelector(".record");
var jtStats = document.querySelector(".jtStats");
var treaStats = document.querySelector(".treaStats");
var pollockStats = document.querySelector(".pollockStats");
var maxStats = document.querySelector(".maxStats");
var ferrisStats = document.querySelector(".ferrisStats");
var schedule = document.querySelector(".schedule");

winsLosesEl.addEventListener('click', getWinsLoses);
playerStatsEl.addEventListener('click', getPlayerStats);
teamScheduleEl.addEventListener('click', getSchedule);

function getPlayerStats() {
    record.innerHTML = "";
    schedule.innerHTML = "";

    getTrea();
    getPollock();
    getJt();
    getMax();
    getFerris();
}

function getWinsLoses() {
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
            console.log(data.response.games.wins.home.total)
            console.log(data.response.games.loses.home.total)
            console.log(data.response.games.wins.away.total)
            console.log(data.response.games.loses.away.total)
            jtStats.innerHTML = "";
            treaStats.innerHTML = "";
            pollockStats.innerHTML = "";
            maxStats.innerHTML = "";
            ferrisStats.innerHTML = "";
            schedule.innerHTML = "";
            displayRecord(data);


        })
        .catch(err => {
            console.error(err);
        });


}

function displayRecord(data) {
    var recordEl = document.querySelector("#record");

    var recordBody = document.createElement('div');
    recordBody.classList.add('card');
    recordBody.classList.add('bg-primary');
    recordBody.classList.add('text-white');
    recordEl.append(recordBody);

    var wins = document.createElement('div');
    wins.innerHTML = `Wins: ${data.response.games.wins.all.total}`;
    recordBody.appendChild(wins);

    var loses = document.createElement('div');
    loses.innerHTML = `Loses: ${data.response.games.loses.all.total}`;
    recordBody.appendChild(loses);

    var homeSplits = document.createElement('div');
    homeSplits.innerHTML = `@ Home Splits`;
    recordBody.appendChild(homeSplits);

    var homeWins = document.createElement('div');
    homeWins.innerHTML = `Wins: ${data.response.games.wins.home.total}`;
    recordBody.appendChild(homeWins);

    var homeLoses = document.createElement('div');
    homeLoses.innerHTML = `Loses: ${data.response.games.loses.home.total}`;
    recordBody.appendChild(homeLoses);

    var awaySplits = document.createElement('div');
    awaySplits.innerHTML = `@ Away Splits`;
    recordBody.appendChild(awaySplits);

    var awayWins = document.createElement('div');
    awayWins.innerHTML = `Wins: ${data.response.games.wins.away.total}`;
    recordBody.appendChild(awayWins);

    var awayLoses = document.createElement('div');
    awayLoses.innerHTML = `Wins: ${data.response.games.loses.away.total}`;
    recordBody.appendChild(awayLoses);
}


function getTrea() {
    fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?player_id='607208'&league_list_id='mlb'&season='2021'", {
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
            displayTrea(data);
        })
        .catch(err => {
            console.error(err);
        });


}

function displayTrea(data) {
    var treaEl = document.querySelector("#trea");

    var treaBody = document.createElement('div');
    treaBody.classList.add('card');
    treaBody.classList.add('bg-primary');
    treaBody.classList.add('text-white');
    treaEl.append(treaBody);

    var heavyHit = document.createElement('div');
    heavyHit.innerHTML = `<h3>Top Performers ⚾️</h3>`;
    treaBody.appendChild(heavyHit);

    var treaPic = document.createElement('div');
    treaPic.innerHTML = `<img src="https://i.ibb.co/TmRwwsQ/LOS-ANGELES-CA-AUGUST-20-Trea-Turner-6-of-the-Los-Angeles-Dodgers-flies-around-third-base-on-his-way.jpg" height="200px" width="300px">`;
    treaBody.appendChild(treaPic);

    var treaName = document.createElement('div');
    treaName.innerHTML = `Trea Turner`;
    treaBody.appendChild(treaName);

    var treaAvg = document.createElement('div');
    treaAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    treaBody.appendChild(treaAvg);

    var treaOps = document.createElement('div');
    treaOps.innerHTML = `OPS: ${data.proj_pecota_batting.queryResults.row.ops}`;
    treaBody.appendChild(treaOps);

    var treaHr = document.createElement('div');
    treaHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    treaBody.appendChild(treaHr);

    var treaRbi = document.createElement('div');
    treaRbi.innerHTML = `RBI: ${data.proj_pecota_batting.queryResults.row.rbi}`;
    treaBody.appendChild(treaRbi);

    var treaR = document.createElement('div');
    treaR.innerHTML = `R: ${data.proj_pecota_batting.queryResults.row.r}`;
    treaBody.appendChild(treaR);
}


function getPollock() {
    fetch("https://mlb-data.p.rapidapi.com/json/named.proj_pecota_batting.bam?player_id='572041'&league_list_id='mlb'&season='2021'", {
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
            displayPollock(data);
        })
        .catch(err => {
            console.error(err);
        });


}

function displayPollock(data) {
    var pollockEl = document.querySelector("#pollock");

    var pollockBody = document.createElement('div');
    pollockBody.classList.add('card');
    pollockBody.classList.add('bg-primary');
    pollockBody.classList.add('text-white');
    pollockEl.append(pollockBody);

    var pollockPic = document.createElement('div');
    pollockPic.innerHTML = `<img src="https://i.ibb.co/jyvJ6nT/aj-pollock-home-run-robbery.jpg" height="200px" width="300px">`;
    pollockBody.appendChild(pollockPic);

    var pollockName = document.createElement('div');
    pollockName.innerHTML = `AJ Pollock`;
    pollockBody.appendChild(pollockName);

    var pollockAvg = document.createElement('div');
    pollockAvg.innerHTML = `Avg: ${data.proj_pecota_batting.queryResults.row.avg}`;
    pollockBody.appendChild(pollockAvg);

    var pollockOps = document.createElement('div');
    pollockOps.innerHTML = `OPS: ${data.proj_pecota_batting.queryResults.row.ops}`;
    pollockBody.appendChild(pollockOps);

    var pollockHr = document.createElement('div');
    pollockHr.innerHTML = `HR: ${data.proj_pecota_batting.queryResults.row.hr}`;
    pollockBody.appendChild(pollockHr);

    var pollockRbi = document.createElement('div');
    pollockRbi.innerHTML = `RBI: ${data.proj_pecota_batting.queryResults.row.rbi}`;
    pollockBody.appendChild(pollockRbi);

    var pollockR = document.createElement('div');
    pollockR.innerHTML = `R: ${data.proj_pecota_batting.queryResults.row.r}`;
    pollockBody.appendChild(pollockR);
}

function getJt() {
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

function displayJt(data) {
    var jtEl = document.querySelector("#jt");

    var jtBody = document.createElement('div');
    jtBody.classList.add('card');
    jtBody.classList.add('bg-primary');
    jtBody.classList.add('text-white');
    jtEl.append(jtBody);

    

    var jtPic = document.createElement('div');
    jtPic.innerHTML = `<img src="https://i.ibb.co/nmCPrs9/jttttt.jpg" height="200px" width="300px">`;
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

function getSchedule() {
    fetch("https://api-baseball.p.rapidapi.com/games?team=18&season=2021&league=1", {
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
            console.log(data.response);
            for (var i = 0; i < data.response.length; i++) {

                var games = data.response[i]
                
                console.log(games);
                console.log(games.date);
                console.log(games.teams.away.name);
                console.log(momento);
                if (games.date >= momento) {
                    var gamesDetails = {
                        gameDate: moment(games.date).format('dddd, MMMM Do YYYY, h:mm a'),
                        gameAway: games.teams.away.name,
                        gameAwayId: games.teams.away.id,
                        gameHome: games.teams.home.name,
                        gameHomeId: games.teams.home.id,
                    }
                    record.innerHTML = "";
                    jtStats.innerHTML = "";
                    treaStats.innerHTML = "";
                    pollockStats.innerHTML = "";
                    maxStats.innerHTML = "";
                    ferrisStats.innerHTML = "";
                    displaySchedule(gamesDetails);
                }



            }



        })
        .catch(err => {
            console.error(err);
        });
}

function displaySchedule(gamesDetails) {
    var scheduleEl = document.querySelector("#schedule");

    var scheduleBody = document.createElement('div');
    scheduleBody.classList.add('card');
    scheduleBody.classList.add('bg-primary');
    scheduleBody.classList.add('text-white');
    scheduleEl.append(scheduleBody);

    var gameDate = document.createElement('div');
    gameDate.innerHTML = `${gamesDetails.gameDate}`;
    scheduleBody.appendChild(gameDate);

    // var gameAway = document.createElement('div');
    // gameAway.innerHTML = `${gamesDetails.gameAway}`;
    // scheduleBody.appendChild(gameAway);

    var matchup = document.createElement('div');
    matchup.innerHTML = "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameAwayId + ".png' height=50px width=75px>" + `@` + "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameHomeId + ".png' height=50px width=75px>";
    scheduleBody.appendChild(matchup);

    // var at = document.createElement('div');
    // at.innerHTML = `@`;
    // scheduleBody.appendChild(at);

    // var gameHomeLogo = document.createElement('div');
    // gameHomeLogo.innerHTML = "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameHomeId + ".png' height=50px width=50px>";
    // scheduleBody.appendChild(gameHomeLogo);
}

function getMax() {
fetch("https://mlb-data.p.rapidapi.com/json/named.sport_pitching_tm.bam?season='2021'&player_id='453286'&league_list_id='mlb'&game_type='R'", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mlb-data.p.rapidapi.com",
		"x-rapidapi-key": "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051"
	}
})
    .then(response => {
        return response.json();
    }).then(data => {
	    console.log(data);
        console.log(data.sport_pitching_tm.queryResults.row[1].era);
        console.log(data.sport_pitching_tm.queryResults.row[1].whip);
        console.log(data.sport_pitching_tm.queryResults.row[1].avg);
        console.log(data.sport_pitching_tm.queryResults.row[1].k9);
        console.log(data.sport_pitching_tm.queryResults.row[1].bb9);
        console.log(data.sport_pitching_tm.queryResults.row[1].w);
        displayMax(data);
    })
    .catch(err => {
	    console.error(err);
    });
    }

function displayMax (data){
    var maxEl = document.querySelector("#max");

    var maxBody = document.createElement('div');
    maxBody.classList.add('card');
    maxBody.classList.add('bg-primary');
    maxBody.classList.add('text-white');
    maxEl.append(maxBody);

    var maxPic = document.createElement('div');
    maxPic.innerHTML = `<img src="https://i.ibb.co/Tq9NbHF/max.jpg" height="200px" width="300px">`;
    maxBody.appendChild(maxPic);

    var maxName = document.createElement('div');
    maxName.innerHTML = `Max Scherzer (Dodgers)`;
    maxBody.appendChild(maxName);

    var maxEra = document.createElement('div');
    maxEra.innerHTML = `ERA: ${data.sport_pitching_tm.queryResults.row[1].era}`;
    maxBody.appendChild(maxEra);

    var maxWhip = document.createElement('div');
    maxWhip.innerHTML = `WHIP: ${data.sport_pitching_tm.queryResults.row[1].whip}`;
    maxBody.appendChild(maxWhip);

    var maxAvg = document.createElement('div');
    maxAvg.innerHTML = `Opp AVG: ${data.sport_pitching_tm.queryResults.row[1].avg}`;
    maxBody.appendChild(maxAvg);

    var maxK9 = document.createElement('div');
    maxK9.innerHTML = `K/9: ${data.sport_pitching_tm.queryResults.row[1].k9}`;
    maxBody.appendChild(maxK9);

    var maxBb9 = document.createElement('div');
    maxBb9.innerHTML = `BB/9: ${data.sport_pitching_tm.queryResults.row[1].bb9}`;
    maxBody.appendChild(maxBb9);

    var maxW = document.createElement('div');
    maxW.innerHTML = `Wins: ${data.sport_pitching_tm.queryResults.row[1].w}`;
    maxBody.appendChild(maxW);
}

function getFerris() {
    fetch("https://mlb-data.p.rapidapi.com/json/named.sport_pitching_tm.bam?season='2021'&player_id='621111'&league_list_id='mlb'&game_type='R'", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mlb-data.p.rapidapi.com",
            "x-rapidapi-key": "05d6319646mshf929af62d4baa06p1ef8c0jsn0a043e282051"
        }
    })
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            console.log(data.sport_pitching_tm.queryResults.row.era);
            console.log(data.sport_pitching_tm.queryResults.row.whip);
            console.log(data.sport_pitching_tm.queryResults.row.avg);
            console.log(data.sport_pitching_tm.queryResults.row.k9);
            console.log(data.sport_pitching_tm.queryResults.row.bb9);
            console.log(data.sport_pitching_tm.queryResults.row.w);
            displayFerris(data);
        })
        .catch(err => {
            console.error(err);
        });
        }
    
    function displayFerris (data){
        var ferrisEl = document.querySelector("#ferris");
    
        var ferrisBody = document.createElement('div');
        ferrisBody.classList.add('card');
        ferrisBody.classList.add('bg-primary');
        ferrisBody.classList.add('text-white');
        ferrisEl.append(ferrisBody);
    
        var ferrisPic = document.createElement('div');
        ferrisPic.innerHTML = `<img src="https://i.ibb.co/fGtfvXg/walker-buehler-2019-nlds-12.jpg" height="200px" width="300px">`;
        ferrisBody.appendChild(ferrisPic);
    
        var ferrisName = document.createElement('div');
        ferrisName.innerHTML = `Walker Buehler`;
        ferrisBody.appendChild(ferrisName);
    
        var ferrisEra = document.createElement('div');
        ferrisEra.innerHTML = `ERA: ${data.sport_pitching_tm.queryResults.row.era}`;
        ferrisBody.appendChild(ferrisEra);
    
        var ferrisWhip = document.createElement('div');
        ferrisWhip.innerHTML = `WHIP: ${data.sport_pitching_tm.queryResults.row.whip}`;
        ferrisBody.appendChild(ferrisWhip);
    
        var ferrisAvg = document.createElement('div');
        ferrisAvg.innerHTML = `Opp AVG: ${data.sport_pitching_tm.queryResults.row.avg}`;
        ferrisBody.appendChild(ferrisAvg);
    
        var ferrisK9 = document.createElement('div');
        ferrisK9.innerHTML = `K/9: ${data.sport_pitching_tm.queryResults.row.k9}`;
        ferrisBody.appendChild(ferrisK9);
    
        var ferrisBb9 = document.createElement('div');
        ferrisBb9.innerHTML = `BB/9: ${data.sport_pitching_tm.queryResults.row.bb9}`;
        ferrisBody.appendChild(ferrisBb9);
    
        var ferrisW = document.createElement('div');
        ferrisW.innerHTML = `Wins: ${data.sport_pitching_tm.queryResults.row.w}`;
        ferrisBody.appendChild(ferrisW);
    }