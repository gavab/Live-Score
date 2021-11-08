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
var leaguesTable_WC=document.querySelector("#leaguesTable_WC");
var leaguesTable_EC=document.querySelector("#leaguesTable_EC");
var groupName_1=document.querySelector("#groupName1");
var groupName_2=document.querySelector("#groupName2");


function addTableTile_WC(data){

    //create tiles

	var leagueTile=document.createElement('div');
	leagueTile.classList.add("league-tile");

    //position

	var teamRank=document.createElement('p');
	teamRank.innerHTML=data['position'];

	//Team name

	var team=document.createElement('div');
	team.classList.add("team");

	var teamTileName=document.createElement('p');
    var teamTileLogo=document.createElement('img');

	teamTileName.innerHTML=data['team']['name'];
    teamTileLogo.src=data['team']['logo'];

    team.appendChild(teamTileName);
    team.appendChild(teamTileLogo);
	
    //stats
    var gamesNum=document.createElement('p');
	var winNum=document.createElement('p');
	var drawNum=document.createElement('p');
	var loseNum=document.createElement('p');

	gamesNum.innerHTML=data['games']['played'];
	winNum.innerHTML=data['games']['win']['total'];
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
	leagueTile.appendChild(loseNum);
	leagueTile.appendChild(score);
    leagueTile.appendChild(point);

	//attach

    //create the full table

	leaguesTable_WC.appendChild(leagueTile);

}

function addTableTile_EC(data){

    //create tiles

	var leagueTile=document.createElement('div');
	leagueTile.classList.add("league-tile");

    //position

	var teamRank=document.createElement('p');
	teamRank.innerHTML=data['position'];

	//Team name

	var team=document.createElement('div');
	team.classList.add("team");

	var teamTileName=document.createElement('p');
    var teamTileLogo=document.createElement('img');

	teamTileName.innerHTML=data['team']['name'];
    teamTileLogo.src=data['team']['logo'];

    team.appendChild(teamTileName);
    team.appendChild(teamTileLogo);
	
    //stats

    var gamesNum=document.createElement('p');
	var winNum=document.createElement('p');
	var drawNum=document.createElement('p');
	var loseNum=document.createElement('p');

	gamesNum.innerHTML=data['games']['played'];
	winNum.innerHTML=data['games']['win']['total'];
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
	leagueTile.appendChild(loseNum);
	leagueTile.appendChild(score);
    leagueTile.appendChild(point);


    //create the full table

	leaguesTable_EC.appendChild(leagueTile);

}


	

	fetch("https://v1.hockey.api-sports.io/standings?league=57&season=2021",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.hockey.api-sports.io",
		"x-rapidapi-key":MY_API_KEY
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'][0];
		
        var leagues=tablesList[0]['league']['name'];
		var season=tablesList[0]['league']['season'];
		var groupFirst=tablesList[16]['group'];
		var groupSecond=tablesList[1]['group'];



		leaguesName.innerHTML=leagues;
		year.innerHTML=season;
		
		
		groupName_1.innerHTML=groupSecond['name'];
		for(var i=0;i<16;i++){
            
			addTableTile_WC(tablesList[i]);
		}


		groupName_2.innerHTML=groupFirst['name'];
		for(var i=16;i<32;i++)
		{
			addTableTile_EC(tablesList[i]);
		}

	}))
	.catch(err=>{
		console.log(err);
	});


