
var leagueName=document.querySelector("#league");
var leaguesName=document.querySelector("#leagueName");
var TeamLogo=document.querySelector("#teamLogo");
var TeamName=document.querySelector("#teamName");
var lottGoals=document.querySelector("#lottGolok");
var kapottGoals=document.querySelector("#kapottGolok");
var leaguesTable=document.querySelector("#leaguesTable");



function addTableTile(data){

	var leagueTile=document.createElement('div');
	leagueTile.classList.add("league-tile");

	var teamRank=document.createElement('p');
	teamRank.innerHTML=data['league']['standings']['rank'];

	//Team name and logo

	var team=document.createElement('div');
	team.classList.add("team");

	var teamTileLogo=document.createElement('img');
	var teamTileName=document.createElement('p');

	teamTileLogo.src=data['league']['standings']['team']['logo'];
	teamTileName.innerHTML=data['league']['standings']['team']['name'];

	team.appendChild(teamTileLogo);
	team.appendChild(teamTileName);

	var score = document.createElement('p');
	score.innerHTML=data['league']['standings']['all']['goals']['for']+" - "+data['league']['standings']['all']['goals']['against'];
	
	
	
	matchTile.appendChild(teamRank);
	matchTile.appendChild(team);
	matchTile.appendChild(score);

	leaguesTable.appendChild(matchTile);

}


	

	fetch("https://v3.football.api-sports.io/standings?league=39&season=2021",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v3.football.api-sports.io",
		"x-rapidapi-key":""
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'];

		var league=tablesList[0]['league'];
		var season=tablesList[0]['league']['season'];
		var rank=matchesList[0]['league']['standings']['rank'];
		var goals=matchesList[0]['league']['standings']['all']['goals'];
		var team=matchesList[0]['league']['standings']['team'];

		for(var i=0;i<tablesList.length;i++){
			addTableTile(tablesList[i]);
		}

	}))
	.catch(err=>{
		console.log(err);
	});


