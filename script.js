var winsLosesEl = document.querySelector("#winsLoses");
var playerStatsEl = document.querySelector("#playerStats");
var teamScheduleEl = document.querySelector("#teamSchedule");
var momento = moment().format();
var record = document.querySelector(".record");
var jtStats = document.querySelector(".jtStats");
var mookieStats = document.querySelector(".mookieStats");
var ctStats = document.querySelector(".ctStats");
var schedule = document.querySelector(".schedule");

winsLosesEl.addEventListener('click', getWinsLoses);
playerStatsEl.addEventListener('click', getPlayerStats);
teamScheduleEl.addEventListener('click', getSchedule);

function getPlayerStats() {
    record.innerHTML = "";
    schedule.innerHTML = "";

    getMookie();
    getCt();
    getJt();
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
            jtStats.innerHTML = "";
            mookieStats.innerHTML = "";
            ctStats.innerHTML = "";
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



}


function getMookie() {
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

function displayMookie(data) {
    var mookieEl = document.querySelector("#mookie");

    var mookieBody = document.createElement('div');
    mookieBody.classList.add('card');
    mookieBody.classList.add('bg-primary');
    mookieBody.classList.add('text-white');
    mookieEl.append(mookieBody);

    var mookiePic = document.createElement('div');
    mookiePic.innerHTML = `<img src="https://i.ibb.co/tZfbSkS/mookie-betts-6.png" height="200px" width="300px">`;
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


function getCt() {
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

function displayCt(data) {
    var ctEl = document.querySelector("#ct");

    var ctBody = document.createElement('div');
    ctBody.classList.add('card');
    ctBody.classList.add('bg-primary');
    ctBody.classList.add('text-white');
    ctEl.append(ctBody);

    var ctPic = document.createElement('div');
    ctPic.innerHTML = `<img src="https://i.ibb.co/7GcXVhp/ct3.jpg" height="200px" width="300px">`;
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

    var heavyHit = document.createElement('div');
    heavyHit.innerHTML = `<h3>Hot Hitters 🔥</h3>`;
    jtBody.appendChild(heavyHit);

    var jtPic = document.createElement('div');
    jtPic.innerHTML = `<img src="https://i.ibb.co/8Xs7XB7/justinturnerarticlepic.jpg" height="200px" width="300px">`;
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
                    mookieStats.innerHTML = "";
                    ctStats.innerHTML = "";
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
    matchup.innerHTML = "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameAwayId + ".png' height=50px width=50px>" + `@`+ "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameHomeId + ".png' height=50px width=50px>";
   
    scheduleBody.appendChild(matchup);

    // var gameHome = document.createElement('div');
    // gameHome.innerHTML = `@ ${gamesDetails.gameHome}`;
    // scheduleBody.appendChild(gameHome);

    // var gameHomeLogo = document.createElement('div');
    // gameHomeLogo.innerHTML = "<img src='https://media.api-sports.io/baseball/teams/"+ gamesDetails.gameHomeId + ".png' height=50px width=50px>";
    // scheduleBody.appendChild(gameHomeLogo);
}

