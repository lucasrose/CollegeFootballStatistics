//append table information
$(document).ready(function(){
  getRankings2015()
  
})

function insertTeam(team){
  var html = "<li class='team'>" +
             "<div><a href='" + team + "' ><img " +            "src='http://maxpreps.cbsistatic.com/includes/images/signing_day/logos/site/virginia_tech.png'></a>" +
             "</div></li>"
  $("#inner").append(html)
}

function getRankings2015(){
  loadFile("http://34.208.59.48:8000/api/our-rankings/2015/", getResults)
}

function getResults(){
  var json = this.response
  var CFB25 = json["0"]
  var AP25 = json["1"]
  
  alert(CFB25.type)
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

