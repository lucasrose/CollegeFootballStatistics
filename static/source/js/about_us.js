$(document).ready(function(){
  addGrant()
  addKyle()
  addLucas()
})

function createPerson(name, major, bio, linkedInUrl, gitHubUrl){
  var html = "<div class='person'>" +
    "<div>" +
      "<h2 class='page-sub-header'>" + name + 
        "<div class='major'>" + major + " - VIRGINIA TECH</div>" +
        "<a class='linkedin-link' href='" + linkedInUrl + "'>LinkedIn</a>" +
        "<a class='github-link' href='" + gitHubUrl + "'>GitHub</a>" + 
      "</h2>" +
    "</div>" +
"<div class='bio'>" + bio + "</div></div>"
  
  $('#inner').append(html)
}



function addLucas(){
  var name = "Lucas Rose"
  var major = "COMPUTER SCIENCE"
  var linkedInUrl = ""
  var gitHubUrl = ""
  var bio = "Insert Bio Here"
  
  createPerson(name, major, bio, linkedInUrl, gitHubUrl)
}

function addKyle(){
  var name = "Kyle Johnson"
  var major = "COMPUTER SCIENCE AND MATHEMATICS"
  var linkedInUrl = ""
  var gitHubUrl = ""
  var bio = "Insert Bio Here"
  
  createPerson(name, major, bio, linkedInUrl, gitHubUrl)
}

function addGrant(){
  var name = "Grant Hughes"
  var major = "COMPUTER SCIENCE"
  var linkedInUrl = ""
  var gitHubUrl = ""
  var bio = "Insert Bio Here"
  
  createPerson(name, major, bio, linkedInUrl, gitHubUrl)
}