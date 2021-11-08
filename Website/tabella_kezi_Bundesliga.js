import { MY_API_KEY } from "./config.js";

var leaguesName=document.querySelector("#leagueName");
var year=document.querySelector("#seasonYear");
var ranknumber=document.querySelector("#rankNumber");
var TeamLogo=document.querySelector("#teamLogo");
var TeamName=document.querySelector("#teamName");
var playedNum=document.querySelector("#playedNumber");
var winNum=document.querySelector("#winNumber");
var drawNum=document.querySelector("#drawNumber");
var loseNum=document.querySelector("#lossNumber");
var lottGoals=document.querySelector("#lottGolok");
var kapottGoals=document.querySelector("#kapottGolok");
var leaguesTable=document.querySelector("#leaguesTable");



function addTableTile(data){

	var leagueTile=document.createElement('div');
	leagueTile.classList.add("league-tile");

	//position
	var teamRank=document.createElement('p');
	teamRank.innerHTML=data['position'];

	//Team name and logo

	var team=document.createElement('div');
	team.classList.add("team");

	var teamTileLogo=document.createElement('img');
	var teamTileName=document.createElement('p');

	teamTileLogo.src=data['team']['logo'];
	teamTileName.innerHTML=data['team']['name'];

	team.appendChild(teamTileLogo);
	team.appendChild(teamTileName);

	//Played matches, win,draw,lose number

	var gamesNum=document.createElement('p');
	var winNum=document.createElement('p');
	var drawNum=document.createElement('p');
	var loseNum=document.createElement('p');

	gamesNum.innerHTML=data['games']['played'];
	winNum.innerHTML=data['games']['win']['total'];
	drawNum.innerHTML=data['games']['draw']['total'];
	loseNum.innerHTML=data['games']['lose']['total'];

	//goal difference
	var score = document.createElement('p');
	score.innerHTML=data['goals']['for']+" - "+data['goals']['against'];

    //Points
	var point=document.createElement('p');
	point.innerHTML=data['points'];
	
	//attach
	
	leagueTile.appendChild(teamRank);
	leagueTile.appendChild(team);
	leagueTile.appendChild(gamesNum);
	leagueTile.appendChild(winNum);
	leagueTile.appendChild(drawNum);
	leagueTile.appendChild(loseNum);
	leagueTile.appendChild(score);
    leagueTile.appendChild(point);

	//create
	leaguesTable.appendChild(leagueTile);

}


	

	fetch("https://v1.handball.api-sports.io/standings?league=39&season=2021",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.handball.api-sports.io",
		"x-rapidapi-key":MY_API_KEY
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'][0];
		
        var leagues=tablesList[0]['league']['name'];
		var season=tablesList[0]['league']['season'];
		


		leaguesName.innerHTML=leagues;
		year.innerHTML=season;
		
		
		for(var i=0;i<tablesList.length;i++){
			addTableTile(tablesList[i]);
		}

	}))
	.catch(err=>{
		console.log(err);
	});


