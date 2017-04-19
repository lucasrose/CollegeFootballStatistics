//append table information
var images = {
  "Clemson": 1,
  "Alabama": 73,
  "Michigan State": 30,
  "Oklahoma": 24,
  "Iowa": 28,
  "Ohio State": 19,
  "Notre Dame": 104,
  "Florida State": 3,
  "North Carolina": 6,
  "TCU": 85,
  "Ole Miss": 77,
  "Northwestern": 32,
  "Michigan": 29,
  "Oregon": 60,
  "Oklahoma State": 25,
  "Baylor": 79,
  "Houston": 80,
  "Florida": 67,
  "LSU": 76,
  "Navy": 102,
  "Utah": 94,
  "Tennessee": 71,
  "Temple": 15,
  "USC": 62,
  "Stanford": 63
}

var mascots = {
  "Clemson": "Tigers",
  "Alabama": "Crimson Tide",
  "Michigan State": "Spartans",
  "Oklahoma": "Sooners",
  "Iowa": "Hawkeyes",
  "Ohio State": "Buckeyes",
  "Notre Dame": "Fighting Irish",
  "Florida State": "Seminoles",
  "North Carolina": "Tar Heels",
  "TCU": "Horned Frogs",
  "Ole Miss": "Rebels",
  "Northwestern": "Wildcats",
  "Michigan": "Wolverines",
  "Oregon": "Ducks",
  "Oklahoma State": "Cowboys",
  "Baylor": "Bears",
  "Houston": "Cougars",
  "Florida": "Gators",
  "LSU": "Tigers",
  "Navy": "Midshipmen",
  "Utah": "Utes",
  "Tennessee": "Volunteers",
  "Temple": "Owls",
  "USC": "Trojans",
  "Stanford": "Cardinal"
}

$(document).ready(function(){
  getLatestRankings("http://34.208.59.48:8000/api/our-rankings/2015/")
})

function insertTeam(rank, team){
  var html = "<li class='team'><div class='rank'>" + rank +"</div><a href='" + getTeamReference(team) + 
             "'><div class='team-logo'>" +
             "<img src='../../assets/logos/" + images[team].toString() + ".png'/>" + 
             "</div><div class='team-name'>" + team.toUpperCase() + "</div>" +
             "<div class='team-mascot'>"+ mascots[team].toUpperCase() +"</div></a></li>"
  $("#inner").append(html)
}

function insertWeek(week){
  var currentWeek = "WEEK " + week.toString()
  var html = "<div id='week-number'>" + currentWeek + "</div>"
  $("#week-number").append(html)
}

function getTeamReference(team){
  var link = "http://www.foxsports.com/college-football/"
  link += team
  link += "-"
  link += mascots[team]
  link += "-team"

  return link.replace(" ", "-").toLowerCase()
}

function getLatestRankings(url){
  loadFile(url, getResults)
}

function getResults(){
  var json = this.response
  
  parseResults(json["0"])
  //parseResults(json["1"])
}

function parseResults(data){
  var type = data["type"]
  var week = data["week"]
  
  insertWeek(week)
  var rankings = data["ranking"]

  for (var i = 1; i <= 25; i++){
    var rank = i.toString()
    var teamData = rankings[rank]
    insertTeam(i, teamData["college"])
  }
}

function xhrSuccess () { this.callback.apply(this, this.arguments) }

function xhrError () { console.error(this.statusText) }

function loadFile (sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
  var xhr = new XMLHttpRequest()
  xhr.callback = fCallback
  xhr.arguments = Array.prototype.slice.call(arguments, 2)
  xhr.responseType = 'json'
  xhr.onload = xhrSuccess
  xhr.onerror = xhrError
  xhr.open("get", sURL, true)
  xhr.send(null)
}

