import { MY_API_KEY } from "./config.js";

var leagueName=document.querySelector("#leagueName");
var seasonYear=document.querySelector("#seasonYear");
var TeamName=document.querySelector("#teamName");
var leaguesTable=document.querySelector("#leaguesTable");
var groupName=document.querySelector("#groupName1")


function addTableTile(data){

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
    var lossNum=document.createElement('p');
    var pNum=document.createElement('p');
    
    gamesNum.innerHTML=data['games']['played'];
    winNum.innerHTML=data['games']['win']['total'];
    lossNum.innerHTML=data['games']['lose']['total'];
    pNum.innerHTML=data['games']['win']['percentage'];

   



	//attach

	leagueTile.appendChild(teamRank);
	leagueTile.appendChild(team);
	leagueTile.appendChild(gamesNum);
    leagueTile.appendChild(winNum);
    leagueTile.appendChild(lossNum);
    leagueTile.appendChild(pNum);
	

    //create the full table

	leaguesTable.appendChild(leagueTile);

}


	

	fetch("https://v1.basketball.api-sports.io/standings?league=46&season=2021-2022",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.basketball.api-sports.io",
		"x-rapidapi-key":MY_API_KEY
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'][0];

		var stage=tablesList[0]['stage'];
		var seasonY=tablesList[0]['league']['season'];
		var rank=tablesList[0]['position'];
		var team=tablesList[0]['team'];
		var groupFirst=tablesList[0]['group'];
		

        leagueName.innerHTML=stage;
        seasonYear.innerHTML=seasonY;


		groupName.innerHTML=groupFirst['name'];
		for(var i=0;i<tablesList.length;i++){
            
			addTableTile(tablesList[i]);
		}


	}))
	.catch(err=>{
		console.log(err);
	});


