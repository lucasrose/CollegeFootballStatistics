//append table information
$(document).ready(function(){
  var html = setupTables
  $("#inner").append(html)
})

//pass sorted array of leagues
function createTable(data){
  var tableHTML = '<div id="league-table">'
  var leagues = ["ACC", "SEC", "Big-10", "Big-12",                      "Pac-12"]
  
  for (var i = 0; i < leagues.length; i++){
    tableHTML += createLeague(data, leagues[i])
  }
  
  tableHTML += '</div>'
  return tableHTML
}

//pass json of league, create league from teams
function createLeague(data, league){
  var leagueHTML = '<div id="' + league +'">'
  
  for (var i = 0; i < 25, i++){
    var team = data[i]
    if (team.league === league)
      leagueHTML += createTeam(team)
  }
  
  leagueHTML += '</div>'
  return leagueHTML
}

//pass single team data, build html from json
function createTeam(data){
  var team = data.name  //arbitrary data.name
  var logo = data.link  //arbitrary data.link
  var html = '<a href="' + team '">' +
             '<img src="'+ logo '"></a>'
             
  return html
}


