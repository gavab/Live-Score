

var leagueName=document.querySelector("#leagueName");
var leagueLogo=document.querySelector("leagueLogo");
var TeamName=document.querySelector("#teamName");
var leaguesTable=document.querySelector("#leaguesTable");



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

	leaguesTable.appendChild(leagueTile);

}


	

	fetch("https://v1.basketball.api-sports.io/standings?league=12&season=2019-2020",{
	"method": "GET",
	"headers":{
		"x-rapidapi-host":"v1.basketball.api-sports.io",
		"x-rapidapi-key":""
		}
	})
	.then(response=>response.json().then(data=>{

		var tablesList=data['response'][0];

		var league=tablesList[0]['league'];
		var rank=tablesList[0]['position'];
		var team=tablesList[0]['team'];

        leagueName.innerHTML=league['name'];
       

		for(var i=0;i<tablesList.length;i++){
            
			addTableTile(tablesList[i]);
            
		}

	}))
	.catch(err=>{
		console.log(err);
	});


