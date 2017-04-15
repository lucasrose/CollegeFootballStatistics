//append table information
$(document).ready(function(){
//  var html = setupTables
//  $("#inner").append(html)
})

////pass sorted array of leagues
//function createTable(data){
//  var tableHTML = '<div id="league-table">'
//  var leagues = ["ACC", "SEC", "Big-10", "Big-12", "Pac-12"]
//  
//  for (var i = 0; i < leagues.length; i++){
//    tableHTML += createLeague(data, leagues[i])
//  }
//  
//  tableHTML += '</div>'
//  return tableHTML
//}
//
////pass json of league, create league from teams
//function createLeague(data, league){
//  var leagueHTML = '<div id="' + league +'">'
//  
//  for (var i = 0; i < 25, i++){
//    var team = data[i]
//    if (team.league === league)
//      leagueHTML += createTeam(team)
//  }
//  
//  leagueHTML += '</div>'
//  return leagueHTML
//}
//
////pass single team data, build html from json
//function createTeam(data){
//  var team = data.name  //arbitrary data.name
//  var logo = data.link  //arbitrary data.link
//  var html = '<a href="' + team '">' +
//             '<img src="'+ logo '"></a>'
//             
//  return html
//}

function getRankings2012(){
  loadFile("http://34.208.59.48:8000/api/rankings/2012", showJSON, "Rankings_2012\n")
}

function showJSON(json){
  //var parsedJSON = JSON.parse(json)
  alert(json + this.responseText)
}

function xhrSuccess () { this.callback.apply(this, this.arguments) }

function xhrError () { console.error(this.statusText) }

function loadFile (sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
  var oReq = new XMLHttpRequest()
  oReq.callback = fCallback
  oReq.arguments = Array.prototype.slice.call(arguments, 2)
  oReq.onload = xhrSuccess
  oReq.onerror = xhrError
  oReq.open("get", sURL, true)
  oReq.send(null)
}

