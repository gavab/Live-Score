import { MY_API_KEY } from "./config.js";

var leagueName=document.querySelector("#leagueName");
var TeamName=document.querySelector("#teamName");
var rankNum=document.querySelector("#rankNumber");
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

    var stats=document.createElement('div');
    stats.classList.add("stats");

    var gamesNum=document.createElement('p');
    var winNum=document.createElement('p');
    var lossNum=document.createElement('p');
    var pNum=document.createElement('p');
    
    gamesNum.innerHTML=data['games']['played'];
    winNum.innerHTML=data['games']['win']['total'];
    lossNum.innerHTML=data['games']['lose']['total'];
    pNum.innerHTML=data['games']['win']['percentage'];

    stats.appendChild(gamesNum);
    stats.appendChild(winNum);
    stats.appendChild(lossNum);
    stats.appendChild(pNum);



	//attach

	leagueTile.appendChild(teamRank);
	leagueTile.appendChild(team);
	leagueTile.appendChild(stats);

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

    var stats=document.createElement('div');
    stats.classList.add("stats");

    var gamesNum=document.createElement('p');
    var winNum=document.createElement('p');
    var lossNum=document.createElement('p');
    var pNum=document.createElement('p');
    
    gamesNum.innerHTML=data['games']['played'];
    winNum.innerHTML=data['games']['win']['total'];
    lossNum.innerHTML=data['games']['lose']['total'];
    pNum.innerHTML=data['games']['win']['percentage'];

    stats.appendChild(gamesNum);
    stats.appendChild(winNum);
    stats.appendChild(lossNum);
    stats.appendChild(pNum);



	//attach

	leagueTile.appendChild(teamRank);
	leagueTile.appendChild(team);
	leagueTile.appendChild(stats);

    //create the full table

	leaguesTable_EC.appendChild(leagueTile);

}
	

	fetch("https://v1.basketball.api-sports.io/standings?league=1&season=2021",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.baseball.api-sports.io",
		"x-rapidapi-key":MY_API_KEY
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'][0];

		
        
		
		var team=tablesList[0]['team'];

        rankNum.innerHTML=rank;
        TeamName.innerHTML=team['name'];

		/*var groupFirst=tablesList[15]['group'];
		var groupSecond=tablesList[1]['group'];

        
       


		groupName_1.innerHTML=groupSecond['name'];
		for(var i=0;i<15;i++){
            
			addTableTile_WC(tablesList[i]);
		}


		groupName_2.innerHTML=groupFirst['name'];
		for(var i=15;i<30;i++)
		{
			addTableTile_EC(tablesList[i]);
		}*/

	}))
	.catch(err=>{
		console.log(err);
	});


