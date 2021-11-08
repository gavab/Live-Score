import { MY_API_KEY } from "./config.js";

var elapsedTime=document.querySelector("#elapsed");
var leaguesName=document.querySelector("#leagueName");
var leaguesLogo=document.querySelector("#leagueLogo");
var homeTeamLogo=document.querySelector("#homeLogo");
var homeTeamName=document.querySelector("#homeName");
var awayTeamLogo=document.querySelector("#awayLogo");
var awayTeamName=document.querySelector("#awayName");
var lastMatchGoals=document.querySelector("#goals");
var matchTable=document.querySelector("#matchTable");



function addMatchTile(data){

	var matchTile=document.createElement('div');
	matchTile.classList.add("match-tile");

	//Home team name and logo

	var homeTeam=document.createElement('div');
	homeTeam.classList.add("team");

	var homeTileLogo=document.createElement('img');
	var homeTileName=document.createElement('p');

	homeTileLogo.src=data['teams']['home']['logo'];
	homeTileName.innerHTML=data['teams']['home']['name'];

	//Away team name and logo

	var awayTeam=document.createElement('div');
	awayTeam.classList.add("team");

	var awayTileLogo=document.createElement('img');
	var awayTileName=document.createElement('p');

	awayTileLogo.src=data['teams']['away']['logo'];
	awayTileName.innerHTML=data['teams']['away']['name'];

	homeTeam.appendChild(homeTileLogo);
	homeTeam.appendChild(homeTileName);

	awayTeam.appendChild(awayTileLogo);
	awayTeam.appendChild(awayTileName);

	var score = document.createElement('p');
	score.innerHTML=data['scores']['home']+" : "+data['scores']['away'];


	var elapsedTileTime=document.createElement('p');
	elapsedTileTime.innerHTML=data['status']['long'];
	

	var leagues =document.createElement('div');
	leagues.classList.add("league")

	var leagueTileName=document.createElement('p');
	var leaguesTileLogo=document.createElement('img');

	leagueTileName.innerHTML=data['league']['name'];
	leaguesTileLogo.src=data['league']['logo'];


	

	leagues.appendChild(leagueTileName);
	leagues.appendChild(leaguesTileLogo);

	

	matchTile.appendChild(leagues);
	matchTile.appendChild(elapsedTileTime);
	matchTile.appendChild(homeTeam);
	matchTile.appendChild(score);
	matchTile.appendChild(awayTeam);


	matchTable.appendChild(matchTile);

}


	

	fetch("https://v1.hockey.api-sports.io/games?date=2021-11-07&timezone=Europe/budapest",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.hockey.api-sports.io",
		"x-rapidapi-key":MY_API_KEY
		}
	})
	.then(response=>response.json().then(data=>{

		var matchesList=data['response'];

		var league=matchesList[0]['league'];
		var fixture=matchesList[0]['fixture'];
		var goals=matchesList[0]['goals'];
		var teams=matchesList[0]['teams'];

		for(var i=0;i<matchesList.length;i++){
			addMatchTile(matchesList[i]);
		}

	}))
	.catch(err=>{
		console.log(err);
	});


