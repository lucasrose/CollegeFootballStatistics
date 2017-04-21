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
  "Stanford": 63,
  "Mississippi": 77,
  "Texas Christian": 85,
  "Louisiana State": 76,
  "Southern California": 62,
  "Wisconsin": 36,
  "Toledo": 55,
  "Mississippi State": 78,
  "Ucla": 64,
  "Washington State": 66,
  "Memphis": 101,
  "Texas A&M": 84,
  "Pittsburgh": 12,
  "Duke": 2,
  "California": 59,
  "Boise State": 112,
  "Georgia": 68,
  "West Virginia": 17,
  "Arizona": 57,
  "Missouri": 22,
  "Georgia Tech": 4,
  "Brigham Young": 88,
  "Auburn": 75 
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
  "Stanford": "Cardinal",
  "Mississippi": "Rebels",
  "Texas Christian": "Horned Frogs",
  "Louisiana State": "Tigers",
  "Southern California": "Trojans",
  "Wisconsin": "Badgers",
  "Toledo": "Rockets",
  "Mississippi State": "Bulldogs",
  "Ucla": "Bruins",
  "Washington State": "Cougars",
  "Memphis": "Tigers",
  "Texas A&M": "Aggies",
  "Pittsburgh": "Panthers",
  "Duke": "Blue Devils",
  "California": "Golden Bears",
  "Boise State": "Broncos",
  "Georgia": "Bulldogs",
  "West Virginia": "Mountaineers",
  "Arizona": "Wildcats",
  "Missouri": "Tigers",
  "Georgia Tech": "Yellow Jackets",
  "Brigham Young": "Cougars",
  "Auburn": "Tigers"
}

$(document).ready(function(){
  getLatestRankings("http://34.208.59.48:8000/api/our-rankings/2016/")
})

function insertTeam(rank, team){
  var html = "<li class='team'><div class='rank'>" + rank +"</div><a href='" + getTeamReference(team) + 
             "'><div class='team-logo'>" +
             "<img src='http://b.fssta.com/uploads/content/dam/fsdigital/fscom/global/dev/static_resources/ncaaf/teams/retina/" + images[team].toString() + ".png'/>" + 
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
  var teamName = resolveTeam(team)
  var link = "http://www.foxsports.com/college-football/"
  link += teamName
  link += "-"
  link += mascots[team]
  link += "-team"

  return link.replace(" ", "-").toLowerCase()
}

function resolveTeam(team) {
  var teamAbbr = ""
  switch (team) {
    case "Mississippi":
      teamAbbr = "Ole Miss"
      break
    case "Texas Christian":
      teamAbbr = "TCU"
      break
    case "Louisiana State":
      teamAbbr = "LSU"
      break
    case "Southern California":
      teamAbbr = "USC"
      break
    case "Brigham Young":
      teamAbbr = "BYU"
      break
    case "Texas A&M":
      teamAbbr = "Texas AM"
      break
    default:
      teamAbbr = team
  }
  return teamAbbr
}

function getLatestRankings(url){
  loadFile(url, getResults)
}

function updateRankings(url){
  $("#inner").empty()
  $("#week-number").empty()
  getLatestRankings(url)
}

function getResults(){
  var json = this.response
  
  parseResults(json["0"])
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

