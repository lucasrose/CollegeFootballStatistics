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

$(document).ready(function(){
  getRankings2015()
  
})

function insertTeam(rank, team){
  var html = "<li class='team'><div class='rank'>" + rank +"</div><a href='team'><div class='team-logo'>" +
             "<img src='../../assets/logos/" + images[team].toString() + ".png'/>" + 
             "</div><div class='team-content'>" + team.toUpperCase() + "</div></a></li>"
  //append invisible content on hover here
  $("#inner").append(html)
}

function getRankings2015(){
  loadFile("http://34.208.59.48:8000/api/our-rankings/2015/", getResults)
}

function getResults(){
  var json = this.response
  
  parseResults(json["0"])
  //parseResults(json["1"])
}

function parseResults(data){
  var type = data["type"]
  var week = data["week"]
  
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

